import { Flex, Spinner } from "@chakra-ui/react"
import { FC } from "react"

interface IProps {}

const Loader: FC<IProps> = ({}) => {
	return (
		<Flex w={"full"} flex={1} justifyContent={"center"} alignItems={"center"}>
			<Spinner />
		</Flex>
	)
}

export default Loader
