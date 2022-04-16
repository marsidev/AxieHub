import '@styles/globals.css'
import '@styles/classic-cards.css'
import '@lib/fonts'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@lib/theme'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// const toastProps = {
// 	position: 'bottom-right',
// 	autoClose: 3000,
// 	hideProgressBar: false,
// 	newestOnTop: false,
// 	closeOnClick: true,
// 	rtl: false,
// 	pauseOnFocusLoss: false,
// 	draggable: true,
// 	pauseOnHover: false
// }

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
			{/* <ToastContainer {...toastProps} /> */}
		</ChakraProvider>
	)
}

export default MyApp
