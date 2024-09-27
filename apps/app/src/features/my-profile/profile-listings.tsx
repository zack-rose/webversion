import { ListPlacesGrid } from "@/features/common/components/list-places-grid";

export const MyprofileListings = () => {
	return (
		<section className="space-y-8 pb-[10%]">
			<ListPlacesGrid sectionTitle="my listings" seeAllLink="#" />
			<ListPlacesGrid sectionTitle="my recommended places" seeAllLink="#" />
		</section>
	);
};
