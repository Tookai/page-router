import { Flex } from "@chakra-ui/react"
import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import Footer from "./Footer"
import Header from "./Header"

interface IProps {
	title: string
}

const PageLayout: FC<PropsWithChildren<IProps>> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title ?? "Pokedex with ChakraUI"}</title>
				<meta name="description" content="NextJS + ChakraUI" />
			</Head>
			<Flex w={"full"} minH={"100vh"} flexDir={"column"} overflow={"hidden"}>
				<Header />
				<Flex flex={1} flexDir={"column"} overflowY={"auto"} as={"main"}>
					{children}
				</Flex>
				<Footer />
			</Flex>
		</>
	)
}

export default PageLayout
