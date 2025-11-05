import React from 'react'

const config = {
  logo: <span>Xpay Documentation</span>,
  project: {
    link: 'https://github.com/xpaysh/xpay',
  },
  chat: {
    link: 'https://discord.gg/xpay',
  },
  docsRepositoryBase: 'https://github.com/xpaysh/xpay-docs',
  footer: {
    text: 'Xpay Documentation',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Xpay'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Xpay Documentation" />
      <meta property="og:description" content="AI Agent Payment Control Platform - x402 protocol infrastructure for autonomous payments" />
    </>
  ),
}

export default config