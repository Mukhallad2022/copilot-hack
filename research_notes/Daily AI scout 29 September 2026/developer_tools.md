# AI Developer Tools, Coding Agents and AI Platform/API Changes (window: Fri 25 Sep – Tue 29 Sep 2026)

Method notes for the report writer:
- Dates are UTC unless marked PT. Anything before Fri 25 Sep is labelled **CONTEXT**. Action flags: `TRY NOW`, `UPDATE`, `BREAKING — act before <date>`, `WATCH`, `NO ACTION`.
- The GitHub changelog index was fetched at about 12:05 UTC on Tue 29 Sep. Tue 29 Sep posts usually land later in the US day, so today's GitHub items may be missing. Sat 26 and Sun 27 Sep had no Copilot posts.
- Release dates for Claude Code, Codex, Copilot CLI and Gemini CLI were checked two ways: the GitHub releases pages and the npm/PyPI registry timestamps. The two sources agree to within minutes.
- Some sources could not be used. `github.blog` and `developers.openai.com` are blocked for direct fetch here, so their content was read through search/fetch intermediaries. The platform.openai.com changelog snapshot I received stopped at 15 Sep, even though GPT-6 Sol/Luna reached the API on 22 Sep, so it looks stale. I used OpenAI's community announcement and press coverage for that launch instead.

## Q1. What changed in GitHub Copilot between Fri 25 Sep and Tue 29 Sep 2026?

### Takeaway
The window had one new model and several policy and billing changes. Claude Sonnet 5.5 went GA on Mon 28 Sep, billed at provider list price. Copilot CLI 1.0.89 shipped on 28 Sep and now reads `.claude/rules`. On 28 Sep two scheduled changes also became due: the Copilot code review default moved from Lite to Balanced effort, and the unified github.com/Mobile/cloud-agent experience was due to launch "no earlier than" that date. Deadlines follow in the next 3 weeks: Oct 1 (upfront seat billing), Oct 2 and Oct 19 (model retirements), and Oct 22 (default feature enablement takes effect).

### Cited Findings

