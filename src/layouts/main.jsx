import Head from 'next/head'
import { Flex } from '@chakra-ui/react'
import Navbar from '@components/Navbar/index'
import Footer from '@components/Footer'
import { siteTitle, siteUrl, siteDescription } from '@lib/config'
import createOgImage from '@utils/createOgImage'

const HeadComponent = () => {
  const ogImageUrl = createOgImage({
    title: siteTitle,
    description: siteDescription,
    url: siteUrl
  })

  return (
    <Head>
      <link rel='icon' href='/favicon.ico' />
      <meta name='description' content={siteDescription} />
      <meta property='og:image' content={ogImageUrl} />
      <meta name='og:title' content={siteTitle} />
      <meta property='og:url' content={siteUrl} />
      <meta property='og:site_name' content={siteTitle} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:image' content='summary_large_image' />
      <title>{siteTitle}</title>
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
