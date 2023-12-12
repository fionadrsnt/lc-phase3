import { Card } from "@/components";

const PokemonDetail = async ({
	params,
}: {
	params: {
		id: string;
	};
}) => {
	const { id } = params;

	const pokemon = await fetch(`http://localhost:3001/pokemon/${id}`).then(
		(res) => res.json()
	);

	return (
		<div className="max-w-lg mx-auto">
			<Card pokemon={pokemon} detail={true} />
		</div>
	);
};

export default PokemonDetail;
