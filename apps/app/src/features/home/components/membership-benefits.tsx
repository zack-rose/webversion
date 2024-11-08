"use client";

import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

import {
	type CarouselApi,
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/features/common/components/ui/carousel";
import { OutlineButton } from "@/features/common/components/outline-button";
import { MembershipBenefitCard } from "@/features/membership-benefits/membership-benefit.card";

export const MembershipBenefitSection = () => {
	const [api, setApi] = useState<CarouselApi>();

	const handleClickPrev = () => api?.scrollPrev();
	const handleClickNext = () => api?.scrollNext();

	return (
		<section className="content-spacing pb-[12%]">
			<div className="flex justify-between items-center mb-6 flex-wrap">
				<h3 className="text-50px text-3deg-black-300 uppercase font-grifinito">
					Member benefits
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
							className="basis-4/5 md:basis-1/2 lg:basis-1/3"
						>
							<MembershipBenefitCard key={i} />
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	);
};
