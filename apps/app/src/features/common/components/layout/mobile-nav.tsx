"use client";
import { RiHome2Line } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
import { HiOutlineMap, HiPlus } from "react-icons/hi2";
import { BsChatText } from "react-icons/bs";

import { MobileNavlink } from "./mobile-navlink";

export const MobileNav = () => {
	return (
		<nav className="bg-3deg-black-250 fixed bottom-[2.125rem] left-[5%] right-[5%] content-spacing z-[100] rounded-3xl flex lg:!hidden justify-between items-center gap-6 px-[5%] py-3">
			<MobileNavlink Icon={RiHome2Line} href="/" label="home" />
			<MobileNavlink Icon={MdOutlineExplore} href="/feed" label="explore" />
			<div className="size-[2.25rem] rounded-full bg-[#828a95] bg-opacity-30 flex mb-2">
				<HiPlus className="size-6 text-white text-opacity-2 m-auto" />
			</div>
			<MobileNavlink Icon={HiOutlineMap} href="/map" label="map" />
			<MobileNavlink Icon={BsChatText} href="/messages" label="connect" />
		</nav>
	);
};
