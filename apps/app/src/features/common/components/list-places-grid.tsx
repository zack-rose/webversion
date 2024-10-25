import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

import { RentalListingCard } from "@/features/common/components/cards";
import { SampleData } from "@/features/feed/components/sample-data";
import { OutlineButton } from "@/features/common/components/outline-button";
import { cn } from "@/features/common/utils";

interface Props {
	sectionTitle: string;
	seeAllLink: string;
	contentLength?: number;
	containerClassName?: string;
}

export const ListPlacesGrid = ({
	sectionTitle,
	seeAllLink = "#",
	contentLength = 3,
	containerClassName,
}: Props) => {
	return (
		<section className={cn(containerClassName)}>
			<div className="flex justify-between items-center mb-6 flex-wrap">
				<h3 className="text-base xxsm:text-xl xsm:text-2xl md:text-3xl lg:text-5xl text-3deg-choco-100 uppercase font-grifinito">
					{sectionTitle}
				</h3>

				<OutlineButton
					variant="tertiary"
					className="border-3deg-choco-300 text-3deg-choco-100 px-3 py-[0.3rem]"
				>
					<Link href={seeAllLink} className="flex items-center gap-2">
						See all <HiArrowRight />
					</Link>
				</OutlineButton>
			</div>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 max-w-full overflow-hidden">
				{Array.from({ length: contentLength }, () => ({
					...SampleData,
				})).map((item, i) => (
					<RentalListingCard key={i} {...item} />
				))}
			</div>
		</section>
	);
};
