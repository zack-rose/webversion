import { RentalListingCard } from "@/features/common/components/cards";
import { ListingData } from "./sample-data";
import { FeedCard } from "./feed-card";
import { Input } from "@/features/common/components/ui/input";
import { HiMagnifyingGlass } from "react-icons/hi2";

export const Feed = () => {
	return (
		<main className="bg-3deg-cream-200 px-[0%] lg:px-[15%] xl:px-[25%] pb-[5%]">
			<h1 className="uppercase text-center text-3deg-choco-100 text-5xl py-8 font-grifinito hidden lg:block">
				Feed
			</h1>

			<div className="bg-3deg-cream-200 pt-4 px-[5%] lg:hidden">
				<Input
					innerContainerClassName="bg-3deg-white-100 border-0 rounded-3xl"
					className="w-full"
					type="search"
					placeholder="Search what you are looking for"
					prefixContent={
						<HiMagnifyingGlass className="size-5 text-3deg-cream-250" />
					}
				/>
			</div>

			<section className="lg:space-y-4">
				<div className="grid md:grid-cols-2 gap-x-4 gap-y-8 max-w-full overflow-hidden p-[5%] bg-3deg-cream-100 lg:bg-transparent">
					{ListingData.map((item, i) => (
						<RentalListingCard key={i} {...item} />
					))}
				</div>

				<FeedCard
					variant="morning-blue"
					className="rounded-none lg:rounded-xl lg:mx-[5%]"
				/>

				<div className="grid md:grid-cols-2 gap-x-4 gap-y-8 max-w-full overflow-hidden p-[5%] bg-3deg-cream-100 lg:bg-transparent">
					{ListingData.map((item, i) => (
						<RentalListingCard key={i} {...item} />
					))}
				</div>

				<FeedCard
					variant="jasper"
					className="rounded-none lg:rounded-xl lg:mx-[5%]"
				/>
				<FeedCard
					variant="fawn"
					className="rounded-none lg:rounded-xl lg:mx-[5%]"
				/>

				<div className="grid md:grid-cols-2 gap-x-4 gap-y-8 max-w-full overflow-hidden p-[5%] bg-3deg-cream-100 lg:bg-transparent">
					{ListingData.map((item, i) => (
						<RentalListingCard key={i} {...item} />
					))}
				</div>
			</section>
		</main>
	);
};
