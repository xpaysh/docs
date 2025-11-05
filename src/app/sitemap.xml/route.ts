import type { MetadataRoute } from 'next'
import { glob } from 'glob'
import path from 'path'

const baseUrl = 'https://docs.xpay.sh'

export async function GET(): Promise<Response> {
  const sitemap = await generateSitemap()
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemap.map(item => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified instanceof Date ? item.lastModified.toISOString() : item.lastModified}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}

async function generateSitemap(): Promise<MetadataRoute.Sitemap> {
  const contentDir = path.join(process.cwd(), 'src/content')
  
  // Get only English MDX files
  const mdxFiles = await glob('en/**/*.mdx', { cwd: contentDir })
  
  // Generate URLs from English MDX files only
  const pageUrls: MetadataRoute.Sitemap = mdxFiles.map(file => {
    // Extract path after 'en/'
    const pathWithoutLang = file.replace(/^en\//, '')
    
    // Remove .mdx extension and convert index to empty string
    let urlPath = pathWithoutLang.replace(/\.mdx$/, '').replace(/\/index$/, '')
    
    // Build the full URL
    let url = `${baseUrl}/en`
    if (urlPath) {
      url += `/${urlPath}`
    }
    
    // Determine priority based on path depth and content type
    let priority = 0.7
    if (urlPath === '' || urlPath === 'index') {
      priority = 1.0 // Home pages
    } else if (urlPath.includes('getting-started')) {
      priority = 0.9 // Getting started is high priority
    } else if (urlPath.includes('products/')) {
      priority = 0.8 // Products are important
    } else if (urlPath.includes('/')) {
      priority = 0.6 // Nested pages
    } else {
      priority = 0.7 // Top-level pages
    }
    
    // Determine change frequency based on content type
    let changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' = 'weekly'
    if (urlPath.includes('getting-started') || urlPath.includes('installation')) {
      changeFrequency = 'monthly'
    } else if (urlPath.includes('products/') || urlPath.includes('x402-protocol')) {
      changeFrequency = 'weekly'
    } else {
      changeFrequency = 'monthly'
    }
    
    return {
      url,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }
  })
  
  // Add root URLs (English only)
  const rootUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
  
  return [...rootUrls, ...pageUrls]
}