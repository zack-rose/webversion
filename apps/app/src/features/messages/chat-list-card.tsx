import Image from "next/image";
import Link from "next/link";
import { MdCheck, MdDoneAll } from "react-icons/md";

import { cn } from "@/features/common/utils";

export const ChatListCard = () => {
	const isRandom = Math.random();

	return (
		<Link
			href="/messages/765"
			className="min-w-full flex gap-4 items-center border-b bg-white lg:!bg-transparent lg:border-3deg-greenish-100 mb-3 lg:mb-2 last:mb-0 lg:pr-2 rounded-lg lg:rounded-none p-2"
		>
			<div>
				<div className="relative size-12">
					<Image
						src="/images/avatar.jpeg"
						alt="user avatar"
						className="rounded-full"
						fill
					/>
				</div>
			</div>

			<div className="space-y-1 pb-2">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<h5 className="text-xs lg:text-base font-semibold lg:font-medium text-3deg-black-300">
							Tom Cruise
						</h5>
						<p
							className={cn("text-xs font-light lg:font-normal", {
								"text-3deg-orange-200": isRandom > 0.5,
								"text-3deg-choco-650": isRandom < 0.5,
							})}
						>
							1st degree
						</p>
					</div>

					<p className="text-xs text-3deg-choco-650 text-right">1:20 pm</p>
				</div>

				<div className="flex justify-between items-end gap-10">
					<p className="line-clamp-2 text-xs lg:text-[0.8125rem] text-3deg-choco-650 font-light lg:font-normal">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
						obcaecati laudantium architecto numquam beatae blanditiis saepe
						autem, cupiditate non, velit rerum totam error, explicabo facilis in
						ipsam. Distinctio ad quaerat, laboriosam molestiae corrupti iste
						quae facilis incidunt, quod quibusdam omnis fuga fugiat assumenda,
						mollitia itaque asperiores beatae sunt illo dicta.
					</p>
					<div className="text-3deg-black-300">
						{isRandom > 0.5 ? <MdDoneAll /> : <MdCheck />}
					</div>
				</div>
			</div>
		</Link>
	);
};
