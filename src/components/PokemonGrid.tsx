import { Flex, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { FC } from "react"
import Loader from "./Loader"

interface IProps {}

const getPokemons = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2500))
	const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
	const data = await response.json()

	return data
}

const PokemonGrid: FC<IProps> = ({}) => {
	const { data, isLoading } = useQuery({
		queryKey: ["pokemons"],
		queryFn: () => getPokemons(),
	})

	if (isLoading) {
		return <Loader />
	}

	return (
		<SimpleGrid columns={3} w={"full"} gap={3} p={3}>
			{data.results.map((pokemon: any, idx: number) => (
				<Flex
					flexDir={"column"}
					gap={1}
					justifyContent={"center"}
					alignItems={"center"}
					bg={"blue.900"}
					rounded={"md"}
				>
					<Image
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${
							idx + 1
						}.png`}
						alt={pokemon.name}
						height={512}
						width={512}
						style={{
							height: "56px",
							width: "56px",
						}}
					/>
					<Text>{pokemon.name}</Text>
				</Flex>
			))}
		</SimpleGrid>
	)
}

export default PokemonGrid
