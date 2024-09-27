import Image from "next/image";
import Link from "next/link";

import { AddPersonAvatar } from "./add-person-avatar";

export const CommonMembers = () => {
	return (
		<section className="space-y-5 mb-[5%]">
			<h5 className="capitalize text-3deg-black-300 font-semibold text-lg">
				Mutual Networks
			</h5>

			<div className="flex flex-wrap gap-5">
				{Array.from({ length: 7 }).map((_item, i) => (
					<Link
						href="/profile/random-id"
						className="space-y-3 cursor-pointer w-[6rem]"
						key={i}
					>
						<div className="relative size-[6rem]">
							<Image
								src="/images/avatar.jpeg"
								className="rounded-full border-[3px] border-3deg-orange-100"
								fill
								alt=""
							/>
						</div>

						<div className="text-3deg-blue-100 text-sm text-center">
							Jane West
						</div>
					</Link>
				))}
			</div>

			<h5 className="capitalize text-3deg-black-300 font-semibold text-lg">
				Members in common
			</h5>

			<div className="flex flex-wrap gap-3">
				{Array.from({ length: 7 }).map((_item, i) => (
					<AddPersonAvatar key={i} />
				))}
			</div>
		</section>
	);
};
