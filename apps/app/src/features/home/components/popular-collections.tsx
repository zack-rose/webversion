"use client";

import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import Autoplay from "embla-carousel-autoplay";

import {
	type CarouselApi,
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/features/common/components/ui/carousel";
import Image from "next/image";

const collections = [
	"Paris",
	"London",
	"New York",
	"Tokyo",
	"Spain",
	"Germany",
	"Italy",
	"Malta",
];

export const PopularCollections = () => {
	const [api, setApi] = useState<CarouselApi>();

	const handleClickPrev = () => api?.scrollPrev();
	const handleClickNext = () => api?.scrollNext();

	return (
		<section className="content-spacing relative mt-12 md:mt-0">
			<div className="flex justify-between items-center mb-6">
				<h3 className="text-50px text-3deg-black-300 uppercase font-grifinito">
					POPULAR CITIES
				</h3>

				<div className="hidden md:flex gap-4 items-center">
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
					{collections.map((collection, index) => (
						<CarouselItem
							key={index}
							className="basis-3/4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
						>
							<div className="relative w-full h-[10rem] md:h-[12rem]">
								<Image
									src="/images/paris.jpg"
									alt={collection}
									className="rounded-lg object-cover"
									fill
								/>
								<div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
								<div className="absolute inset-0 flex items-center justify-center">
									<span className="text-white text-5xl uppercase font-grifinito">
										{collection}
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
