import Link from "next/link";
import { Card } from "@/components";
import { TPokemon } from "@/types";

const Type = async ({
	params,
}: {
	params: { type: "fire" | "water" | "grass" };
}) => {
	const { type } = params;
	const error = { message: "" };

	const pokemons: TPokemon[] = await fetch(
		`http://localhost:3001/pokemon?type=${type}`
	).then((res) => {
		if (res.ok) return res.json();
		error.message = "Failed to fetch data";
	});

	return (
		<div>
			{error.message ? (
				<p className="text-center">{error.message}</p>
			) : pokemons?.length > 0 ? (
				<div className="grid grid-cols-3 max-w-7xl gap-4 mx-auto">
					{pokemons.map((pokemon) => (
						<Card pokemon={pokemon} key={pokemon.id}>
							<Link href={`pokemon/${pokemon.id}`} className="w-full">
								<button
									type="button"
									className="btn bg-blue-600 hover:bg-blue-800 text-white w-full"
								>
									See detail
								</button>
							</Link>
						</Card>
					))}
				</div>
			) : (
				<p className="text-center">No pokemon can be shown at the moment</p>
			)}
		</div>
	);
};

export default Type;
