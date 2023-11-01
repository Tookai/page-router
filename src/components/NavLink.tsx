import { Box } from "@chakra-ui/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FC } from "react"

interface IProps {
	item: { href: string; label: string }
}

const NavLink: FC<IProps> = ({ item }) => {
	const pathname = usePathname()

	if (pathname === item.href) {
		return (
			<Box>
				<Link
					href={item.href}
					style={{
						textDecoration: "none",
					}}
				>
					{item.label}
				</Link>
			</Box>
		)
	}

	return (
		<Box>
			<Link
				href={item.href}
				style={{
					textDecoration: "none",
					opacity: 0.65,
				}}
			>
				{item.label}
			</Link>
		</Box>
	)
}

export default NavLink