**In-window GitHub changelog items, one by one (Copilot label plus relevant Actions items):**
- **`TRY NOW` Claude Sonnet 5.5 GA in Copilot, Mon 28 Sep.** Anthropic's newest Sonnet model, aimed at "well-scoped everyday work". GitHub says it matched Claude Sonnet 5 on coding tasks with "significantly fewer steps, tokens, and tool calls" and finished faster. Plans: Pro, Pro+, Max, Business, Enterprise. Surfaces: VS Code, Visual Studio, Copilot CLI, coding agent, Copilot app, github.com, Mobile, JetBrains, Xcode, Eclipse. Rollout is gradual. Business/Enterprise admins control it through the model policy, and it is auto-enabled under default model enablement. **Pricing:** "billed at provider list pricing under usage-based billing". Not breaking. — [GitHub Changelog](https://github.blog/changelog/2026-09-28-claude-sonnet-5-5-in-github-copilot)
- **`NO ACTION` (enterprise admins: `TRY NOW`) Enterprise managed settings in-product validator, Fri 25 Sep.** Validates `copilot/managed-settings.json`, `copilot/team-mappings.json` and referenced team files in the `.github-private` repo. It flags malformed JSON, unsupported configs and invalid team mappings, and reports each issue with file and JSON path on the enterprise AI Controls page. — [GitHub Changelog](https://github.blog/changelog/2026-09-25-enterprise-managed-settings-in-product-validator)
- **`NO ACTION` Usage metrics API adds PR review stages, Fri 25 Sep.** New `pull_request_review_times` array on `repos-1-day` rows, giving median and p90 minutes for three stages: ready→first review, first→final review, and final review→merge. Only human reviews are timed; Copilot code review and bots are ignored. No backfill: PRs that became ready before 21 Sep are excluded. — [GitHub Changelog](https://github.blog/changelog/2026-09-25-usage-metrics-api-adds-pull-request-review-stages)
- **`WATCH` Agentic autofix now uses Copilot Memory, Fri 25 Sep.** Autofix reads existing memories when fixing security alerts and stores fix patterns as new memories. Those memories can then inform Copilot code review and the cloud agent. Both features are in public preview. — [GitHub Changelog](https://github.blog/changelog/2026-09-25-agentic-autofix-now-uses-copilot-memory)
- **`NO ACTION` Copilot weekly releases roundup (week of 21 Sep), Fri 25 Sep.** Summarises the 22–24 Sep launches (context items below), plus VS Code 1.139 and JetBrains 1.18.0. Model plan gating: Opus 5.5 and GPT-6 Sol are Pro+/Max/Business/Enterprise only; GPT-6 Luna and Grok 4.7 also reach Pro. — [GitHub Changelog](https://github.blog/changelog/2026-09-25-github-copilot-weekly-releases-september-21)
- **`TRY NOW` (Business/Enterprise orgs) Copilot for Slack and Microsoft Teams updates, Fri 25 Sep.** Slack files, attachments and message links now work as context. Teams gets inline images, forwarded messages and channel/thread history. Users can switch models per message and the choice persists for the thread. Copilot checks for similar issues before creating one. Slack channels can set default owners and repositories. Repository switching is safer: superseded sessions can no longer act in the old repo. This is a public preview for Business/Enterprise, and usage counts against Copilot cloud-agent budgets. — [GitHub Changelog](https://github.blog/changelog/2026-09-25-updates-to-github-copilot-for-slack-and-microsoft-teams)
- **`BREAKING — act by 29 Sep` (GitHub Enterprise Cloud with self-hosted runners) Runner version enforcement date moved, Mon 28 Sep.** The change shipped 28 Sep and full enforcement starts **Tue 29 Sep 2026**. Runners below `2.329.0` cannot register or re-register, and runners below the job-execution minimum stop running jobs. GHES is not affected; GHE.com with data residency has been enforced since 31 Jul. This matters for anyone running Copilot coding agent / Actions on self-hosted runners. — [GitHub Changelog](https://github.blog/changelog/2026-09-28-self-hosted-runner-version-enforcement-date-has-moved)
- **`WATCH` Actions API/UI query counts capped, Fri 25 Sep.** Workflow-run searches now report "2,500+" instead of an exact count above 2,500 matches. Pagination still returns up to 1,000 items. Scripts that need more should narrow filters, for example by date range. — [GitHub Changelog](https://github.blog/changelog/2026-09-25-changes-to-query-results-in-the-github-actions-api-and-ui)
- The full 28 Sep index had only two posts: Sonnet 5.5 and the runner enforcement date. There were no Copilot posts on Sat 26 or Sun 27 Sep. — [GitHub Changelog index](https://github.blog/changelog/label/copilot/)

**Scheduled changes that became due in the window (announced earlier, on 28 Aug):**
- **`BREAKING / cost — took effect 28 Sep` Copilot code review default is now Balanced.** For all existing and new repos/orgs, a review effort of "Default" uses **Balanced** from 28 Sep 2026 instead of Lite. Teams that want Lite must select it explicitly. **Pricing impact:** Balanced effort is likely to consume more usage-based credits per review (inference). — [GitHub Changelog, 28 Aug](https://github.blog/changelog/2026-08-28-upcoming-changes-to-github-copilot-policies-and-billing/)
- **`WATCH` Unified Copilot experience scheduled "no earlier than 28 Sep".** Copilot Chat on github.com, Chat in GitHub Mobile and the Copilot cloud agent merge into one experience under a single policy, enabled by default. github.com Copilot moves to the agent-sessions model, so **chat data is retained for the life of the account instead of 28 days**. Opting out removes Copilot on github.com and Mobile, and the cloud agent will use Sandbox. As of the ~12:05 UTC 29 Sep fetch, no launch post appeared in the changelog index, so the launch is **not confirmed**. — [GitHub Changelog, 28 Aug](https://github.blog/changelog/2026-08-28-upcoming-changes-to-github-copilot-policies-and-billing/)

**Copilot CLI:**
- **`UPDATE` Copilot CLI 1.0.89 (latest stable), released 28 Sep 19:20 UTC.** Changes:
  - Supports Claude Code rule files in `.claude/rules` as custom instructions.
  - Adds GPT-6 Sol / GPT-6 Luna to the picker "when available" and adds `claude-opus-5.5`.
  - Auto now suggests a routing tier. The unsupported "Fast" Auto profile is removed, and a stored, exported or resumed Fast preference now falls back to Balance (minor behaviour change).
  - MCP pre-registered OAuth clients honour `oauthScopes`, and `server/tool` filters match tool names containing `/`.
  - Fixes Gemini-model requests that returned 400 when an MCP tool schema put `type`/`properties` beside `anyOf`.
  - PR creation follows repo PR templates.
  - New `TGREP_FILE_COUNT_THRESHOLD` setting controls indexed-search activation.
  - Sandbox fixes, including wrapped `timeout 60 gh ...` commands and Windows localhost access.
  - Direct plugin installs can now be enabled or disabled, and a plugin already recorded as disabled now stops loading.
  - Pre-releases 1.0.90-0/-1/-2 followed on 28–29 Sep. -1 reuses still-valid cached MCP OAuth tokens (for example Datadog).
  - Sources: [copilot-cli releases](https://github.com/github/copilot-cli/releases) and [npm @github/copilot](https://registry.npmjs.org/@github%2Fcopilot).

**CONTEXT (22–24 Sep, just before the window, still highly relevant):**
- **Claude Opus 5.5 in Copilot (22 Sep).** Pro+, Max, Business, Enterprise only. Billed at provider list price. GitHub notes that Opus 5.5 "watermarks its text outputs". — [GitHub Changelog](https://github.blog/changelog/2026-09-22-claude-opus-5-5-is-now-available-in-github-copilot)
- **GPT-6 Sol and GPT-6 Luna in Copilot (22 Sep).** Sol is Pro+ and above; Luna reaches Pro and above. Both are usage-billed. — [GitHub Changelog](https://github.blog/changelog/2026-09-22-openais-gpt-6-sol-and-gpt-6-luna-now-available)
- **Grok 4.7 in Copilot (21 Sep).** — [GitHub Changelog index](https://github.blog/changelog/label/copilot/)
- **Copilot app local sandboxing, public preview (23 Sep).** Configured per project across filesystem, network and credentials, and off by default. `/sandbox on` enables it for the current session. If the OS cannot enforce the policy, it fails closed. — [GitHub Changelog](https://github.blog/changelog/2026-09-23-local-sandboxing-in-the-github-copilot-app)
- **OpenTelemetry in the Copilot app via enterprise `managed-settings.json` `telemetry` (22 Sep).** Prompt and response content is excluded by default. — [GitHub Changelog](https://github.blog/changelog/2026-09-22-opentelemetry-in-the-github-copilot-app)
- **Copilot code review settings (23 Sep).** A personal code-review settings page is now available on every plan, including Business/Enterprise. It covers auto-review on PR creation, on new pushes and on drafts, plus a default effort of Lite or Balanced. There is also an enterprise-wide default review effort. — [GitHub Changelog](https://github.blog/changelog/2026-09-23-copilot-code-review-more-ways-to-request-and-configure-reviews)
- **Copilot for JetBrains 1.18.0 (22 Sep).**
  - Assisted (AI) tool approvals in preview.
  - Re-editing an earlier message rewinds both the conversation and file changes.
  - Org/enterprise skills and org custom instructions work in local and agent sessions.
  - Codex agent gains plan mode.
  - Toggle for the built-in GitHub MCP server, plus per-tool MCP controls.
  - **Deprecation notice:** JetBrains IDE 2025.1 users see advance notice to upgrade to 2026.1+. Support is unchanged for now.
  - [GitHub Changelog](https://github.blog/changelog/2026-09-22-new-features-and-improvements-in-copilot-for-jetbrains)
- **VS Code 1.139 Stable, released 23 Sep (a 1.139.1 update has since shipped).**
  - Agents can run in Dev Containers on SSH, Tunnel and WSL hosts (gradual rollout).
  - About 12x faster session-list loading, Compact View, and in-place renaming.
  - Single/Multiple chat layout in preview.
  - Fixes enterprise-managed OTel settings being dropped by a race, and blocks circumvention of an Agents Window disabled by policy.
  - **Linux deprecation:** `.desktop` files renamed to `com.microsoft.VSCode.desktop`, so pinned launchers may break.
  - VS Code 1.140 Insiders (updated 24 Sep): "Run Multiple Agents..." with a judge agent; marking a session **Done** now stops it so it no longer burns tokens; admin minimum-version banner for AI features.
  - Sources: [VS Code 1.139](https://code.visualstudio.com/updates/v1_139), [VS Code 1.140 Insiders](https://code.visualstudio.com/updates/v1_140)
- **Default enablement policy for Copilot features (posted 24/25 Sep).** A new global "Default policy for new features" (Enabled / Disabled / Let organizations decide) covers GA features, the Copilot Code Review policy and the MCP-servers-in-Copilot policy. It **takes effect 22 Oct 2026** for features left Unconfigured. Explicit choices are preserved and previews remain opt-in. — [GitHub Changelog](https://github.blog/changelog/2026-09-24-default-enablement-of-copilot-features-for-copilot-business-and-enterprise)
- **Billing background.** All Copilot plans moved to usage-based billing (GitHub AI Credits, token-based at model API rates) on 1 Jun 2026, replacing premium-request multipliers. That is why new models are described as "billed at provider list pricing". — [GitHub Blog](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/); [GitHub Docs (legacy request billing)](https://docs.github.com/en/copilot/reference/copilot-billing/request-based-billing-legacy/what-changed-with-billing)
- **Auto model selection tiers, rolling out (14 Sep).** Efficiency / Balance / Intelligence tiers in VS Code, CLI and the Copilot app. Usage is charged for the model Auto picks, and paid users get a **10% discount** on usage billed through Auto. — [GitHub Changelog](https://github.blog/changelog/2026-09-14-configure-cost-and-quality-in-copilot-auto-model-selection)

### Inferences
- For a hackathon repo, the most practical items are: Sonnet 5.5 (cheaper, faster everyday agent model on Pro and above); Copilot CLI 1.0.89 (`.claude/rules` now counts as custom instructions, so any Claude rules in the repo will also steer Copilot CLI); and the Balanced code-review default, which can quietly increase credit burn under usage-based billing. I found no model IDs pinned in the `copilot-hack` repo itself (grep of the repo), so the model retirements need no code change there.
- Copilot CLI 1.0.89 notes add Opus 5.5 / GPT-6 support six days after GitHub announced those models "in Copilot CLI". Availability was probably server-side first, with client-side picker and ID support following.

### Gaps
- Whether the unified github.com/Mobile/cloud-agent Copilot experience actually launched on 28–29 Sep. No confirming changelog post was found.
- Any GitHub changelog posts published later on Tue 29 Sep, after the fetch.
- Whether Copilot CLI 1.0.89 or later fixes Plugin4Shell (see Q3). The release notes don't mention it.
- Nothing Copilot-specific for Visual Studio, Xcode or Eclipse was posted in the window, beyond Sonnet 5.5 availability.

## Q2. Which versions of Claude Code, Codex CLI and Gemini CLI shipped in the window, and what are the headline changes? (plus other dev-tool releases)

### Takeaway
- **Claude Code:** v2.1.283 (25 Sep) and v2.1.284 (28 Sep, adds Sonnet 5.5 as the default Sonnet).
- **Codex CLI:** 0.157.0 (25 Sep, adds GPT-6 Sol/Luna), 0.157.1 (26 Sep), 0.158.0 (28 Sep) and 0.159.0 (29 Sep).
- **Gemini CLI:** no new stable in the window, only v0.62/0.63 nightlies. Stable v0.61.0 was 23/24 Sep. Gemini CLI is deprecated for consumers in favour of Antigravity CLI, which kept shipping.
- **Anthropic API:** launched Claude Sonnet 5.5 on 28 Sep with five documented breaking differences from Sonnet 5.

### Cited Findings

**Anthropic: Claude Code, Agent SDK, Claude API**
- **`UPDATE` Claude Code v2.1.284, 28 Sep (npm 17:11 UTC).**
  - Adds Claude Sonnet 5.5 (`claude-sonnet-5-5`), "now the default Sonnet model on the Anthropic API — 1M context, $2/$10 per Mtok with $0.20/Mtok cache reads".
  - "Yes, but ask again next time" option for auto-mode reads outside the working directories.
  - Dollar amounts for the Claude apps gateway spend limit in `/usage` and the status line.
  - `/mcp reconnect all`.
  - Gateway telemetry export to Google Cloud OTLP.
  - Security-relevant fixes: `ANTHROPIC_FOUNDRY_RESOURCE` is now validated before use in the endpoint host. Marketplace, claude.ai and npm plugins no longer pre-approve their own tools under managed `allowManagedPermissionRulesOnly`. Rules symlinked into `.claude/rules` from outside the project now require the external-imports approval.
  - Sources: [Claude Code releases](https://github.com/anthropics/claude-code/releases), [npm @anthropic-ai/claude-code](https://registry.npmjs.org/@anthropic-ai%2Fclaude-code)
- **`UPDATE` Claude Code v2.1.283, 25 Sep.**
  - New managed settings `availableModelsMatch: "exact"` (new model releases stay blocked until listed) and `deniedModels`.
  - `x-claude-code-prompt-id` gateway hint header, opt-in via `CLAUDE_CODE_GATEWAY_HINT_HEADERS=1`.
  - `/doctor prompt-audit` audits CLAUDE.md, skills, agents and commands for older-model prompting patterns.
  - MCP/WebFetch/WebSearch outputs in the OTel `tool.output` span when `OTEL_LOG_TOOL_CONTENT=1`.
  - Bedrock Mantle upstream for the gateway.
  - Windows fix: PowerShell tool can no longer let `cmd /c rd/rmdir/del` delete drive roots or the home folder.
  - **Behaviour change:** "interactive sessions on third-party providers or with telemetry off [now] start in auto mode when no permission mode is configured"; `permissions.defaultMode` overrides.
  - Source: [Claude Code releases](https://github.com/anthropics/claude-code/releases)
- **CONTEXT: Claude Code v2.1.280 (22 Sep), 2.1.281 (23 Sep), 2.1.282 (24 Sep).**
  - v2.1.280 adds Claude Opus 5.5 (`claude-opus-5-5`), "now the default Opus model — 1M context, $4/$20 per Mtok", plus `CLAUDE_CODE_MAX_MCP_DESCRIPTION_LENGTH` to change the 2,048-character cap on MCP descriptions.
  - v2.1.281 adds `"attribution": false`, which older CLI versions skip as a whole settings file. It also adds MCP URL-mode elicitation on the **2026-07-28 MCP protocol**, and MCP checks in `claude plugin validate`.
  - Source: [Claude Code releases](https://github.com/anthropics/claude-code/releases)
- **`UPDATE` Claude Agent SDK.**
  - TypeScript `@anthropic-ai/claude-agent-sdk` 0.3.283 (25 Sep) and 0.3.284 (28 Sep, parity with CLI 2.1.284). 0.3.284 fixes Elicitation hook `{decision:'block'}` being ignored, and fixes `query()` closing stdin before follow-up turns.
  - Python `claude-agent-sdk` 0.2.160 (25 Sep) and 0.2.161 (28 Sep, bundles CLI 2.1.284).
  - CONTEXT: Python 0.2.158 added `verbatim_prompts` to stop `@path` expansion and slash-command dispatch from untrusted text. TS 0.3.281 changed the `Settings.attribution` type to `boolean | {...}` (TypeScript type narrowing needed).
  - Sources: [TS CHANGELOG](https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md), [Python CHANGELOG](https://raw.githubusercontent.com/anthropics/claude-agent-sdk-python/main/CHANGELOG.md), [npm](https://registry.npmjs.org/@anthropic-ai%2Fclaude-agent-sdk), [PyPI](https://pypi.org/project/claude-agent-sdk/)
- **`UPDATE` Anthropic client SDKs.** Python `anthropic` 1.9.0 (28 Sep) adds `claude-sonnet-5-5`, the `between_tools` thinking type, GA cache `diagnostics`, and optional tool execution while the reply streams. TypeScript `@anthropic-ai/sdk` 0.129.0 was published 28 Sep; I did not read its notes. — [anthropic-sdk-python CHANGELOG](https://raw.githubusercontent.com/anthropics/anthropic-sdk-python/main/CHANGELOG.md), [npm](https://registry.npmjs.org/@anthropic-ai%2Fsdk)
- **`BREAKING — review before migrating` Claude API: Claude Sonnet 5.5 launched 28 Sep.** Available on the Claude API, Bedrock, Claude Platform on AWS, Google Cloud and Microsoft Foundry. Five breaking differences from Sonnet 5:
  1. To turn off up-front thinking, send `thinking: {"type": "between_tools"}` instead of `"disabled"`.
  2. `tool_choice` `any`/`tool` returns 400.
  3. Thinking blocks are tied to the model and conversation, and are **account-bound**: blocks sent from another account are dropped.
  4. `computer_20251124` is rejected on the API and Google Cloud.
  5. The advisor tool rejects Opus 4.8, Opus 4.7 and Sonnet 5 as advisors.
  - Anthropic markets it as "30% faster and costs up to 30% less for most work".
  - Sources: [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview), [Anthropic news](https://www.anthropic.com/news)
- **CONTEXT: Claude API items 22–24 Sep.**
  - Opus 5.5 (22 Sep): $4/$20 vs Opus 5's $5/$25. Thinking cannot be disabled (400 on `disabled`/`enabled`). `tool_choice` `any`/`tool` returns 400. Computer use needs `computer_toolset_20260801`. Fast mode is in research preview.
  - Inline tool definitions in mid-conversation system messages, beta `inline-tools-2026-09-15`, plus MCP toolsets with `mcp-client-2026-09-15` (22 Sep).
  - Cache diagnostics GA, no beta header (23 Sep).
  - Refusal billing resumes (24 Sep, see Q3).
  - Source: [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview)

**OpenAI: Codex CLI, API and SDKs**
- **`UPDATE` Codex CLI 0.159.0 (latest), 29 Sep 08:05 UTC.**
  - Opt-in `instant_interrupt`: new input can steer Codex mid-response or during long code-mode calls.
  - Compact welcome screen.
  - App-server clients can paginate thread history from a specific item.
  - `.aws` is protected by default under writable roots, and approved commands keep explicit filesystem denials.
  - macOS TLS fix in network-enabled sandboxes.
  - **Removed:** automatic follow-up prompt suggestions and the `tui.prompt_suggestions` setting; the bundled `plugin-creator` skill.
  - Sources: [Codex releases](https://github.com/openai/codex/releases), [npm @openai/codex](https://registry.npmjs.org/@openai%2Fcodex)
- **`UPDATE` Codex CLI 0.158.0, 28 Sep.** Supports MCP servers that need pre-registered OAuth client secrets (`codex mcp add --oauth-client-secret`). Bearer-token security for direct exec-server WebSockets. Transparent-background image generation. **Terminal input approval is on by default** for commands with elevated permissions. Windows and Linux sandbox fixes. — [Codex releases](https://github.com/openai/codex/releases)
- **`UPDATE` Codex CLI 0.157.0, 25 Sep (0.157.1 followed on 26 Sep).** Adds GPT-6 Sol and Luna, including Amazon Bedrock support and migration prompts for older models. Fullscreen transcripts on by default. Automatic background-server startup. `f` to fork conversations. Network restrictions enforced across redirects and ongoing HTTP/WebSocket traffic. Removes the `ultrafast` service tier from `gpt-5.6-sol`. — [Codex 0.157.0 release](https://github.com/openai/codex/releases/tag/rust-v0.157.0), [npm](https://registry.npmjs.org/@openai%2Fcodex)
- **`UPDATE` OpenAI Python SDK 3.20.0, 28 Sep.** Agents credential and session options. "Cyber access programs" in Responses. Opt-in incremental WebSocket text/tool snapshots for Responses. — [openai-python CHANGELOG](https://raw.githubusercontent.com/openai/openai-python/main/CHANGELOG.md). No new `openai-agents` (Python 0.22.3) or `@openai/agents` (0.18.0) release in the window — [PyPI](https://pypi.org/project/openai-agents/), [npm](https://registry.npmjs.org/@openai%2Fagents).
- **CONTEXT: GPT-6 Sol and GPT-6 Luna, 22 Sep.** In the API as `gpt-6-sol` / `gpt-6-luna`, in Codex and in ChatGPT Work. OpenAI claims **50% lower API prices** than GPT-5.6 promotional pricing and a 90% discount on cached input reads. — [OpenAI Developer Community](https://community.openai.com/t/announcing-gpt-6-sol-and-gpt-6-luna-in-the-api-codex-and-chatgpt/1399925), [Help Net Security](https://www.helpnetsecurity.com/2026/09/23/gpt-6-sol-luna-lower-api-prices/), [TechCrunch](https://techcrunch.com/2026/09/22/openai-launches-gpt-6-sol-and-luna/)
- **CONTEXT: OpenAI platform, early September.**
  - Agents API public beta with a managed Codex harness (10 Sep).
  - GPT-Live 1 GA at $0.05/min (10 Sep).
  - API-key expiry and creation-governance controls (10 and 15 Sep).
  - GPT-6 Astra (3 Sep): no `none` effort, no custom `temperature`/`top_p`/`logprobs`, tool calling only via the Responses API.
  - New `429 slow_down` and `503 server_is_overloaded` error codes (2 Sep).
  - Source: [OpenAI API changelog](https://platform.openai.com/docs/changelog)

**Google: Gemini CLI, Antigravity, Gemini API, ADK**
- **`NO ACTION` Gemini CLI: no stable release in the window.**
  - Nightlies: v0.62.0-nightly.20260925, then v0.63.0-nightly on 26, 28 and 29 Sep. Mostly fixes: auth-loop prevention, bounded tool-output size in long agent loops, and policy/path-validation alignment.
  - CONTEXT: stable v0.61.0 released 23 Sep 23:59 UTC. Includes "prevent indirect prompt injection via build file modifications and untrusted flags" and sandbox filesystem hardening.
  - CONTEXT: v0.62.0-preview.0 (23 Sep) adds Gemini 3.8 Flash and 3.5 Flash-Lite.
  - Sources: [gemini-cli releases](https://github.com/google-gemini/gemini-cli/releases), [npm @google/gemini-cli](https://registry.npmjs.org/@google%2Fgemini-cli)
- **CONTEXT: Gemini CLI is deprecated for consumers.** Google announced on 19 May 2026 that it is "Transitioning Gemini CLI to Antigravity CLI". Gemini CLI and Code Assist IDE extensions stopped serving Google AI Pro/Ultra and free Code Assist users on 18 Jun 2026. Enterprise (Code Assist Standard/Enterprise) and paid API-key access continue. — [Google Developers Blog](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/)
- **`UPDATE` (Antigravity users) Antigravity CLI.** v1.2.9 shipped 23 Sep (context); versions 1.2.10–1.2.13 followed in the official CHANGELOG.
  - 1.2.10 adds `medium` verbosity. It also changes directory entries in `skills.json`/`rules.json`/`agents.json`/`plugins.json` to load only items directly inside the directory, no longer recursively. **This is breaking for nested layouts:** use `include_only`.
  - 1.2.11 makes plugins in `~/.gemini/config/plugins` that need config variables start disabled.
  - 1.2.12/1.2.13 stop immediately on exhausted daily or billing quotas.
  - Exact dates for 1.2.10–1.2.13 were not verified (the CHANGELOG is undated).
  - Sources: [Antigravity CLI CHANGELOG](https://raw.githubusercontent.com/google-antigravity/antigravity-cli/main/CHANGELOG.md), [Havoptic 1.2.9 date](https://www.havoptic.com/r/antigravity-cli-1.2.9)
- **`UPDATE` Google ADK Python 2.10.0.** Changelog date 24 Sep, PyPI upload 25 Sep 19:02 UTC. Adds a skill lifecycle (experimental, `ADK_ENABLE_SKILL_LIFECYCLE=1`), a MongoDB vector/hybrid toolset, eval efficiency metrics, and `context_builder` on `RemoteA2aAgent`. **Behaviour changes:**
  - `OpenAIResponsesLlm` ignores `thinking_config`.
  - Instruction templating leaves `${var}` literal.
  - `AgentEvaluator.evaluate` raises `ValueError` when no eval cases run.
  - Legacy live-audio modules emit `DeprecationWarning` (breaks `-W error` test suites).
  - Sources: [ADK CHANGELOG](https://raw.githubusercontent.com/google/adk-python/main/CHANGELOG.md), [PyPI](https://pypi.org/project/google-adk/)
- **Gemini API: no changelog entries dated 25–29 Sep.** Latest was 22 Sep (context): Gemini 3.8 Flash TTS and Flash-Lite TTS GA, plus the `/v1beta/voices` endpoint. — [Gemini API release notes](https://ai.google.dev/gemini-api/docs/changelog)

**Other IDEs and agents (priority 5): little verified in-window activity**
- **Cursor:** latest changelog entry is 23 Sep (context). It launched the **Rollouts** (deploy-health monitoring) and **Security Review** (exploitable-bug PR review) bots for Teams/Enterprise, with trial credits "for the next 10 days". Earlier in September: Projects beta (10 Sep) and self-hosted machines (2 Sep). — [Cursor changelog](https://cursor.com/changelog)
- **Windsurf/Devin Desktop:** the changelog shows 3.7.25 and 3.8.20 plus undated notes. Third-party trackers list 3.10.27 on 15 Sep. No in-window release was verified. — [Devin Desktop changelog](https://windsurf.com/changelog), [Havoptic](https://www.havoptic.com/tools/windsurf)
- **JetBrains Junie:** Junie CLI added Opus 5.5, GPT-6 Sol/Luna and Grok 4.7 on 22 Sep (context). Nothing verified in the window. — [Junie blog (search summary)](https://junie.jetbrains.com/blog/)
- **Amazon Kiro:** latest entry 16 Sep (context). Claude Fable 5.1 preview for Kiro Enterprise at a **6x credit multiplier**. GPT-5.6 family gets 1M context with two-tier credit multipliers (14 Sep). — [Kiro changelog](https://kiro.dev/changelog/)
- **Zed:** the stable page I could read showed 1.19.2 dated 9 Sep, which may be stale. — [Zed releases](https://zed.dev/releases/stable)
- **Registry-verified in-window releases (versions only, notes not read):** OpenCode `opencode-ai` 1.18.33 (28 Sep); Kilo Code CLI 7.8.0/7.8.1 (25 Sep); Qwen Code 0.24.6 (26 Sep); Vercel AI SDK `ai` 7.0.116–7.0.122 (25–28 Sep). — [npm opencode-ai](https://registry.npmjs.org/opencode-ai), [npm @kilocode/cli](https://registry.npmjs.org/@kilocode%2Fcli), [npm @qwen-code/qwen-code](https://registry.npmjs.org/@qwen-code%2Fqwen-code), [npm ai](https://registry.npmjs.org/ai)

**Protocol and frameworks (priority 6)**
- **MCP:** TypeScript SDK `@modelcontextprotocol/sdk` 1.31.0 published 28 Sep (notes not read); Python `mcp` 2.2.0 had no in-window release. CONTEXT: the **2026-07-28 MCP spec** is the current stable revision. It has a stateless core with no `Mcp-Session-Id` or initialization handshake, and deprecates Dynamic Client Registration in favour of CIMD, Roots/Sampling/Logging (at least 12 months of support), and legacy HTTP+SSE. Claude Code 2.1.281 already speaks it. — [npm MCP SDK](https://registry.npmjs.org/@modelcontextprotocol%2Fsdk), [MCP blog 2026-07-28 spec](https://blog.modelcontextprotocol.io/posts/2026-07-28/), [MCP key changes](https://modelcontextprotocol.io/specification/2026-07-28/changelog)
- **Framework releases in the window:** LangChain JS `langchain` 1.5.14 and `@langchain/core` 1.2.13 (27 Sep); `@langchain/langgraph` 1.4.18 (25 Sep); Python `langchain` 1.4.3 (28 Sep); CrewAI 1.15.23 (28 Sep); FastMCP 4.0.10 (25 Sep); Pydantic AI 2.50.0/2.51.0 (25 Sep); Strands Agents 1.57.1 (25 Sep). No in-window release for LlamaIndex (0.14.25), Microsoft Agent Framework (`agent-framework` 1.19.0), Semantic Kernel, AutoGen or `a2a-sdk` (1.1.5). — [PyPI](https://pypi.org/) JSON API and [npm registry](https://registry.npmjs.org/) timestamps (queried 29 Sep)

### Inferences
- Claude Code 2.1.283 and 2.1.284 lean heavily towards enterprise gateway controls (`deniedModels`, exact model matching, spend dollars, Bedrock guardrails in 2.1.281). Codex 0.158/0.159 lean towards approval and sandbox hardening. Both suggest vendors are tightening agent governance after this month's Plugin4Shell and GitSpawn disclosures.
- Gemini CLI still ships nightlies for enterprise and API-key users. For new work, Google's supported terminal agent is Antigravity CLI.

### Gaps
- Exact release dates for Antigravity CLI 1.2.10–1.2.13, and whether Antigravity desktop (2.13.0 on 9 Sep was the last entry seen) shipped in the window.
- Release notes for MCP TS SDK 1.31.0, the Anthropic TS SDK 0.129.0, CrewAI 1.15.23 and the LangChain releases. Only versions and dates were verified.
- The Codex cloud/IDE-extension changelog (developers.openai.com) could not be fetched. The copy I got was stale, ending 11 Sep.
- No verified in-window items for Replit, Vercel v0, Lovable, Zed, Cursor or Junie. Search surfaced only undated roundups (for example [Releasebot Replit](https://releasebot.io/updates/replit)).

## Q3. Are there API deprecations, model retirements, pricing or rate-limit changes, or security issues with deadlines or required action?

### Takeaway
There are hard deadlines. GitHub self-hosted runner enforcement starts 29 Sep. Copilot upfront seat billing begins 1 Oct. Copilot retires four models on 2 Oct and six on 19 Oct. Google shuts down `antigravity-preview-05-2026` on 5 Oct, `gemini-omni-flash-preview` on 30 Sep and `gemini-2.5-flash-image` on 2 Oct. OpenAI's legacy completions-era models were due to shut down on 28 Sep, with a larger batch on 23 Oct. On security: Plugin4Shell is still unpatched in GitHub Copilot (per the researchers); OpenCode had a drive-by RCE (GHSA-632h-h47v-g4x4, fix 1.18.22); and two MCP-server disclosures came out in the window (Microsoft DebugMCP RCE write-up; fast-mcp-telegram SSRF).

### Cited Findings

**Deadlines and deprecations (chronological)**
- **`BREAKING — act by 29 Sep` GitHub Enterprise Cloud self-hosted runners.** Runners must be at least `2.329.0` to register, and older runners stop taking jobs. — [GitHub Changelog](https://github.blog/changelog/2026-09-28-self-hosted-runner-version-enforcement-date-has-moved)
- **`BREAKING — already due 28 Sep` OpenAI legacy models.** Shutdown date 2026-09-28 for `gpt-3.5-turbo-instruct`, `babbage-002`, `davinci-002` and `gpt-3.5-turbo-1106`. Suggested replacement: `gpt-5.4-mini` or `gpt-5-mini`. — [OpenAI deprecations](https://platform.openai.com/docs/deprecations)
- **`BREAKING — act before 30 Sep` Gemini API.** `gemini-omni-flash-preview` shuts down 30 Sep 2026; move to `gemini-omni-1.1-flash`. — [Gemini deprecations](https://ai.google.dev/gemini-api/docs/deprecations)
- **`BREAKING — act before 1 Oct` (billing) Copilot Business/Enterprise paying by credit card or PayPal.** Starting 1 Oct 2026, all assigned seats "incur an upfront charge" at the start of the billing cycle. Exceeding included usage may require extra payment, and included usage may be prorated. Prices are unchanged. — [GitHub Changelog, 28 Aug](https://github.blog/changelog/2026-08-28-upcoming-changes-to-github-copilot-policies-and-billing/)
- **`BREAKING — act before 2 Oct` Copilot model retirements.** Gemini 3.5 Flash and Gemini 3.6 Flash → Gemini 3.8 Flash; Kimi K2.7 Code → Kimi K3; **Claude Opus 4.7 → Claude Opus 5**. Business/Enterprise admins may need to enable the alternatives. — [GitHub Changelog, 3 Sep](https://github.blog/changelog/2026-09-03-upcoming-deprecation-of-selected-github-copilot-models)
- **`BREAKING — act before 2 Oct` Gemini API.** `gemini-2.5-flash-image` shuts down 2 Oct 2026 (listed replacement `gemini-3.1-flash-image-preview`). CONTEXT: since 18 Sep, Gemini 2.5 models are available only to projects that used them before; they are not deprecated. — [Gemini deprecations](https://ai.google.dev/gemini-api/docs/deprecations), [Gemini API release notes](https://ai.google.dev/gemini-api/docs/changelog)
- **`BREAKING — act before 5 Oct` Gemini API Antigravity Agent.** `antigravity-preview-05-2026` shuts down 5 Oct 2026. The replacement `antigravity-preview-09-2026` changes built-in tool names and parameters to PascalCase (`write_to_file`, `replace_file_content` with line ranges, `view_file`, `list_dir`, `find_by_name`, `grep_search`). Local-tool users must update their parsers. — [Gemini API release notes, 17 Sep](https://ai.google.dev/gemini-api/docs/changelog)
- **`BREAKING — act before 19 Oct` Copilot model retirements.** Gemini 3.7 Flash → 3.8 Flash; GPT-5.5 and GPT-5.4 → GPT-5.6 Sol; GPT-5.4 mini and GPT-5 mini → GPT-5.6 Luna; Grok 4.5 → Grok 4.6. This applies across Chat, inline edits, ask/agent modes and completions. — [GitHub Changelog, 18 Sep](https://github.blog/changelog/2026-09-18-upcoming-deprecation-of-selected-github-copilot-models-in-mid-october)
- **`WATCH` (admins: configure before 22 Oct) Copilot default-enablement policy takes effect 22 Oct.** — [GitHub Changelog](https://github.blog/changelog/2026-09-24-default-enablement-of-copilot-features-for-copilot-business-and-enterprise)
- **`BREAKING — act before 23 Oct` OpenAI.** Shutdowns on 2026-10-23: `gpt-3.5-turbo-0125`, `gpt-4-0613`, `gpt-4-turbo`, `gpt-4.1-nano`, `gpt-4o-2024-05-13`, `gpt-image-1`, `o1`, `o1-pro`, `o3-mini`, `o4-mini`, and fine-tunes of gpt-3.5/gpt-4/babbage/davinci. Later OpenAI dates: Evals becomes read-only 31 Oct; Evals, Agent Builder and `v1/prompts` shut down 30 Nov; `gpt-image-1-mini`/`gpt-image-1.5` shut down 1 Dec. — [OpenAI deprecations](https://platform.openai.com/docs/deprecations)
- **`WATCH` Anthropic.** `claude-sonnet-4-5-20250929` has a tentative retirement "Not sooner than September 29, 2026" (today) and `claude-haiku-4-5-20251001` "Not sooner than October 15, 2026". Neither is formally deprecated yet, and Anthropic promises at least 60 days' notice. — [Anthropic model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations)
- **`WATCH` MCP 2026-07-28 spec deprecations (context).** DCR (in favour of CIMD), Roots, Sampling, Logging and HTTP+SSE transport are deprecated with roughly a 12-month off-ramp. — [MCP blog](https://blog.modelcontextprotocol.io/posts/2026-07-28/)
- **Copilot IDE deprecation notice (context).** JetBrains 2025.1 users are told to move to 2026.1 or later, with no date given. — [GitHub Changelog](https://github.blog/changelog/2026-09-22-new-features-and-improvements-in-copilot-for-jetbrains)

**Pricing and rate-limit changes**
- **Copilot:** new models (Sonnet 5.5, Opus 5.5, GPT-6 Sol/Luna) are billed at provider list pricing under usage-based billing. The code-review default moved to Balanced on 28 Sep. Auto keeps a 10% discount. — [Sonnet 5.5 post](https://github.blog/changelog/2026-09-28-claude-sonnet-5-5-in-github-copilot), [Auto tiers post](https://github.blog/changelog/2026-09-14-configure-cost-and-quality-in-copilot-auto-model-selection)
- **Anthropic:** Sonnet 5.5 is $2/$10 per MTok with $0.20 cache reads (per the Claude Code 2.1.284 notes). CONTEXT, 24 Sep: Anthropic **resumed billing for refusals that arrive before any output** in the `bio`, `frontier_llm` and `reasoning_extraction` categories, on all platforms. — [Claude Code releases](https://github.com/anthropics/claude-code/releases), [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview)
- **OpenAI:** GPT-6 Sol/Luna are 50% cheaper than GPT-5.6 promotional pricing (context, 22 Sep). — [OpenAI Community](https://community.openai.com/t/announcing-gpt-6-sol-and-gpt-6-luna-in-the-api-codex-and-chatgpt/1399925)
- **Cursor:** Rollouts trial credits run for "the next 10 days" from 23 Sep, which ends around 3 Oct. — [Cursor changelog](https://cursor.com/changelog)

**Security advisories**
- **`WATCH` (Copilot users; `UPDATE` for Claude Code / Codex) Plugin4Shell.** Publicly disclosed 17–18 Sep (context, still open). It is a zero-click plugin SHA-pinning bypass in Claude Code, Codex, GitHub Copilot and Gemini CLI: git resolves a hash-shaped branch name in place of the pinned commit, and auto-update pulls the swapped code.
  - Fixed in Claude Code **2.1.179** and Codex **0.146.0**. **"GitHub Copilot has no fix"**, per Air Security. Google will not patch Gemini CLI.
  - There was no CVE or vendor advisory as of 18 Sep.
  - The attack does not work on GitHub-hosted marketplaces, because GitHub rejects 40-hex branch names. It does work on Bitbucket and self-hosted git.
  - Mitigation for Copilot: use GitHub-hosted marketplaces only and disable third-party plugin auto-update.
  - Sources: [The Hacker News](https://thehackernews.com/2026/09/plugin4shell-lets-repository-owners.html), [Help Net Security](https://www.helpnetsecurity.com/2026/09/18/plugin4shell-ai-coding-agents-vulnerability/), [AiCybr summary](https://aicybr.com/blog/plugin4shell-ai-coding-agents-claude-code-codex-copilot-gemini-cli)
- **`UPDATE` OpenCode drive-by RCE (GHSA-632h-h47v-g4x4), reported 28 Sep.** A malicious web page can hit the unauthenticated `opencode serve`/`web` API on `127.0.0.1:4096` and abuse `/global/upgrade` to install an attacker tarball. Affects 1.14.30–1.18.21 installed via npm/pnpm/Bun; **fixed in 1.18.22** (current 1.18.33). There is no CVE. Datadog counted 647k downloads of vulnerable versions between 17 and 23 Sep. Also set `OPENCODE_SERVER_PASSWORD`. — [Cybersecurity News](https://cybersecuritynews.com/opencode-ai-coding-agent-flaw/)
- **`UPDATE` Microsoft DevLabs DebugMCP (VS Code extension / MCP server) RCE, disclosed 25 Sep.** Version 1.1.4 listens unauthenticated on port 3001, and DNS rebinding from a malicious page leads to code execution. It was silently fixed in **1.2.0** (commit 86776b2, no advisory). It is used with Copilot, Cline, Cursor, Codex and Windsurf. — [Imperva](https://www.imperva.com/blog/from-debugging-to-code-execution-rce-in-microsoft-devlabs-debugmcp/)
- **`UPDATE` (if used) fast-mcp-telegram SSRF, CVE-2026-55096 (CVSS 7.1), published 28 Sep.** A DNS-resolution bypass of the SSRF denylist allows full-read exfiltration. Fixed in 0.30.1 (GHSA-xr72-j7vj-vp7g). — [TheHackerWire](https://www.thehackerwire.com/vulnerability/CVE-2026-55096/)
- **CONTEXT: MCP server exposure.** Pluto Security found 147 of 179 internet-exposed MCP servers accepted unauthenticated `tools/call`, some with root `exec` tools (24 Sep). Other context advisories: mcp-atlassian CVE-2026-77247 (fixed 0.22.0, 22 Sep); `@zereight/mcp-gitlab` GHSA-5648-rgj9-v224 (fixed 2.1.30); PraisonAI MCPServer CVE-2026-57139 (9.8). — [Pluto Security](https://pluto.security/blog/wide-open-hundreds-of-mcps-exposing-root-shells-production-data-and-citizen-records-one-call-away/), [OpenCVE](https://app.opencve.io/cve/CVE-2026-77247), [CVEReports](https://cvereports.com/reports/GHSA-5648-RGJ9-V224), [NotCVE](https://notcve.org/cve/CVE-2026-57139)
- **CONTEXT: GitSpawn, 2 Sep.** A malicious `.git/config` (`core.fsmonitor`) runs commands in several CLI agents before the trust prompt. Fixed in Codex 0.131.0 and Claude Code 2.1.196 (fsmonitor path); a second Claude Code path via `claude ultrareview` was still live on 2.1.252 per Manifold. — [The Hacker News](https://thehackernews.com/2026/09/malicious-git-configs-can-make-claude.html)
- **CONTEXT: npm supply chain.** The ChainDrop worm (from 4 Aug) compromised 400 to 1,300+ npm packages depending on the source. Reported malicious MCP packages include the `mcp-server-github` name-squat (MAL-2026-5479). — [Datadog Security Labs](https://securitylabs.datadoghq.com/articles/npm-worm-compromises-popular-npm-packages/), [o3 security](https://o3.security/malware/npm/mcp-server-github)

### Inferences
- The Copilot surface most exposed to Plugin4Shell is non-GitHub plugin marketplaces (Bitbucket or self-hosted). A hackathon repo using only default, GitHub-hosted marketplaces is likely not exposed to the branch-name variant. This rests on the THN and GitHub-docs reasoning, not a vendor advisory.
- Local agent web UIs and MCP servers bound to localhost without authentication (OpenCode, DebugMCP) keep showing up as drive-by RCE vectors. Auditing loopback listeners during the hackathon is cheap insurance.

### Gaps
- GitHub's official response to Plugin4Shell, and whether any Copilot CLI or app build since 18 Sep patches it. Not found.
- Whether OpenAI's 28 Sep legacy-model shutdown actually happened on schedule. Only the scheduled date is documented.
- The GitHub Advisory Database could not be queried directly (the GitHub API is blocked here). New GHSAs for Claude Code, Copilot CLI or Cursor published 25–29 Sep may be missing.

## Q4. What developer events or launches are scheduled in the next ~2 weeks?

### Takeaway
**OpenAI DevDay is today, Tue 29 Sep 2026.** The keynote is at 10:00 PT (17:00 UTC) at Fort Mason, San Francisco, with Sam Altman, and is livestreamed. Expect OpenAI API, Codex and Agents announcements after this note was written. Also coming up: The AI Conference SF (29 Sep–1 Oct), Anthropic's Claude Founder House SF (6–8 Oct, livestream 6 Oct), Google's Gemini at Work (8 Oct) and AI Engineer NYC (12–14 Oct). GitHub Universe is later, on 28–29 Oct.

### Cited Findings
- **OpenAI DevDay 2026, Tue 29 Sep, Fort Mason, San Francisco.** Schedule (PT): breakfast 8:00, **opening keynote 10:00 featuring Sam Altman**, breakouts 11:15–15:30, closing session 16:00. The keynote is livestreamed free, and other sessions will be posted afterwards. "DevDay Exchanges" follow later in Bengaluru, Tokyo, Seoul, Paris, Berlin, London, São Paulo and Mexico City. — [devday.openai.com](https://devday.openai.com/), [OpenAI announcement](https://openai.com/index/devday-2026/)
- **The AI Conference 2026, San Francisco, 29 Sep–1 Oct.** Includes a Google Cloud Run agents session on Day Zero and keynotes from Ion Stoica and others. — [AI Conference agenda](https://agenda.aiconference.com/)
- **DevFest Bay Area 2026 (GDG), Thu 1 Oct, Mountain View.** Gemini dev challenge, with a keynote by Google Cloud's Richard Seroter. — [GDG event page](https://gdg.community.dev/events/details/google-gdg-sunnyvale-presents-devfest-bay-area-2026/cohost-gdg-cloud-san-jose/)
- **Anthropic Claude Founder House, San Francisco, Tue 6–Thu 8 Oct.** Livestream Oct 6 at 11:00 PDT. It includes a "Building agents that own outcomes" workshop and a Founder Salon with Mike Krieger on 8 Oct. Applications are closed. — [Anthropic events](https://www.anthropic.com/events/claude-founder-house-san-francisco)
- **Google "Gemini at Work", Thu 8 Oct, Hangar One, Mountain View.** Keynote 10:30 PT with Thomas Kurian, plus Build with Gemini workshops. — [Google Cloud events](https://www.googlecloudevents.com/geminiatwork2026/in-person)
- **AI Engineer NYC 2026, 12–14 Oct, New York.** Workshops on 12 Oct include Anthropic and OpenAI workshops; conference days are 13–14 Oct. — [AI Engineer NYC schedule](https://ai.engineer/nyc/2026/schedule)
- **Google Cloud AI Live + Labs Berlin, 14 Oct** (Zurich on 20 Oct), with developer hands-on labs. — [Google Cloud Berlin](https://cloud.google.com/events/live-and-labs-berlin-2026)
- **Beyond two weeks, for planning:**
  - PyTorch Conference NA, 20–21 Oct, San Jose. — [LF Events](https://events.linuxfoundation.org/pytorch-conference-north-america/program/schedule/?id=1337320)
  - **AGNTCon + MCPCon North America, 22–23 Oct, San Jose**, with a keynote from MCP co-creator David Soria Parra. — [LF Events](https://events.linuxfoundation.org/agntcon-mcpcon-north-america/program/schedule/)
  - **GitHub Universe 2026, 28–29 Oct**, Fort Mason Center, San Francisco. — [githubuniverse.com](https://githubuniverse.com/), [GitHub Blog](https://github.blog/news-insights/company-news/github-universe-is-back-all-together-now-in-the-agentic-era/)
- **Product deadlines in the next two weeks (from Q3):** 30 Sep, 1 Oct, 2 Oct and 5 Oct.

### Inferences
- The DevDay keynote at 17:00 UTC falls after this note's cutoff. Any follow-up scout should check the OpenAI API changelog, the Codex changelog and `openai/codex` releases for same-day launches. Historically DevDay brings API and agent-platform releases, but nothing about today's content is verified.
- Microsoft Ignite and AWS re:Invent are traditionally later (November/December) and fall outside the two-week window. I did not verify their 2026 dates.

### Gaps
- I found no verified GitHub-hosted Copilot event (for example a Copilot livestream) in the next two weeks. GitHub Universe (28–29 Oct) is the next major one.
- No verified Cursor, JetBrains or Vercel developer events in the window.

---
Out of scope, noticed in passing (not researched):
- Model launches themselves: Claude Sonnet 5.5 (28 Sep) and Opus 5.5 (22 Sep) from [Anthropic news](https://www.anthropic.com/news); GPT-6 Sol/Luna (22 Sep).
- Anthropic science/feature stories: the Claude enzyme-discovery post (23 Sep) and the Ebola response feature (22 Sep).
- Accenture partnership (18 Sep).
- A consumer "Microsoft Copilot unified app" relaunch reported by [Quartz](https://qz.com/microsoft-copilot-unified-app-coding-ai-agents-092526). This is separate from GitHub Copilot's unified experience and was not verified.
