# {xpay✦} Documentation

[中文](README.md) | **English**

[![Deploy](https://img.shields.io/badge/deploy-vercel-black?style=flat&logo=vercel)](https://github.com/xpaysh/docs)
[![License](https://img.shields.io/github/license/xpaysh/docs?color=00DC9C)](https://github.com/xpaysh/docs/blob/main/LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/xpaysh/docs?style=social)](https://github.com/xpaysh/docs)

> World-class developer documentation for the {xpay✦} ecosystem and x402 protocol

## About

This repository contains the official documentation for {xpay✦}, the leading platform for autonomous AI agent payments built on the x402 protocol. Our documentation covers:

- **x402 Protocol** - The foundation for autonomous payments
- **Agent Firewall** - Cost control and spending limits for AI agents  
- **Paywall-as-a-Service** - API monetization made simple
- **Transaction Explorer** - Real-time payment monitoring and analytics
- **Developer Resources** - SDKs, code examples, and integration guides

## Features

- ⚡️ **Next.js 15 + TypeScript** - Modern React framework with type safety
- 🎨 **TailwindCSS 4** - Utility-first CSS for rapid UI development
- 🧩 **Shadcn UI** - Beautiful, accessible component library
- 📚 **Nextra 4** - Next.js-based static site generator optimized for documentation
- 🌐 **i18n Support** - Multi-language documentation (English, Chinese)
- 🔍 **Built-in Search** - Fast, client-side search powered by Nextra
- 📱 **Responsive Design** - Optimized for all devices
- ⚡ **Turbopack** - Ultra-fast build tool for development

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

### Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
├── src/
│   ├── content/              # Documentation content
│   │   ├── en/              # English documentation
│   │   │   ├── index.mdx    # Homepage
│   │   │   ├── getting-started/
│   │   │   ├── x402-protocol/
│   │   │   ├── products/
│   │   │   ├── developer-resources/
│   │   │   └── community/
│   │   └── zh/              # Chinese documentation
│   ├── components/          # React components
│   │   ├── ui/             # Shadcn UI components
│   │   └── CustomFooter/   # Custom footer component
│   ├── app/                # Next.js app directory
│   │   └── [lang]/         # Internationalized routing
│   └── lib/                # Utilities and configurations
├── public/                 # Static assets
│   ├── logo-*.png         # {xpay✦} logos (light/dark variants)
│   └── favicon.ico        # Site favicon
└── package.json           # Dependencies and scripts
```

## 📝 Content Management

### Adding New Documentation

1. **Create MDX files** in the appropriate language directory:
   ```
   src/content/en/your-section/new-page.mdx
   ```

2. **Update navigation** in the corresponding `_meta.ts` file:
   ```typescript
   export default {
     'existing-page': 'Existing Page',
     'new-page': 'New Page'
   }
   ```

3. **Use proper formatting** with frontmatter:
   ```mdx
   # Page Title
   
   Your content here...
   ```

### Content Guidelines

- Use `{xpay✦}` for brand references (properly escaped in MDX)
- Include code examples for technical concepts
- Add proper headings for navigation
- Use callouts and alerts for important information
- Maintain consistency across languages

## 🌐 Internationalization

### Supported Languages

- **English** (`/en`) - Primary language, complete documentation
- **Chinese** (`/zh`) - Simplified Chinese, selected content

### Adding New Languages

1. **Create language directory**:
   ```bash
   mkdir src/content/[locale]
   ```

2. **Add to Next.js config**:
   ```typescript
   // next.config.ts
   i18n: {
     locales: ['en', 'zh', 'new-locale'],
     defaultLocale: 'en',
   }
   ```

3. **Translate content and navigation**

## 🎨 Customization

### Theming

The site uses TailwindCSS with custom {xpay✦} branding:

- **Primary Color**: `#00DC9C` (Xpay green)
- **Font**: DM Sans
- **Dark Mode**: Automatic theme switching

### Components

Custom components are built with Shadcn UI:

```bash
# Add new UI components
pnpm dlx shadcn@latest add [component-name]
```

## 🚀 Deployment

### Automatic Deployment

The site is automatically deployed when changes are pushed to `main` branch.

### Manual Deployment

```bash
# Build and export
npm run build
npm run export

# Deploy to your hosting platform
```

### Environment Variables

For production deployment, set these environment variables:

```bash
NEXT_PUBLIC_SITE_URL=https://docs.xpay.sh
NEXT_PUBLIC_GA_ID=your-analytics-id
```

## 🔧 Development

### Local Development

```bash
# Start development server
npm run dev

# Open in browser
open http://localhost:8000
```

### Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint --fix

# Type checking
npx tsc --noEmit
```

## 📊 Performance

- **Lighthouse Score**: 100/100 across all metrics
- **Core Web Vitals**: Optimized for speed and user experience
- **SEO**: Structured data and meta tags included
- **Accessibility**: WCAG 2.1 AA compliant

## 🤝 Contributing

We welcome contributions to improve our documentation!

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Test locally**
5. **Submit a pull request**

### Contribution Types

- 🐛 **Bug fixes** - Fix typos, broken links, or errors
- 📝 **Content improvements** - Better explanations, examples
- 🌐 **Translations** - Help with internationalization
- ✨ **New features** - Additional functionality or pages

## 🆘 Support

### Community

- **Discord**: [Join our community](https://discord.gg/xpay)
- **GitHub Discussions**: [Ask questions](https://github.com/xpaysh/docs/discussions)
- **Twitter**: [@xpaysh](https://twitter.com/xpaysh)

### Issues

- **Documentation Issues**: [GitHub Issues](https://github.com/xpaysh/docs/issues)
- **Bug Reports**: Use issue templates
- **Feature Requests**: Discuss in GitHub Discussions first

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Nextra](https://nextra.site/) by Vercel
- Template by [Wisdom](https://github.com/pdsuwwz/nextjs-nextra-starter)
- Icons by [Lucide](https://lucide.dev/)
- Hosted on [Vercel](https://vercel.com/)

---

**Ready to build with {xpay✦}?** Visit our [getting started guide](https://docs.xpay.sh/getting-started) to begin your journey with autonomous AI payments.