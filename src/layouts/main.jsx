import Head from 'next/head'
import { Flex } from '@chakra-ui/react'
import Navbar from '@components/Navbar/index'
import Footer from '@components/Footer'

export const siteTitle = 'AxieHub'

const HeadComponent = () => {
  const description = 'AxieHub is site where you can find the best tools related to Axie Infinity.'

  const ogImageUrl = `https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`

  return (
    <Head>
      <link rel='icon' href='/favicon.ico' />
      <meta name='description' content={description} />
      <meta property='og:image' content={ogImageUrl} />
      <meta name='og:title' content={siteTitle} />
      <meta name='twitter:card' content='summary_large_image' />
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
