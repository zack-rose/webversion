import {
	PopularCollections,
	Hero,
	SearchView,
} from "@/features/home/components";
import { ListPlacesGrid } from "@/features/common/components/list-places-grid";
import { MembershipBenefitSection } from "@/features/home/components/membership-benefits";

export default function Home() {
	return (
		<main className="pt-[--safe-area-inset-top] bg-3deg-cream-200">
			<Hero />
			<SearchView className="content-spacing my-8" />

			<div className="space-y-10">
				<PopularCollections />
				<ListPlacesGrid
					sectionTitle="featured homes"
					containerClassName="content-spacing"
					seeAllLink="#"
				/>
				<ListPlacesGrid
					sectionTitle="Newly added homes"
					containerClassName="content-spacing"
					seeAllLink="#"
				/>
				<MembershipBenefitSection />
			</div>
		</main>
	);
}
