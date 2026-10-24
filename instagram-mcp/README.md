# instagram-mcp

An MCP server that lets Claude read your Instagram DMs (and, optionally, reply), using Meta's
[Instagram API with Instagram Login](https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/conversations-api).

> **Requires an Instagram professional account (Business or Creator).** Meta's API does not expose DMs
> for personal accounts. Switching is free: Instagram app → Settings → Account type and tools → Switch to professional account.

## Tools

| Tool | What it does |
| --- | --- |
| `get_profile` | The connected account's id and username |
| `list_conversations` | DM threads, most recent first, with participants (paginated) |
| `find_conversation` | Find the thread with a given `@username` |
| `get_messages` | Messages in a thread: sender, text, attachments, time (paginated) |
| `get_message` | One message by id |
| `send_message` | Reply with text. **Only registered when `ALLOW_SEND=true`.** Instagram only allows replies within 24h of the other person's last message. |

Instagram API limitation: full message details are only returned for the **20 most recent messages** in each conversation.
For older history, use Instagram's "Download your information" export.

## 1. Get an access token

1. Go to <https://developers.facebook.com/apps> → **Create app** → use case **Manage messaging & content on Instagram**.
2. In the app: **Instagram → API setup with Instagram login**.
   - Under *Generate access tokens*, click **Add account** and log in with your Instagram professional account.
   - Click **Generate token** and copy it. This is a long-lived token (valid 60 days).
3. Make sure the permissions include `instagram_business_basic` and `instagram_business_manage_messages`.
   While the app is in **Development** mode this works for your own account without App Review.
4. In the Instagram app on your phone: Settings → Messages and story replies → Message controls →
   **Connected tools → Allow access to messages** must be on.

Refresh the token before the 60 days run out (any time after it is 24h old):

```bash
curl "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=$INSTAGRAM_ACCESS_TOKEN"
```

## 2. Run it

```bash
npm install
npm run build
```

| Env var | Required | Meaning |
| --- | --- | --- |
| `INSTAGRAM_ACCESS_TOKEN` | yes | Token from step 1 |
| `MCP_SECRET` | HTTP mode | Random string, ≥32 chars; becomes part of the connector URL |
| `ALLOW_SEND` | no | `true` to enable `send_message` (default: read-only) |
| `PORT` / `HOST` | no | Default `3000` / `0.0.0.0` |
| `INSTAGRAM_API_VERSION` | no | Default `v26.0` |

Generate a secret with `node -e 'console.log(require("crypto").randomBytes(32).toString("base64url"))'`.

### Option A — claude.ai custom connector (works on web, desktop, mobile, and cloud Claude Code)

Deploy the server somewhere with HTTPS (Render, Railway, Fly.io, Cloud Run…; a `Dockerfile` is included), set the env vars, then:

1. Open <https://claude.ai/customize/connectors> → **Add custom connector**.
2. URL: `https://<your-host>/mcp/<MCP_SECRET>`
3. Start a new chat/session — connectors load when a session starts.

**Security:** the URL *is* the credential. Anyone with it can read your DMs. Don't share it or commit it;
rotate `MCP_SECRET` if it leaks.

### Option B — local (Claude Code / Claude Desktop on your computer)

```bash
claude mcp add instagram -e INSTAGRAM_ACCESS_TOKEN=... -- node /path/to/instagram-mcp/dist/index.js --stdio
```

## Development

```bash
npm test   # builds and runs the tool tests against a fake Graph API
```
