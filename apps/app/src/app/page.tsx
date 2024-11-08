import {
	PopularCollections,
	Hero,
	SearchView,
	ListPlacesCarousel,
	Collections,
} from "@/features/home/components";
import { MembershipBenefitSection } from "@/features/home/components/membership-benefits";

export default function Home() {
	return (
		<main className="pt-[--safe-area-inset-top] bg-3deg-cream-200">
			<SearchView
				className="content-spacing md:!hidden mb-8"
				locationButtonClassname="bg-3deg-white-100 border-0 rounded-full"
				anytimeButtonClassname="bg-3deg-white-100 border-0 rounded-full"
			/>
			<Hero />
			<SearchView className="content-spacing my-8 hidden md:flex" />

			<div className="space-y-12">
				<PopularCollections />
				<ListPlacesCarousel sectionTitle="featured homes" />
				<ListPlacesCarousel sectionTitle="just added" />
				<Collections />
				<MembershipBenefitSection />
			</div>
		</main>
	);
}
