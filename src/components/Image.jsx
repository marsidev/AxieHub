import NextImage from 'next/image'
import { Box, chakra } from '@chakra-ui/react'
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

const CoverImg = chakra(NextImage, {
	shouldForwardProp: prop => ['width', 'height', 'src', 'alt', 'quality', 'placeholder', 'blurDataURL', 'loader', 'data-image-id', 'lazyRoot'].includes(prop)
})

const LayoutImg = chakra(NextImage, {
	shouldForwardProp: prop => ['src', 'alt', 'quality', 'placeholder', 'blurDataURL', 'loader', 'data-image-id', 'objectFit', 'layout', 'lazyRoot'].includes(prop)
})

// Responsive is useful when using a porcentual width
const ResponsiveImg = chakra(NextImage, {
	shouldForwardProp: prop => ['width', 'height', 'src', 'alt', 'quality', 'placeholder', 'blurDataURL', 'loader', 'data-image-id', 'objectFit', 'layout', 'lazyRoot'].includes(prop)
})

const DynamicImg = props => {
	const { layout, width } = props
	if (layout === 'responsive' && width.includes('%')) {
		return <ResponsiveImg {...props}/>
	}

	if (width > 0) {
		return <CoverImg {...props}/>
	}

	return <LayoutImg {...props}/>
}

const myLoader = ({ src, width, quality }) => `${src}?w=${width}&q=${quality}`

function Image(props) {
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
		...rest
	} = props

	return (
		<Box
			transition={transition}
			pos='relative'
			{...rest}
		>
			<DynamicImg
				data-image-id={dataId}
				loader={myLoader}
				width={width}
				height={height}
				quality={70}
				placeholder={blurring ? 'blur' : 'auto'}
				blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
				src={src}
				alt={alt}
				loading={loading}
				layout={layout}
				objectFit={objectFit}
				lazyRoot={lazyRoot}
			/>
		</Box>
	)
}

export default Image
