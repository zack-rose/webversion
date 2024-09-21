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
import { cn, formatCurrency } from "@/features/common/utils";
import { Pill } from "../Pill";

interface Props {
	title: string;
	location: string;
	rent: number;
	heartIconColor?: "chocolate" | "orange";
}

const CarouselData = Array.from({ length: 5 });

export const RentalListingCard = ({
	title,
	location,
	rent,
	heartIconColor = "chocolate",
}: Props) => {
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
										className="object-cover rounded-lg"
										fill
									/>

									<button className="absolute top-4 right-4 bg-3deg-cream-200 size-7 rounded-full flex justify-center items-center outline-none">
										<MdFavorite
											className={cn("size-5", {
												"text-3deg-choco-400": heartIconColor === "chocolate",
												"text-3deg-orange-100": heartIconColor === "orange",
											})}
										/>
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
					<Pill>
						<MdOutlineAddBusiness className="text-3deg-black-300 text-xl" />
						<p className="text-3deg-black-300 text-sm">Rent</p>
					</Pill>

					<Pill>
						<MdSwapCalls className="text-3deg-black-300 text-xl" />
						<p className="text-3deg-black-300 text-sm">Rent</p>
					</Pill>

					<Pill>
						<MdOutlineBed className="text-3deg-black-300 text-xl" />
						<p className="text-3deg-black-300 text-sm">2</p>
					</Pill>

					<Pill>
						<MdOutlineShower className="text-3deg-black-300 text-xl" />
						<p className="text-3deg-black-300 text-sm">1</p>
					</Pill>
				</div>
			</Link>
		</div>
	);
};
