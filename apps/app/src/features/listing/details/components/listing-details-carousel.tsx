"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/features/common/components/ui/carousel";

export const ListingDetailsCarousel = () => {
	return (
		<div>
			<Carousel
				plugins={[
					Autoplay({
						delay: 3500,
						playOnInit: true,
					}),
				]}
			>
				<CarouselContent className="gap-4">
					{Array.from({ length: 10 }).map((_item, index) => (
						<CarouselItem key={index} className="md:basis-3/4 xl:basis-[70%]">
							<div className="relative w-full h-[23rem]">
								<Image
									src="/images/listing-1.png"
									alt=""
									className="rounded-lg object-cover"
									fill
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>

				<CarouselPrevious
					className="left-4 bg-white h-6 w-6 z-20 text-3deg-black-400 outline-none"
					icon="chevron"
				/>
				<CarouselNext
					className="right-4 bg-white h-6 w-6 z-20 text-3deg-black-400 outline-none"
					icon="chevron"
				/>
			</Carousel>
		</div>
	);
};
