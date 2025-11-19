# {xpay✦} Documentation

[![Deploy](https://img.shields.io/badge/deploy-vercel-black?style=flat&logo=vercel)](https://github.com/xpaysh/docs)
[![License](https://img.shields.io/github/license/xpaysh/docs?color=00DC9C)](https://github.com/xpaysh/docs/blob/main/LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/xpaysh/docs?style=social)](https://github.com/xpaysh/docs)

> World-class developer documentation for the {xpay✦} ecosystem and x402 protocol

## About

This repository contains the official documentation for {xpay✦}, the leading platform for autonomous AI agent payments built on the x402 protocol. Our documentation covers:

- **x402 Protocol** - The foundation for autonomous payments
- **Smart Proxy** - Cost control and spending limits for AI agents
- **Paywall-as-a-Service** - API monetization made simple
- **Transaction Explorer** - Real-time payment monitoring and analytics
- **Developer Resources** - SDKs, code examples, and integration guides

## Quick Start

### Prerequisites

- Node.js >= 20.x
- npm or pnpm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/xpaysh/docs.git
cd docs

# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:8000](http://localhost:8000) to view the documentation site.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Documentation**: [Nextra 4](https://nextra.site/) 
- **Styling**: [TailwindCSS 4](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Language**: TypeScript
- **Build Tool**: Turbopack
- **Deployment**: Vercel

## 📁 Project Structure

```
├── src/
│   ├── content/           # Documentation content
│   │   ├── en/           # English documentation
│   │   └── zh/           # Chinese documentation
│   ├── components/       # React components
│   ├── app/             # Next.js app directory
│   └── lib/             # Utilities and configurations
├── public/              # Static assets
│   ├── logo-*.png       # {xpay✦} logos
│   └── favicon.ico      # Site favicon
└── package.json         # Dependencies and scripts
```

## 📝 Contributing

We welcome contributions to improve our documentation! Here's how you can help:

### Content Contributions

1. **Fix typos and errors** - Submit a PR with corrections
2. **Add examples** - Provide real-world code examples
3. **Improve explanations** - Make complex concepts clearer
4. **Translate content** - Help with localization

### Development Setup

```bash
# Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/docs.git
cd docs

# Create a new branch
git checkout -b feature/improve-documentation

# Make your changes
# ...

# Commit and push
git add .
git commit -m "docs: improve x402 protocol explanation"
git push origin feature/improve-documentation

# Create a Pull Request
```

### Adding New Content

1. Create MDX files in `src/content/en/` or `src/content/zh/`
2. Update the corresponding `_meta.ts` file to add navigation
3. Follow our [content style guide](https://docs.xpay.sh/contributing/style-guide)

## 🌐 Internationalization

Our documentation supports multiple languages:

- **English** (`/en`) - Primary language
- **Chinese** (`/zh`) - Simplified Chinese

To add a new language:

1. Create a new directory in `src/content/`
2. Add the locale to `next.config.ts`
3. Translate the content and navigation

## 🚀 Deployment

The documentation is automatically deployed to production when changes are pushed to the `main` branch.

### Manual Deployment

```bash
# Build for production
npm run build

# Export static files (if needed)
npm run export

# Start production server
npm start
```

## 📊 Analytics & Performance

- **Search**: Built-in search powered by Nextra
- **Performance**: Optimized with Next.js and Turbopack
- **SEO**: Meta tags and structured data included
- **Accessibility**: WCAG compliant components

## 🆘 Support

- **Documentation Issues**: [GitHub Issues](https://github.com/xpaysh/docs/issues)
- **General Support**: [Discord Community](https://discord.gg/xpay)
- **Developer Help**: [GitHub Discussions](https://github.com/xpaysh/docs/discussions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Built with ❤️ by the {xpay✦} team using the [Nextra template](https://github.com/pdsuwwz/nextjs-nextra-starter).

---

**Ready to build with {xpay✦}?** Visit our [getting started guide](https://docs.xpay.sh/getting-started) to begin your journey with autonomous AI payments.