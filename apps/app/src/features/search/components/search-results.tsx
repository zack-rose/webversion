import { RentalListingCard } from "@/features/common/components/cards";
import { ListingData } from "@/features/feed/components/sample-data";

export const SearchResults = () => {
	return (
		<section className="content-spacing pb-[15%]">
			<div className="flex justify-between items-center">
				<h4 className="font-medium text-2xl text-3deg-black-300">Results: </h4>
				<p className="text-base text-3deg-black-300">6 matches</p>
			</div>

			<div className="mt-7 grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 max-w-full overflow-hidden">
				{ListingData.map((item, i) => (
					<RentalListingCard key={i} {...item} />
				))}
			</div>
		</section>
	);
};
