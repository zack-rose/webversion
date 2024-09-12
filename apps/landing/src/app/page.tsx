import {
	HowItWorks,
	Hero,
	BrowseRentalListings,
	AboutUs,
} from "@/features/landing-page/components";

export default function Home() {
	return (
		<main>
			<Hero />
			<HowItWorks />
			<BrowseRentalListings />
			<AboutUs />
		</main>
	);
}
