"use client";

import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
	type CarouselApi,
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/features/common/components/ui/carousel";

export const Collections = () => {
	const [api, setApi] = useState<CarouselApi>();

	const handleClickPrev = () => api?.scrollPrev();
	const handleClickNext = () => api?.scrollNext();

	return (
		<section className="content-spacing">
			<div className="flex justify-between items-center mb-[0.625rem]">
				<h3 className="text-50px text-3deg-black-300 uppercase font-grifinito">
					Collections
				</h3>

				<div className="flex gap-4 items-center">
					<button
						className="border border-3deg-choco-300 rounded-full p-2"
						onClick={handleClickPrev}
					>
						<HiArrowLeft className="text-black" />
					</button>
					<button
						className="border border-3deg-choco-300 rounded-full p-2"
						onClick={handleClickNext}
					>
						<HiArrowRight className="text-black" />
					</button>
				</div>
			</div>

			<Carousel
				setApi={setApi}
				plugins={[
					Autoplay({
						delay: 3500,
						playOnInit: false,
					}),
				]}
			>
				<CarouselContent>
					{Array.from({ length: 7 }).map((_item, i) => (
						<CarouselItem
							key={i}
							className="basis-3/4 md:basis-1/2 lg:basis-1/3"
						>
							<div className="relative aspect-[12/10] mb-[1.625rem]" key={i}>
								<Image
									src="/images/listing-1.png"
									alt="collection"
									className="rounded-lg object-cover"
									fill
								/>

								<div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
								<div className="absolute inset-0 flex items-center justify-center">
									<span className="text-white text-[2.75rem] leading-[3rem] uppercase font-grifinito">
										CHRISTMAS & <br /> NEW YEARS EVE
									</span>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	);
};
