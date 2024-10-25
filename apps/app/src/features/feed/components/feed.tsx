import { RentalListingCard } from "@/features/common/components/cards";
import { ListingData } from "./sample-data";
import { FeedCard } from "./feed-card";

export const Feed = () => {
	return (
		<main className="bg-3deg-cream-200 px-[5%] lg:px-[15%] xl:px-[25%] pb-[5%]">
			<h1 className="uppercase text-center text-3deg-choco-100 text-3xl py-8">
				Feed
			</h1>

			<section className="space-y-8">
				<div className="grid md:grid-cols-2 gap-x-4 gap-y-8 max-w-full overflow-hidden">
					{ListingData.map((item, i) => (
						<RentalListingCard key={i} {...item} />
					))}
				</div>

				<FeedCard variant="morning-blue" />

				<div className="grid md:grid-cols-2 gap-x-4 gap-y-8 max-w-full overflow-hidden">
					{ListingData.map((item, i) => (
						<RentalListingCard key={i} {...item} />
					))}
				</div>

				<FeedCard variant="jasper" />
				<FeedCard variant="fawn" />

				<div className="grid md:grid-cols-2 gap-x-4 gap-y-8 max-w-full overflow-hidden">
					{ListingData.map((item, i) => (
						<RentalListingCard key={i} {...item} />
					))}
				</div>
			</section>
		</main>
	);
};
