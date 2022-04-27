import { useState } from 'react'
import NextImage from 'next/image'
import { Box } from '@chakra-ui/react'
import { toBase64 } from '@utils/index'

const shimmer = (w, h) => {
  const svg = `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#333" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`
  return svg
}

const myLoader = ({ src, width, quality }) => `${src}?w=${width}&q=${quality}`

const Image = props => {
  const {
    src,
    alt,
    loading = 'eager',
    width = 0,
    height = 0,
    blurring = false,
    transition = 'all 0.1s ease-in-out',
    objectFit = 'contain',
    dataId,
    layout = null,
    lazyRoot = null,
    fallBackSrc = '',
    ...rest
  } = props

  const [imageError, setImageError] = useState(false)

  const onError = () => {
    console.log('error loading image')
    setImageError(true)
  }

  const blurDataURL = `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`

  return (
    <Box transition={transition} pos='relative' {...rest}>
      <NextImage
        loader={myLoader}
        width={width}
        height={height}
        quality={50}
        placeholder={blurring ? 'blur' : 'auto'}
        blurDataURL={blurDataURL}
        src={imageError ? fallBackSrc : src}
        alt={alt}
        loading={loading}
        layout={layout}
        objectFit={objectFit}
        lazyRoot={lazyRoot}
        onError={onError}
      />
    </Box>
  )
}

export default Image
