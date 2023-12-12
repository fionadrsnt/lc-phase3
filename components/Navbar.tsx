import Link from "next/link";

const Navbar = () => {
	const NavLinkClasses =
		"p-4 hover:bg-slate-700 hover:text-white transition-all rounded-md";

	return (
		<div className="flex justify-center items-center gap-2 bg-slate-400 text-black">
			<ul className="flex">
				<li className="px-4 py-5">
					<Link className={NavLinkClasses} href="/">
						Home
					</Link>
				</li>
				<li className="px-4 py-5">
					<Link className={NavLinkClasses} href="/create-pokemon">
						Add
					</Link>
				</li>
				<li className="px-4 py-5">
					<Link className={NavLinkClasses} href="/fire">
						Fire
					</Link>
				</li>
				<li className="px-4 py-5">
					<Link className={NavLinkClasses} href="/water">
						Water
					</Link>
				</li>
				<li className="px-4 py-5">
					<Link className={NavLinkClasses} href="/grass">
						Grass
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
