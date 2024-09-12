"use client";
import React, { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import {
	MdSwapCalls,
	MdOutlineAddBusiness,
	MdOutlineBed,
	MdOutlineShower,
	MdFavorite,
} from "react-icons/md";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from "@/features/common/components/ui/carousel";
import { formatCurrency } from "@/features/common/utils";

interface Props {
	title: string;
	location: string;
	rent: number;
}

const CarouselData = Array.from({ length: 5 });

export const RentalListingCard = ({ title, location, rent }: Props) => {
	const [api, setApi] = useState<CarouselApi>();
	const [currentSlide, setCurrentSlide] = useState(0);

	const handleIndicatorClick = (index: number) => {
		api?.scrollTo(index);
	};

	useEffect(() => {
		if (!api) {
			return;
		}

		setCurrentSlide(api.selectedScrollSnap());

		api.on("select", () => {
			setCurrentSlide(api.selectedScrollSnap());
		});
	}, [api]);

	return (
		<div>
			<div className="relative mb-2">
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
						{CarouselData.map((_item, index) => (
							<CarouselItem key={index}>
								<div className="relative w-[24rem] md:w-full h-[14rem] overflow-hidden">
									<Image
										src="/images/listing-1.png"
										alt="rental listing"
										fill
									/>

									<button className="absolute top-4 right-4 bg-3deg-cream-200 size-7 rounded-full flex justify-center items-center outline-none">
										<MdFavorite className="text-3deg-choco-400 size-5" />
									</button>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>

					<CarouselPrevious className="left-4 top-28 bg-3deg-cream-200 h-6 w-6 z-20 text-3deg-choco-400 outline-none" />
					<CarouselNext className="right-4 top-28 bg-3deg-cream-200 h-6 w-6 z-20 text-3deg-choco-400 outline-none" />
				</Carousel>

				<div className="absolute space-x-2 bottom-4 left-[7rem] xsm:left-[10rem] md:left-1/2 transform md:-translate-x-1/2">
					{CarouselData.map((_item, index) => (
						<button
							key={index}
							className={clsx("size-2 rounded-full space-x-1", {
								"bg-white": currentSlide === index,
								"bg-3deg-cream-200": currentSlide !== index,
							})}
							onClick={() => handleIndicatorClick(index)}
						/>
					))}
				</div>
			</div>

			<Link href="#">
				<div className="flex justify-between items-center">
					<h5 className="font-medium text-3deg-black-300">{title}</h5>
					<p className="text-sm text-3deg-black-300">
						{formatCurrency(rent)} p/n
					</p>
				</div>

				<p className="text-sm text-3deg-black-300 truncate pt-1 pb-3">
					{location}
				</p>

				<div className="flex items-center gap-2">
					<div className="flex gap-1 items-center border border-3deg-black-300 rounded-3xl py-1 px-2 cursor-pointer">
						<MdOutlineAddBusiness className="text-3deg-black-300 text-xl" />
						<p className="text-3deg-black-300 text-sm">Rent</p>
					</div>

					<div className="flex gap-1 items-center border border-3deg-black-300 rounded-3xl py-1 px-2 cursor-pointer">
						<MdSwapCalls className="text-3deg-black-300 text-xl" />
						<p className="text-3deg-black-300 text-sm">Rent</p>
					</div>

					<div className="flex gap-1 items-center border border-3deg-black-300 rounded-3xl py-1 px-2 cursor-pointer">
						<MdOutlineBed className="text-3deg-black-300 text-xl" />
						<p className="text-3deg-black-300 text-sm">2</p>
					</div>

					<div className="flex gap-2 items-center border border-3deg-black-300 rounded-3xl py-1 px-2 cursor-pointer">
						<MdOutlineShower className="text-3deg-black-300 text-xl" />
						<p className="text-3deg-black-300 text-sm">1</p>
					</div>
				</div>
			</Link>
		</div>
	);
};
