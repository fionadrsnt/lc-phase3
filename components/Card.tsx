import Image from "next/image";
import { TPokemon } from "@/types";

const Card = ({
	pokemon,
	detail = false,
	children,
}: {
	pokemon: TPokemon;
	detail?: boolean;
	children?: React.ReactNode;
}) => {
	const imageSize = 240;

	return (
		<div className="card bg-base-100 shadow-xl p-3">
			<Image
				src={pokemon.image}
				width={imageSize}
				height={imageSize}
				alt={pokemon.name}
				className="self-center"
			/>
			<div className={`card-body ${detail && "items-center"}`}>
				<h3 className="card-title">{pokemon.name}</h3>
				<div className="badge badge-outline capitalize">{pokemon.type}</div>
				<div
					className={
						detail
							? "text-lg"
							: "text-ellipsis overflow-hidden whitespace-nowrap"
					}
				>
					{pokemon.description}
				</div>
			</div>
			{children ? <div className="card-actions pb-4 px-6">{children}</div> : ""}
		</div>
	);
};

export default Card;
