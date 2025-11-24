import type { Article, Organization, SoftwareApplication, WebSite } from 'schema-dts'

export const organizationSchema: Organization = {
  '@type': 'Organization',
  '@id': 'https://docs.xpay.sh/#organization',
  name: 'Xpay',
  alternateName: '{xpay✦}',
  url: 'https://www.xpay.sh',
  logo: 'https://www.xpay.sh/logo/logo-full.png',
  sameAs: [
    'https://github.com/xpaysh',
    'https://twitter.com/xpaysh',
    'https://discord.gg/vukXDGT7n5'
  ],
  description: 'AI Agent Payment Control Platform - agentic payments infrastructure for autonomous payments',
  foundingDate: '2024',
  legalName: 'xPay',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: '1-10',
    unitText: 'individuals'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'support@xpay.sh',
    url: 'https://discord.gg/vukXDGT7n5'
  }
}

export const websiteSchema: WebSite = {
  '@type': 'WebSite',
  '@id': 'https://docs.xpay.sh/#website',
  url: 'https://docs.xpay.sh',
  name: '{xpay✦} Documentation',
  description: 'World-class developer documentation for the x402 protocol and {xpay✦} products',
  publisher: {
    '@id': 'https://docs.xpay.sh/#organization'
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://docs.xpay.sh/search?q={search_term_string}'
    },
    query: 'required name=search_term_string'
  }
}

export const softwareApplicationSchema: SoftwareApplication = {
  '@type': 'SoftwareApplication',
  '@id': 'https://docs.xpay.sh/#software',
  name: '{xpay✦} Platform',
  alternateName: '{xpay✦}',
  description: 'Comprehensive platform for AI agent payment control, API monetization, and transaction monitoring',
  url: 'https://www.xpay.sh',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free tier available'
  },
  creator: {
    '@id': 'https://docs.xpay.sh/#organization'
  },
  featureList: [
    'Smart Proxy - AI spending control',
    'Paywall Service - API monetization',
    'Transaction Explorer - Payment monitoring',
    'x402 Protocol Integration',
    'Multi-chain support',
    'Real-time analytics'
  ]
}

export function createTechArticleSchema({
  title,
  description,
  url,
  publishedDate,
  modifiedDate,
  section
}: {
  title: string
  description: string
  url: string
  publishedDate?: string
  modifiedDate?: string
  section?: string
}): Article {
  return {
    '@type': 'TechArticle',
    '@id': `${url}#article`,
    headline: title,
    description,
    url,
    author: {
      '@id': 'https://docs.xpay.sh/#organization'
    },
    publisher: {
      '@id': 'https://docs.xpay.sh/#organization'
    },
    datePublished: publishedDate || new Date().toISOString(),
    dateModified: modifiedDate || new Date().toISOString(),
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://docs.xpay.sh/#website'
    },
    about: {
      '@type': 'Thing',
      name: section || 'x402 Protocol Documentation'
    },
    genre: ['Technical Documentation', 'API Documentation', 'Developer Guide'],
    keywords: [
      'x402 protocol',
      'AI agents',
      'autonomous payments',
      'API monetization',
      'blockchain payments',
      'smart proxy',
      'transaction monitoring'
    ]
  }
}

export function generateStructuredData(schemas: any[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas
  }
}