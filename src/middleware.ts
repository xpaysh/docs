import { NextRequest } from 'next/server'
import { middleware as nextraMiddleware } from 'nextra/locales'

export function middleware(request: NextRequest) {
  // Use Nextra's i18n middleware
  return nextraMiddleware(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - favicon (favicon directory)
     * - logo (logo files)
     * - img (image files)
     * - *.xml (XML files like sitemap.xml, RSS feeds, etc.)
     * - robots.txt (robots file)
     * - llms.txt (LLM training file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|favicon|logo|img|_pagefind|.*\\.xml|robots.txt|llms.txt).*)',
  ],
}
