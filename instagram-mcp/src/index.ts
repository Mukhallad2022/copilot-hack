#!/usr/bin/env node
import { timingSafeEqual } from "node:crypto";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { createMcpExpressApp } from "@modelcontextprotocol/sdk/server/express.js";
import { InstagramClient } from "./instagram.js";
import { createServer } from "./server.js";

const env = process.env;

const token = env.INSTAGRAM_ACCESS_TOKEN;
if (!token) fail("INSTAGRAM_ACCESS_TOKEN is required");

const ig = new InstagramClient({ accessToken: token, apiVersion: env.INSTAGRAM_API_VERSION });
const serverOpts = { allowSend: env.ALLOW_SEND === "true" };

if (process.argv.includes("--stdio")) {
  // Local use (Claude Code / Claude Desktop): the client launches this process directly.
  await createServer(ig, serverOpts).connect(new StdioServerTransport());
} else {
  // Remote use (claude.ai custom connector): Streamable HTTP, stateless.
  // The connector URL carries a long random secret; anyone with the URL can read your DMs, so treat it like a password.
  const secret = env.MCP_SECRET;
  if (!secret || secret.length < 32) fail("MCP_SECRET (at least 32 chars) is required in HTTP mode");

  const host = env.HOST ?? "0.0.0.0";
  const port = Number(env.PORT ?? 3000);
  const app = createMcpExpressApp({ host });

  app.get("/healthz", (_req, res) => {
    res.send("ok");
  });

  app.all("/mcp/:secret", async (req, res) => {
    if (!safeEqual(String(req.params.secret), secret)) {
      res.status(404).end();
      return;
    }
    if (req.method !== "POST") {
      // Stateless server: no SSE stream or session to resume/delete.
      res.status(405).set("Allow", "POST").end();
      return;
    }
    const server = createServer(ig, serverOpts);
    const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });
    res.on("close", () => {
      void transport.close();
      void server.close();
    });
    try {
      await server.connect(transport);
      await transport.handleRequest(req, res, req.body);
    } catch (err) {
      console.error("MCP request failed:", err);
      if (!res.headersSent) {
        res.status(500).json({ jsonrpc: "2.0", error: { code: -32603, message: "Internal error" }, id: null });
      }
    }
  });

  app.listen(port, host, () => {
    console.log(`instagram-mcp listening on http://${host}:${port}/mcp/<MCP_SECRET>`);
  });
}

function safeEqual(a: string, b: string): boolean {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

function fail(msg: string): never {
  console.error(msg);
  process.exit(1);
}
