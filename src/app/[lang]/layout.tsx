import type { Metadata } from 'next'


import type { I18nLangAsyncProps, I18nLangKeys } from '@/i18n'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
import { Footer, LastUpdated, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { CustomFooter } from '@/components/CustomFooter'
import { useServerLocale } from '@/hooks'
import LocaleToggle from '@/widgets/locale-toggle'
import ThemeToggle from '@/widgets/theme-toggle'

import { getDictionary, getDirection } from '../_dictionaries/get-dictionary'
import { ThemeProvider } from './_components/ThemeProvider'
import './styles/index.css'

export const metadata = {
  title: 'Xpay Documentation',
  description: 'Developer documentation for x402 protocol and Xpay products',
  metadataBase: new URL('https://docs.xpay.sh'),
  icons: '/favicon.ico',
} satisfies Metadata

const repo = 'https://github.com/xpaysh/docs'

const CustomBanner = async ({ lang }: I18nLangAsyncProps) => {
  return (
    <Banner
      storageKey="xpay-banner"
    >
      <div className="flex justify-center items-center gap-1">
        🚀 {'{xpay✦}'} is building the future of x402 payments - Join the developer beta →
      </div>
    </Banner>
  )
}


const CustomNavbar = async ({ lang }: I18nLangAsyncProps) => {
  return (
    <Navbar
      logo={(
        <div className="flex items-center gap-2">
          <img 
            src="/logo-full.png" 
            alt="{xpay✦}" 
            className="h-8 dark:hidden"
          />
          <img 
            src="/logo-full-accent.png" 
            alt="{xpay✦}" 
            className="h-8 hidden dark:block"
          />
        </div>
      )}
      logoLink={`/${lang}`}
      projectLink={repo}
      chatLink="https://discord.gg/qtanBNnJ"
    >
      <>
        <LocaleToggle className="max-md:hidden" />
        <ThemeToggle className="max-md:hidden" />
      </>

    </Navbar>
  )
}

const BaiduTrack = () => {
  return (
    <>
      <Script strategy="afterInteractive">
        {`
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?d5ad5e04e6af914c01767926567602be";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `}
      </Script>
    </>
  )
}


// interface Props {
//   children: ReactNode
//   params: Promise<{ lang: I18nLangKeys }>
// }

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const getterParams = await params

  const { lang } = getterParams as { lang: I18nLangKeys }

  const dictionary = await getDictionary(lang)
  const pageMap = await getPageMap(lang)

  const title = 'Xpay Documentation'
  const description = 'Developer documentation for x402 protocol and Xpay products'

  const { t } = await useServerLocale(lang)

  return (
    <html
      // Not required, but good for SEO
      lang={lang}
      // Required to be set
      // dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      dir={getDirection(lang)}
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* <title>{asPath !== '/' ? `${normalizePagesResult.title} - ${title}` : title}</title> */}
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <link rel="canonical" href={repo} />
      </Head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="starter-theme-provider"
          disableTransitionOnChange
        >
          <Layout
            copyPageButton={false}
            banner={
              <CustomBanner lang={lang} />
            }
            navbar={
              <CustomNavbar lang={lang} />
            }
            lastUpdated={(
              <LastUpdated>
                { t('lastUpdated') }
              </LastUpdated>
            )}
            editLink={null}
            docsRepositoryBase="https://github.com/xpaysh/docs"
            footer={(
              <Footer className="bg-background py-5!">
                <CustomFooter />
              </Footer>
            )}
            search={(
              <Search
                placeholder={t('search.placeholder')}
                emptyResult={t('search.noResults')}
                errorText={t('search.errorText')}
                loading={t('search.loading')}
              />
            )}
            i18n={[
              { locale: 'en', name: 'English' },
              { locale: 'zh', name: '简体中文' },
            ]}
            toc={{
              backToTop: t('backToTop'),
              title: t('pageTitle'),
            }}
            pageMap={pageMap}
            feedback={{ content: '' }}
          // ... Your additional layout options
          >
            {children}
          </Layout>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-5G03XLKQ06" />
      <BaiduTrack />
    </html>
  )
}
