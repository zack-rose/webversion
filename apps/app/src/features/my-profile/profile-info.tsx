import Image from "next/image";
import { HiPencil, HiLink } from "react-icons/hi2";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { cn } from "../common/utils";

interface Props {
	containerClassName?: string;
	imageContainerClassName?: string;
	pencilClassName?: string;
}

export const ProfileInfo = ({
	containerClassName,
	imageContainerClassName,
	pencilClassName,
}: Props) => {
	return (
		<section
			className={cn("flex flex-col items-center pt-8 pb-6", containerClassName)}
		>
			<div className={cn("relative size-[6.25rem]", imageContainerClassName)}>
				<Image
					src="/images/avatar.jpeg"
					alt=""
					className="rounded-full border-[3px] border-3deg-orange-100"
					fill
				/>

				<div
					className={cn(
						"absolute right-0 bottom-0 md:right-4 md:bottom-3 size-8 bg-3deg-orange-100 rounded-full border-2 border-3deg-choco-150 flex justify-between items-center cursor-pointer",
						pencilClassName
					)}
				>
					<HiPencil className="text-white m-auto size-4" />
				</div>
			</div>

			<div className="flex flex-col place-items-center">
				<h1 className="uppercase text-3deg-black-300 font-bold text-3xl pt-4 pb-2">
					Jane west
				</h1>

				<div className="flex gap-3 divide-x divide-3deg-choco-300 text-base">
					<div className="text-3deg-orange-100">Owner</div>
					<div className="pl-3 text-3deg-black-300">Designer</div>
				</div>

				<p className="capitalize text-sm text-3deg-blue-100 my-4">
					London, England
				</p>

				<button className="border border-3deg-choco-300 rounded-3xl py-1 px-4 text-3deg-black-300 text-sm">
					Follow
				</button>

				<div className="flex gap-3 justify-between items-center mt-5 mb-6">
					<a href="#" className="bg-3deg-white-200 p-2 rounded-full">
						<HiLink className="text-3deg-orange-100 size-5" />
					</a>
					<a href="#" className="bg-3deg-white-200 p-2 rounded-full">
						<FaInstagram className="text-3deg-orange-100 size-5" />
					</a>
					<a href="#" className="bg-3deg-white-200 p-2 rounded-full">
						<FaLinkedin className="text-3deg-orange-100 size-5" />
					</a>
					<a href="#" className="bg-3deg-white-200 p-2 rounded-full">
						<FaXTwitter className="text-3deg-orange-100 size-5" />
					</a>
				</div>
			</div>
		</section>
	);
};
