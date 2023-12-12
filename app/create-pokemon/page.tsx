"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddPokemon = () => {
	const [error, setError] = useState("");
	const router = useRouter();

	const handleSubmit = async (formData: FormData) => {
		let hasError = false;

		const name = formData.get("name");
		const description = formData.get("description");
		const image = formData.get("image");
		const weight = formData.get("weight");
		const type = formData.get("type");

		if (!name) hasError = true;
		else if (!description) hasError = true;
		else if (!image) hasError = true;
		else if (!weight) hasError = true;
		else if (!type) hasError = true;

		if (hasError) return setError("All fields are required");

		const payload = {
			name,
			description,
			image,
			weight,
			type,
		};

		fetch("http://localhost:3001/pokemon", {
			method: "POST",
			body: JSON.stringify(payload),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((res) => {
			if (!res.ok) return setError("Something went wrong. Please try again.");

			router.push("/");
		});
	};

	return (
		<div className="max-w-lg mx-auto bg-white px-4 py-2 rounded-lg">
			<h1 className="text-4xl text-black p-4">Add new pokemon</h1>
			<form action={handleSubmit} className="flex flex-col gap-2 p-4">
				{error ? <p className="text-red-600">{error}</p> : ""}
				<label htmlFor="name" className="form-control w-full">
					<div className="label">
						<span className="label-text text-black">Pokemon name</span>
					</div>
					<input
						type="text"
						name="name"
						className="input input-bordered w-full bg-gray-300 text-black"
					/>
				</label>
				<label htmlFor="description" className="form-control w-full">
					<div className="label">
						<span className="label-text text-black">Description</span>
					</div>
					<textarea
						name="description"
						cols={30}
						rows={5}
						className="textarea textarea-bordered w-full bg-gray-300 text-black"
					></textarea>
				</label>
				<label htmlFor="weight" className="form-control w-full">
					<div className="label">
						<span className="label-text text-black">Weight</span>
					</div>
					<input
						type="text"
						name="weight"
						className="input input-bordered w-full bg-gray-300 text-black"
					/>
				</label>
				<label htmlFor="image" className="form-control w-full">
					<div className="label">
						<span className="label-text text-black">Image url</span>
					</div>
					<input
						type="text"
						name="image"
						className="input input-bordered w-full bg-gray-300 text-black"
					/>
				</label>
				<label htmlFor="type" className="form-control w-full">
					<div className="label">
						<span className="label-text text-black">Pokemon type</span>
					</div>
					<select
						name="type"
						defaultValue=""
						className="select select-bordered w-full bg-gray-300 text-black"
					>
						<option value="" disabled hidden>
							Select type
						</option>
						<option value="fire">Fire</option>
						<option value="water">Water</option>
						<option value="grass">Grass</option>
					</select>
				</label>
				<button type="submit" className="btn btn-neutral capitalize mt-3">
					submit
				</button>
			</form>
		</div>
	);
};

export default AddPokemon;
