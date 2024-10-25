"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi,
} from "@/features/common/components/ui/carousel";
import clsx from "clsx";
import { cn } from "@/features/common/utils";

const CarouselData = Array.from({ length: 8 });

interface Props {
	buttonLinkClassName?: string;
}

export const Hero = ({ buttonLinkClassName }: Props) => {
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
		<section className="content-spacing">
			<Carousel
				setApi={setApi}
				plugins={[
					Autoplay({
						delay: 3000,
						playOnInit: true,
					}),
				]}
			>
				<CarouselContent className="-mx-2">
					{CarouselData.map((_, i) => (
						<CarouselItem key={i} className="px-2">
							<div className="relative h-[60svh] w-full overflow-hidden rounded-xl">
								<Image
									src="/images/hero.png"
									fill
									alt=""
									className="object-cover"
								/>

								<div className="absolute bottom-0 left-0 right-0 p-4">
									<div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
										<div className="space-y-2">
											<h1 className="text-3deg-cream-200 text-4xl lg:text-6xl uppercase">
												The monarch
											</h1>
											<p className="text-sm text-white">Camberwell, London</p>
										</div>

										<Link
											href="#"
											className={cn(
												"bg-3deg-cream-100 px-5 py-2 rounded-md w-fit",
												buttonLinkClassName
											)}
										>
											<p className="text-white font-bold text-base">
												View home
											</p>
										</Link>
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>

			<div className="flex justify-center items-center mt-4 gap-2">
				{CarouselData.map((_item, index) => (
					<button
						key={index}
						className={cn("h-[6px] w-10 rounded-2xl", {
							"bg-3deg-choco-450": currentSlide === index,
							"bg-3deg-choco-350": currentSlide !== index,
						})}
						onClick={() => handleIndicatorClick(index)}
					/>
				))}
			</div>
		</section>
	);
};
