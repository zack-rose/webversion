import { HiStar } from "react-icons/hi2";
import { Avatar } from "@/features/common/components/avatar";

export const ListingReviews = () => {
	return (
		<div className="space-y-3 my-9">
			<h3 className="text-3deg-black-300 text-[2.5rem] leading-10 font-grifinito">
				Reviews
			</h3>

			<div className="grid md:grid-cols-3 gap-4">
				{Array.from({ length: 3 }).map((_item, i) => (
					<div key={i} className="p-5 bg-3deg-cream-550 rounded-lg space-y-2">
						<div className="flex items-center gap-3">
							<Avatar
								src="/images/avatar.jpeg"
								className="size-8"
								alt="user avatar"
							/>
							<p className="text-3deg-black-100 font-medium">Kyle</p>
						</div>

						<div className="flex items-center gap-2 flex-wrap">
							<div className="flex items-center gap-1">
								{Array.from({ length: 5 }).map((_item, i) => (
									<HiStar key={i} className="text-3deg-orange-100" />
								))}
							</div>
							<p className="text-xs text-3deg-black-300">1 week ago</p>
						</div>

						<div className="line-clamp-4 text-sm text-3deg-black-300">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
							aperiam, placeat voluptates animi ipsum, laboriosam est, et
							obcaecati aut deserunt provident voluptas sint commodi repellendus
							illo. Laborum ipsum fugit cumque non, maxime rerum eum earum
							impedit necessitatibus aut odio quis nulla nemo accusantium quod
							consequatur dolores! Vitae officiis autem laborum exercitationem
							voluptatum maiores quibusdam repellat esse consequuntur, molestias
							temporibus dicta ab modi tempora doloribus deleniti illo hic odio.
							Magni temporibus fugiat ducimus expedita doloribus odio autem eius
							eaque voluptates labore consectetur quia, dolor fuga nihil beatae
							excepturi, eveniet asperiores saepe animi consequuntur
							praesentium! Veniam suscipit vitae dolor. Ratione, vero quod?
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
