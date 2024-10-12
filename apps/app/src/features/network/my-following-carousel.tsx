"use client";
import Link from "next/link";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import {
	type CarouselApi,
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/features/common/components/ui/carousel";
import { AddPersonAvatar } from "../my-profile";
import { useState } from "react";

export const MyNetworkFollowingCarousel = () => {
	const [api, setApi] = useState<CarouselApi>();

	const handleClickPrev = () => api?.scrollPrev();
	const handleClickNext = () => api?.scrollNext();

	return (
		<section className="py-6">
			<div className="flex justify-between items-center mb-3">
				<h5 className="font-semibold text-lg text-3deg-black-300">Following</h5>
				<Link href="#" className="font-medium text-3deg-brown-100">
					See all
				</Link>
			</div>

			<Carousel setApi={setApi}>
				<CarouselContent>
					{Array.from({ length: 15 }).map((_item, i) => (
						<CarouselItem
							key={i}
							className="basis-1/4 xsm:basis-1/5 md:basis-[15%] 2xl:basis-[12.66%]"
						>
							<AddPersonAvatar
								className="flex flex-col justify-center items-center"
								imageContainerClassName="md:size-[5rem]"
							/>
						</CarouselItem>
					))}
				</CarouselContent>

				<button
					className="absolute bottom-1/2 bg-white p-2 rounded-full hidden md:block md:-left-9 lg:-left-12"
					onClick={handleClickPrev}
				>
					<MdArrowBackIosNew className="text-[1C1B1F]" />
				</button>

				<button
					className="absolute bottom-1/2 bg-white p-2 rounded-full hidden md:block md:-right-9 lg:-right-12"
					onClick={handleClickNext}
				>
					<MdArrowForwardIos className="text-[1C1B1F]" />
				</button>
			</Carousel>
		</section>
	);
};
