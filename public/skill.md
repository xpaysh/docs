# xpay - AI Agent Payment Control Platform

## What is xpay?

xpay provides non-custodial payment infrastructure for AI agents using the x402 protocol (HTTP 402 Payment Required). It enables instant stablecoin micropayments over HTTP.

## Capabilities

### xpay✦ Tools — AI Tools Marketplace
- **1000+ MCP tools** available pay-per-use from dozens of providers
- **Any MCP client**: Works with Cursor, Claude Code, Claude Desktop, VS Code, ChatGPT, Windsurf, Gemini CLI, and more
- **One API key**: Single key works across all tools and providers
- **Three access levels**:
  - Master server (`mcp.xpay.sh/mcp`) — all tools via 4 meta-tools
  - Collection server (`{collection}.mcp.xpay.sh/mcp`) — curated tool bundles by use case
  - Provider server (`{provider}.mcp.xpay.sh/mcp`) — single provider's native tools
- **Publish your MCP server**: Monetize any MCP server with zero code changes

### For AI Agent Developers
- **Smart Proxy**: Set spending limits (per-request, daily, monthly) on autonomous agents calling x402-powered APIs
- **Real-time monitoring**: Track agent spending as it happens
- **Emergency controls**: Pause agents instantly if spending anomalies detected

### For API Providers
- **Paywall-as-a-Service**: Monetize any API with x402 payments - zero integration complexity
- **MCP Monetization**: Wrap any MCP server with pay-per-tool-call billing
- **Flexible pricing**: Per-request, tiered, token-based, or time-based pricing models

### For x402 Integrators
- **xpay Facilitator** (`https://facilitator.xpay.sh`): Free USDC payment verification and settlement on Base
  - Endpoints: `/health`, `/supported`, `/verify`, `/settle`
  - Networks: Base mainnet (`eip155:8453`), Base Sepolia (`eip155:84532`)
  - Protocol versions: v1 and v2

## Technical Details

- **Blockchain**: Base (Coinbase L2), USDC stablecoin
- **Protocol**: x402 (HTTP 402 Payment Required)
- **Architecture**: Non-custodial - xpay never holds funds
- **Settlement**: ~2 seconds on Base
- **SDK**: `@xpaysh/agent-kit` (TypeScript)

## Links

- Documentation: https://docs.xpay.sh
- Platform: https://xpay.sh
- Tools: https://xpay.tools
- Facilitator: https://facilitator.xpay.sh
- GitHub: https://github.com/xpaysh
- OpenAPI: https://docs.xpay.sh/openapi.json
- Full docs: https://docs.xpay.sh/llms-full.txt
