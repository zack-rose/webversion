import { HiMagnifyingGlass } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";

import { Input } from "@/features/common/components/ui/input";

export const MyNetworkSearch = () => {
	return (
		<section className="space-y-5 pb-[25%]">
			<Input
				placeholder="Find a person"
				type="search"
				prefixContent={
					<HiMagnifyingGlass className="size-5 text-3deg-cream-250" />
				}
			/>

			<div className="flex justify-between items-center mb-3">
				<h5 className="font-semibold text-lg text-3deg-black-300">
					My network
				</h5>
				<p className="text-[443D2D] text-sm">22 members</p>
			</div>

			<div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 gap-y-8">
				{Array.from({ length: 10 }).map((_item, i) => (
					<Link
						href="/profile/random-networf"
						className="size-[5rem] space-y-2"
						key={i}
					>
						<div className="relative size-[4rem]">
							<Image
								src="/images/avatar.jpeg"
								className="rounded-full"
								fill
								alt=""
							/>
						</div>
						<div className="text-3deg-black-300 text-xs text-center">
							Jane West
						</div>
					</Link>
				))}
			</div>
		</section>
	);
};
