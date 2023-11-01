import { ChakraProvider, ThemeConfig, extendTheme } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { AppProps } from "next/app"
import { Inter } from "next/font/google"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"], display: "block" })

// Config to include color mode
const config: ThemeConfig = {
	initialColorMode: "dark",
	useSystemColorMode: false,
	disableTransitionOnChange: false,
}

const fonts = {
	heading: inter.style.fontFamily,
	body: inter.style.fontFamily,
}

const theme = extendTheme({
	config,
	fonts,
})

export default function App({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						retry: 2,
						refetchOnWindowFocus: false,
						refetchOnReconnect: true,
						refetchOnMount: true,
					},
					mutations: {
						retry: false,
					},
				},
			})
	)

	return (
		<ChakraProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
			</QueryClientProvider>
		</ChakraProvider>
	)
}
