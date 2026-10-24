import { test } from "node:test";
import assert from "node:assert/strict";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { InstagramClient } from "./instagram.js";
import { createServer, type ServerOptions } from "./server.js";

interface Call {
  method: string;
  url: URL;
  auth: string | null;
  body?: unknown;
}

// Fake graph.instagram.com: routes on path, records every call.
function fakeGraph(routes: Record<string, (url: URL) => unknown>) {
  const calls: Call[] = [];
  const fetchImpl = (async (input: URL, init?: RequestInit) => {
    const headers = new Headers(init?.headers);
    calls.push({
      method: init?.method ?? "GET",
      url: input,
      auth: headers.get("authorization"),
      body: init?.body ? JSON.parse(String(init.body)) : undefined,
    });
    const path = input.pathname.replace(/^\/v[\d.]+/, "");
    const handler = routes[`${init?.method ?? "GET"} ${path}`];
    if (!handler) return Response.json({ error: { message: "Unsupported path", code: 100 } }, { status: 400 });
    return Response.json(handler(input));
  }) as typeof fetch;
  return { calls, ig: new InstagramClient({ accessToken: "tok", fetchImpl }) };
}

async function connect(ig: InstagramClient, opts?: ServerOptions) {
  const [a, b] = InMemoryTransport.createLinkedPair();
  await createServer(ig, opts).connect(a);
  const client = new Client({ name: "test", version: "0" });
  await client.connect(b);
  return client;
}

async function callJson(client: Client, name: string, args: Record<string, unknown> = {}) {
  const res = await client.callTool({ name, arguments: args });
  const text = (res.content as { text: string }[])[0].text;
  return { isError: res.isError, text, json: res.isError ? undefined : JSON.parse(text) };
}

const conv = (id: string, username: string) => ({
  id,
  updated_time: "2026-10-01T00:00:00+0000",
  participants: { data: [{ id: "me", username: "mybiz" }, { id: `igsid-${id}`, username }] },
});

test("send_message is only exposed when allowed", async () => {
  const { ig } = fakeGraph({});
  const ro = await (await connect(ig)).listTools();
  assert.deepEqual(
    ro.tools.map((t) => t.name).sort(),
    ["find_conversation", "get_message", "get_messages", "get_profile", "list_conversations"],
  );
  const rw = await (await connect(ig, { allowSend: true })).listTools();
  assert.ok(rw.tools.some((t) => t.name === "send_message"));
});

test("list_conversations flattens participants, sends bearer token, exposes cursor only when there is a next page", async () => {
  const { ig, calls } = fakeGraph({
    "GET /me/conversations": (url) =>
      url.searchParams.get("after")
        ? { data: [conv("c2", "bob")], paging: { cursors: { after: "end" } } }
        : { data: [conv("c1", "alice")], paging: { cursors: { after: "cur1" }, next: "https://next" } },
  });
  const client = await connect(ig);

  const first = await callJson(client, "list_conversations", { limit: 1 });
  assert.equal(first.json.data[0].participants[1].username, "alice");
  assert.equal(first.json.next_cursor, "cur1");
  assert.equal(calls[0].auth, "Bearer tok");
  assert.equal(calls[0].url.searchParams.get("platform"), "instagram");
  assert.equal(calls[0].url.searchParams.get("access_token"), null);

  const second = await callJson(client, "list_conversations", { limit: 1, after: "cur1" });
  assert.equal(second.json.data[0].id, "c2");
  assert.equal(second.json.next_cursor, undefined);
});

test("find_conversation pages until it finds the username (case and @ insensitive)", async () => {
  const { ig } = fakeGraph({
    "GET /me/conversations": (url) =>
      url.searchParams.get("after")
        ? { data: [conv("c2", "Bob")] }
        : { data: [conv("c1", "alice")], paging: { cursors: { after: "cur1" }, next: "https://next" } },
  });
  const client = await connect(ig);
  assert.equal((await callJson(client, "find_conversation", { username: "@bob" })).json.id, "c2");
  assert.equal((await callJson(client, "find_conversation", { username: "carol" })).json, null);
});

test("get_messages uses nested field on first page and the edge for later pages", async () => {
  const msg = { id: "m1", message: "hi", from: { id: "u", username: "alice" }, to: { data: [{ id: "me" }] } };
  const { ig, calls } = fakeGraph({
    "GET /c1": () => ({ id: "c1", messages: { data: [msg], paging: { cursors: { after: "m-cur" }, next: "x" } } }),
    "GET /c1/messages": () => ({ data: [{ ...msg, id: "m0" }] }),
  });
  const client = await connect(ig);

  const first = await callJson(client, "get_messages", { conversation_id: "c1", limit: 5 });
  assert.deepEqual(first.json.data[0].to, [{ id: "me" }]);
  assert.equal(first.json.next_cursor, "m-cur");
  assert.match(calls[0].url.searchParams.get("fields")!, /^messages\.limit\(5\)\{.*message.*\}$/);

  const next = await callJson(client, "get_messages", { conversation_id: "c1", after: "m-cur" });
  assert.equal(next.json.data[0].id, "m0");
  assert.equal(calls[1].url.searchParams.get("after"), "m-cur");
});

test("send_message posts recipient and text", async () => {
  const { ig, calls } = fakeGraph({ "POST /me/messages": () => ({ recipient_id: "u1", message_id: "mid" }) });
  const client = await connect(ig, { allowSend: true });
  const res = await callJson(client, "send_message", { recipient_id: "u1", text: "thanks!" });
  assert.equal(res.json.message_id, "mid");
  assert.deepEqual(calls[0].body, { recipient: { id: "u1" }, message: { text: "thanks!" } });
});

test("Graph API errors come back as tool errors", async () => {
  const { ig } = fakeGraph({});
  const res = await callJson(await connect(ig), "get_message", { message_id: "nope" });
  assert.equal(res.isError, true);
  assert.match(res.text, /HTTP 400, code 100.*Unsupported path/);
});
