import { Flex, SimpleGrid } from "@chakra-ui/react"
import { FC } from "react"
import NavLink from "./NavLink"

interface IProps {}

const Footer: FC<IProps> = ({}) => {
	return (
		<SimpleGrid
			columns={{ base: 1, md: 3 }}
			p={3}
			borderTopWidth={2}
			bg={"blue.900"}
			borderColor={"whiteAlpha.700"}
		>
			<Flex flexDir={"column"} alignItems={"center"}>
				<NavLink item={{ href: "/", label: "Home" }} />
				<NavLink item={{ href: "/", label: "Home" }} />
				<NavLink item={{ href: "/", label: "Home" }} />
				<NavLink item={{ href: "/", label: "Home" }} />
			</Flex>
			<Flex flexDir={"column"} alignItems={"center"}>
				<NavLink item={{ href: "/", label: "Home" }} />
				<NavLink item={{ href: "/", label: "Home" }} />
				<NavLink item={{ href: "/", label: "Home" }} />
				<NavLink item={{ href: "/", label: "Home" }} />
			</Flex>
			<Flex flexDir={"column"} alignItems={"center"}>
				<NavLink item={{ href: "/", label: "Home" }} />
				<NavLink item={{ href: "/", label: "Home" }} />
				<NavLink item={{ href: "/", label: "Home" }} />
				<NavLink item={{ href: "/", label: "Home" }} />
			</Flex>
		</SimpleGrid>
	)
}

export default Footer
