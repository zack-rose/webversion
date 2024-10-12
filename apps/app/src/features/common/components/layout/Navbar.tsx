"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiPlus, HiMenu, HiX } from "react-icons/hi";

import { cn } from "../../utils";
import { AvatarDropdownMenu } from "./avatar-dropdown-menu";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/feed", label: "Feed" },
	{ href: "/map", label: "Map" },
	{ href: "/messages", label: "Messages" },
];

export const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<nav className="sticky top-0 bg-3deg-cream-200 content-spacing py-5 z-[99]">
			<div className="flex justify-between items-center z-50">
				<Link href="/">
					<Image
						src="/images/brand-logo-secondary.svg"
						alt="threedegrees brand"
						width={150}
						height={200}
					/>
				</Link>

				{/* Desktop Menu */}
				<div className="hidden lg:flex flex-wrap gap-x-7 items-center justify-center">
					{navLinks.map((link) => (
						<Link
							href={link.href}
							key={link.href}
							className="transition duration-700 ease-in-out transform hover:translate-x-1 text-3deg-choco-100 text-sm font-medium"
						>
							{link.label}
						</Link>
					))}
				</div>

				<div className="flex gap-2 items-center">
					<Link
						href="/add-place"
						className="gap-2 items-center hidden lg:flex text-3deg-black-300 border text-sm rounded-3xl px-5 py-1 border-3deg-choco-300"
					>
						<p>Add a place</p>
						<HiPlus className="text-3deg-black-300" />
					</Link>

					<AvatarDropdownMenu className="hidden lg:block" />
				</div>

				<div className="lg:!hidden flex gap-2 justify-end lg:items-center">
					<AvatarDropdownMenu />

					{/* Hamburger Menu Icon */}
					<button
						className="lg:hidden text-3deg-black-300"
						onClick={toggleMenu}
					>
						{isMenuOpen ? (
							<HiX className="w-6 h-6" />
						) : (
							<HiMenu className="w-6 h-6" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={cn(
					"lg:hidden fixed inset-y-0 left-0 right-0 bg-3deg-cream-200 transition-transform duration-300 ease-in-out z-20",
					{
						"translate-y-0 top-16": isMenuOpen,
						"-translate-y-full": !isMenuOpen,
					}
				)}
			>
				<div className="p-[5%] mt-7 space-y-5 flex flex-col">
					{navLinks.map((link) => (
						<Link
							href={link.href}
							key={link.href}
							className="transition duration-700 ease-in-out transform hover:translate-x-1 text-3deg-choco-100 text-sm font-medium"
						>
							{link.label}
						</Link>
					))}

					<Link
						href="#"
						className="gap-2 items-center flex text-3deg-black-300 border text-sm rounded-3xl px-5 py-1 border-3deg-choco-300 w-fit"
					>
						<p>Add a place</p>
						<HiPlus className="text-3deg-black-300" />
					</Link>
				</div>
			</div>
		</nav>
	);
};
