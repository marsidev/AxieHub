import { extendTheme } from '@chakra-ui/react'
import Button from '@lib/theme/components/button'
import fonts from '@lib/theme/fonts'
import colors from '@lib/theme/colors'

const components = {
	Button
}

export const theme = extendTheme({
	initialColorMode: 'light',
	useSystemColorMode: true,
	components,
	fonts,
	colors
})
