"use client";
import { useState, useEffect, use } from "react";
import Link from "next/link";
import { Card } from "@/components";
import { TPokemon } from "@/types";

const Home = () => {
	const [pokemons, setPokemons] = useState<TPokemon[]>([]);
	const [isFetching, setIsFetching] = useState(true);

	const fetchPokemon = () => {
		setIsFetching(() => true);
		fetch("http://localhost:3001/pokemon")
			.then((res) => {
				if (res.ok) return res.json();
			})
			.then((data: TPokemon[]) => setPokemons(data))
			.finally(() => setIsFetching(() => false));
	};

	const handleDelete = (id: number) => {
		fetch(`http://localhost:3001/pokemon/${id}`, {
			method: "DELETE",
		}).then((res) => {
			if (res.ok) return fetchPokemon();
		});
	};

	useEffect(() => {
		fetchPokemon();
	}, []);
	return (
		<div>
			{isFetching ? (
				<div className="flex justify-center items-center h-[75dvh]">
					<span className="loading loading-spinner w-[5rem]"></span>
				</div>
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
							<button
								type="button"
								className="btn bg-red-600 hover:bg-red-800 text-white w-full"
								onClick={() => handleDelete(pokemon.id)}
							>
								Delete
							</button>
						</Card>
					))}
				</div>
			) : (
				<p className="text-center">No pokemon can be shown at the moment</p>
			)}
		</div>
	);
};

export default Home;
