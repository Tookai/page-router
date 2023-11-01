import { Flex, Text } from "@chakra-ui/react"
import Link from "next/link"
import { FC } from "react"
import NavLink from "./NavLink"

interface IProps {}

const Header: FC<IProps> = ({}) => {
	return (
		<Flex
			as={"header"}
			w={"full"}
			h={16}
			bg={"blue.900"}
			borderBottomWidth={2}
			borderColor={"whiteAlpha.700"}
			alignItems={"center"}
			justifyContent={"space-between"}
			px={3}
		>
			<Flex w={56}>
				<Link
					href={"/"}
					style={{
						textDecoration: "none",
					}}
					as={"h1"}
				>
					Hello World
				</Link>
			</Flex>

			<Flex gap={6}>
				<NavLink item={{ href: "/", label: "Home" }} />
				<NavLink item={{ href: "/about", label: "About" }} />
				<NavLink item={{ href: "/contact", label: "Contact" }} />
			</Flex>

			<Flex w={56} justifyContent={"flex-end"}>
				<Text>John</Text>
			</Flex>
		</Flex>
	)
}

export default Header
