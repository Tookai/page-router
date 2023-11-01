import PageLayout from "@/components/PageLayout"
import PokemonGrid from "@/components/PokemonGrid"

export default function Home() {
	return (
		<PageLayout title={"About"}>
			<PokemonGrid />
		</PageLayout>
	)
}
