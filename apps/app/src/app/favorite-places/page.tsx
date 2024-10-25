import { RentalListingCard } from "@/features/common/components/cards";
import { ListingData } from "@/features/feed/components/sample-data";

const FavoritePlacesScreen = () => {
	return (
		<main className="content-spacing bg-3deg-cream-200 pb-[5%]">
			<h1 className="uppercase text-3deg-choco-100 text-3xl py-8">
				favorite places
			</h1>

			<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 max-w-full overflow-hidden">
				{ListingData.map((item, i) => (
					<RentalListingCard key={i} {...item} heartIconColor="orange" />
				))}
			</div>
		</main>
	);
};

export default FavoritePlacesScreen;
