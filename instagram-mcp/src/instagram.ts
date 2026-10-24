// Thin client for the Instagram API with Instagram Login (graph.instagram.com).
// Docs: https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/conversations-api

export interface InstagramClientOptions {
  accessToken: string;
  apiVersion?: string;
  baseUrl?: string;
  fetchImpl?: typeof fetch;
}

export interface Page<T> {
  data: T[];
  next_cursor?: string;
}

export interface Participant {
  id: string;
  username?: string;
}

export interface Conversation {
  id: string;
  updated_time?: string;
  participants?: Participant[];
}

export interface Message {
  id: string;
  created_time?: string;
  from?: Participant;
  to?: Participant[];
  message?: string;
  attachments?: unknown;
}

const MESSAGE_FIELDS = "id,created_time,from,to,message,attachments";

export class InstagramApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly code?: number,
  ) {
    super(message);
    this.name = "InstagramApiError";
  }
}

export class InstagramClient {
  private readonly accessToken: string;
  private readonly root: string;
  private readonly fetchImpl: typeof fetch;

  constructor(opts: InstagramClientOptions) {
    this.accessToken = opts.accessToken;
    this.root = `${opts.baseUrl ?? "https://graph.instagram.com"}/${opts.apiVersion ?? "v26.0"}`;
    this.fetchImpl = opts.fetchImpl ?? fetch;
  }

  getProfile(): Promise<{ id: string; user_id?: string; username?: string; name?: string }> {
    return this.request("GET", "/me", { fields: "id,user_id,username,name" });
  }

  async listConversations(limit: number, after?: string): Promise<Page<Conversation>> {
    const res = await this.request<GraphList<RawConversation>>("GET", "/me/conversations", {
      platform: "instagram",
      fields: "id,updated_time,participants",
      limit: String(limit),
      ...(after ? { after } : {}),
    });
    return {
      data: res.data.map((c) => ({ ...c, participants: c.participants?.data })),
      next_cursor: nextCursor(res),
    };
  }

  async listMessages(conversationId: string, limit: number, after?: string): Promise<Page<Message>> {
    // The first page comes nested under the conversation; later pages are fetched from the edge directly.
    if (after) {
      const res = await this.request<GraphList<RawMessage>>("GET", `/${enc(conversationId)}/messages`, {
        fields: MESSAGE_FIELDS,
        limit: String(limit),
        after,
      });
      return { data: res.data.map(normalizeMessage), next_cursor: nextCursor(res) };
    }
    const res = await this.request<{ messages?: GraphList<RawMessage> }>("GET", `/${enc(conversationId)}`, {
      fields: `messages.limit(${limit}){${MESSAGE_FIELDS}}`,
    });
    const msgs = res.messages ?? { data: [] };
    return { data: msgs.data.map(normalizeMessage), next_cursor: nextCursor(msgs) };
  }

  async getMessage(messageId: string): Promise<Message> {
    return normalizeMessage(await this.request<RawMessage>("GET", `/${enc(messageId)}`, { fields: MESSAGE_FIELDS }));
  }

  sendText(recipientId: string, text: string): Promise<{ recipient_id: string; message_id: string }> {
    return this.request("POST", "/me/messages", undefined, {
      recipient: { id: recipientId },
      message: { text },
    });
  }

  private async request<T>(
    method: "GET" | "POST",
    path: string,
    query?: Record<string, string>,
    body?: unknown,
  ): Promise<T> {
    const url = new URL(this.root + path);
    for (const [k, v] of Object.entries(query ?? {})) url.searchParams.set(k, v);
    // Bearer header keeps the token out of URLs (and therefore out of proxy/server logs).
    const res = await this.fetchImpl(url, {
      method,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        ...(body ? { "Content-Type": "application/json" } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    const json = (await res.json().catch(() => ({}))) as { error?: { message?: string; code?: number } };
    if (!res.ok || json.error) {
      throw new InstagramApiError(json.error?.message ?? `HTTP ${res.status}`, res.status, json.error?.code);
    }
    return json as T;
  }
}

interface GraphList<T> {
  data: T[];
  paging?: { cursors?: { after?: string }; next?: string };
}

type RawConversation = Omit<Conversation, "participants"> & { participants?: { data: Participant[] } };
type RawMessage = Omit<Message, "to"> & { to?: { data: Participant[] } };

function normalizeMessage(m: RawMessage): Message {
  return { ...m, to: m.to?.data };
}

// Graph API includes a cursor even on the last page; only `next` says whether more exists.
function nextCursor(list: GraphList<unknown>): string | undefined {
  return list.paging?.next ? list.paging.cursors?.after : undefined;
}

function enc(id: string): string {
  return encodeURIComponent(id);
}
