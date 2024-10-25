import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

import { OutlineButton } from "@/features/common/components/outline-button";
import { RentalListingCard } from "@/features/common/components/cards";

interface Props {
	title: string;
	location: string;
	rent: number;
}

export const BrowseRentalListings = () => {
	return (
		<section className="bg-3deg-cream-200 content-spacing pt-10 pb-[10%]">
			<div className="flex justify-between items-center mb-6">
				<h3 className="text-3xl lg:text-5xl text-3deg-choco-100 uppercase">
					Browse
				</h3>

				<OutlineButton
					variant="tertiary"
					className="border-3deg-choco-300 text-3deg-choco-100 px-3 py-[0.3rem]"
				>
					<Link href="#" className="flex items-center gap-2">
						See all <HiArrowRight />
					</Link>
				</OutlineButton>
			</div>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 max-w-full overflow-hidden">
				{ListingData.map((item, i) => (
					<RentalListingCard key={i} {...item} />
				))}
			</div>
		</section>
	);
};

const SampleData = {
	title: "West Hollywood",
	location:
		"65 Camberwell Church St. Peckham, Greater London, SE5 8TR, United Kingdom",
	rent: 175,
} satisfies Props;

const ListingData: Props[] = Array.from({ length: 6 }, () => ({
	...SampleData,
}));
