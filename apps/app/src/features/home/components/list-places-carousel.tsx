"use client";

import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
	MdSwapCalls,
	MdOutlineAddBusiness,
	MdOutlineBed,
	MdOutlineShower,
} from "react-icons/md";
import Link from "next/link";

import {
	type CarouselApi,
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/features/common/components/ui/carousel";
import { ListingData } from "@/features/feed/components/sample-data";
import { formatCurrency } from "@/features/common/utils";

import { Pill } from "../../common/components/Pill";

interface Props {
	sectionTitle: string;
}

export const ListPlacesCarousel = ({ sectionTitle }: Props) => {
	const [api, setApi] = useState<CarouselApi>();

	const handleClickPrev = () => api?.scrollPrev();
	const handleClickNext = () => api?.scrollNext();

	return (
		<section className="content-spacing relative">
			<div className="flex justify-between items-center mb-[0.625rem]">
				<h3 className="text-50px text-3deg-black-300 uppercase font-grifinito">
					{sectionTitle}
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
					{ListingData.map(({ title, location, rent }, i) => (
						<CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
							<div className="relative aspect-[12/10] mb-5">
								<Image
									src="/images/listing-1.png"
									alt="collection"
									className="rounded-lg object-cover"
									fill
								/>
							</div>

							<Link href="/listing/current-listing-id">
								<div className="flex justify-between items-center">
									<h5 className="font-medium text-3deg-black-300">{title}</h5>
									<p className="text-sm text-3deg-black-300 hidden md:block">
										{formatCurrency(rent)} p/n
									</p>
								</div>

								<p className="text-xs md:text-sm text-black md:text-3deg-black-300 font-light md:font-normal truncate pt-1 pb-3">
									{location}
								</p>

								<p className="md:hidden italic text-xs text-black text-opacity-[0.63] pb-3">
									{formatCurrency(rent)} p/n
								</p>

								<div className="flex items-center gap-2 flex-wrap">
									<Pill>
										<MdOutlineAddBusiness className="text-3deg-black-300 text-xl" />
										<p className="text-3deg-black-300 text-sm">Rent</p>
									</Pill>

									<Pill>
										<MdSwapCalls className="text-3deg-black-300 text-xl" />
										<p className="text-3deg-black-300 text-sm">Swap</p>
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
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	);
};
