import Head from 'next/head'
import { Flex } from '@chakra-ui/react'
import Navbar from '@components/Navbar/index'
import Footer from '@components/Footer'
import { siteConfig } from '@lib/seo'

const HeadComponent = () => {
  return (
    <Head>
      <link rel='icon' href='/favicon.ico' />
      <title>{siteConfig.title}</title>
      <meta name='description' content={siteConfig.description} />
      <meta name='keywords' content={siteConfig.keywords} />
      <meta property='og:type' content={siteConfig.type} />
      <meta name='og:title' content={siteConfig.title} />
      <meta property='og:site_name' content={siteConfig.title} />
      <meta name='og:description' content={siteConfig.description} />
      <meta property='og:url' content={siteConfig.url} />
      <meta property='og:locale' content={siteConfig.locale} />
      <meta property='og:image' content={siteConfig.ogImage} />
      <meta property='og:image:width' content='2000' />
      <meta property='og:image:height' content='1000' />
      <meta name='twitter:card' content={siteConfig.twitterCard} />
      <meta name='twitter:title' content={siteConfig.title} />
      <meta name='twitter:description' content={siteConfig.description} />
      <meta property='twitter:url' content={siteConfig.url} />
      <meta name='twitter:image' content={siteConfig.twitterImage} />
      <meta name='twitter:site' content={siteConfig.twitterSite} />
      <meta name='twitter:creator' content={siteConfig.twitterCreator} />
      <meta name='twitter:image:alt' content={siteConfig.twitterImageAlt} />
    </Head>
  )
}

export default function Layout({ children }) {
  return (
    <>
      <HeadComponent />
      <Navbar h='10vh' />
      <Flex
        as='main'
        minH='80vh'
        flexDir='column'
        justify='center'
        alignItems='center'
        textAlign='center'
        flex={1}
        py={14}
        w='100%'
      >
        {children}
      </Flex>
      <Footer h='10vh' />
    </>
  )
}
