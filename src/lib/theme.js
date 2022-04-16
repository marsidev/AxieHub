import { extendTheme } from '@chakra-ui/react'

const components = {
	Button: {
		baseStyle: {
			_focus: {
				boxShadow: 'none'
			}
		}
	}
}

const fonts = {
	heading: '"Open SansVariable", RubikVariable, -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
	body: 'NunitoVariable, RobotoVariable, "Open Sans", -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
}

export const theme = extendTheme({
	initialColorMode: 'light',
	useSystemColorMode: true,
	components,
	fonts
})
