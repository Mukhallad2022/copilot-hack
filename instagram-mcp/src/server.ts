import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { InstagramApiError, type InstagramClient } from "./instagram.js";

export interface ServerOptions {
  /** Registers the send_message tool. Off by default so the connector is read-only. */
  allowSend?: boolean;
}

export function createServer(ig: InstagramClient, opts: ServerOptions = {}): McpServer {
  const server = new McpServer({ name: "instagram-dms", version: "1.0.0" });
  const readOnly = { readOnlyHint: true, openWorldHint: true } as const;

  server.registerTool(
    "get_profile",
    {
      title: "Get Instagram profile",
      description: "Returns the connected Instagram professional account (id, username).",
      annotations: readOnly,
    },
    () => run(() => ig.getProfile()),
  );

  server.registerTool(
    "list_conversations",
    {
      title: "List DM conversations",
      description:
        "Lists the account's Instagram DM conversations, most recently updated first, with participants. " +
        "Pass next_cursor from a previous result as `after` to get the next page.",
      inputSchema: {
        limit: z.number().int().min(1).max(100).default(25),
        after: z.string().optional().describe("Pagination cursor (next_cursor from a previous call)"),
      },
      annotations: readOnly,
    },
    ({ limit, after }) => run(() => ig.listConversations(limit, after)),
  );

  server.registerTool(
    "find_conversation",
    {
      title: "Find conversation by username",
      description:
        "Finds the DM conversation with a given Instagram username by scanning recent conversations. " +
        "Returns the conversation (with its id) or null.",
      inputSchema: {
        username: z.string().min(1).describe("Instagram username, with or without @"),
        max_conversations: z.number().int().min(1).max(1000).default(200).describe("How many recent conversations to scan"),
      },
      annotations: readOnly,
    },
    ({ username, max_conversations }) =>
      run(async () => {
        const wanted = username.replace(/^@/, "").toLowerCase();
        let after: string | undefined;
        let scanned = 0;
        do {
          const page = await ig.listConversations(Math.min(100, max_conversations - scanned), after);
          const hit = page.data.find((c) => c.participants?.some((p) => p.username?.toLowerCase() === wanted));
          if (hit) return hit;
          scanned += page.data.length;
          after = page.next_cursor;
        } while (after && scanned < max_conversations);
        return null;
      }),
  );

  server.registerTool(
    "get_messages",
    {
      title: "Read messages in a conversation",
      description:
        "Returns messages in a DM conversation, newest first (sender, recipients, text, attachments, timestamp). " +
        "Note: Instagram only returns full details for the 20 most recent messages of a conversation.",
      inputSchema: {
        conversation_id: z.string().min(1),
        limit: z.number().int().min(1).max(100).default(20),
        after: z.string().optional().describe("Pagination cursor (next_cursor from a previous call)"),
      },
      annotations: readOnly,
    },
    ({ conversation_id, limit, after }) => run(() => ig.listMessages(conversation_id, limit, after)),
  );

  server.registerTool(
    "get_message",
    {
      title: "Get a single message",
      description: "Returns one message by id, including attachments.",
      inputSchema: { message_id: z.string().min(1) },
      annotations: readOnly,
    },
    ({ message_id }) => run(() => ig.getMessage(message_id)),
  );

  if (opts.allowSend) {
    server.registerTool(
      "send_message",
      {
        title: "Send a DM",
        description:
          "Sends a text DM to an Instagram user who has messaged this account. recipient_id is the user's " +
          "Instagram-scoped id (from a conversation's participants). Instagram only allows replies within 24 hours " +
          "of the user's last message. Confirm the exact text with the user before calling.",
        inputSchema: {
          recipient_id: z.string().min(1),
          text: z.string().min(1).max(1000),
        },
        annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: false, openWorldHint: true },
      },
      ({ recipient_id, text }) => run(() => ig.sendText(recipient_id, text)),
    );
  }

  return server;
}

async function run(fn: () => Promise<unknown>) {
  try {
    const result = await fn();
    return { content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }] };
  } catch (err) {
    const msg =
      err instanceof InstagramApiError
        ? `Instagram API error (HTTP ${err.status}${err.code ? `, code ${err.code}` : ""}): ${err.message}`
        : `${err}${err instanceof Error && err.cause ? ` (cause: ${err.cause})` : ""}`;
    return { isError: true, content: [{ type: "text" as const, text: msg }] };
  }
}
