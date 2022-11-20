import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { AppWrapper } from '../views/App.styles'
import { NavigationBar } from '../components/organisms/Navigation/NavigationBar'
import { theme } from '../assets/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<AppWrapper>
				<NavigationBar></NavigationBar>
				<Component {...pageProps} />
			</AppWrapper>
		</ThemeProvider>
	)
}

export default MyApp
