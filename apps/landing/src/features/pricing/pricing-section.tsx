"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "../common/utils";
import { Button } from "@/features/common/components/ui/button";

type PricingType = "owners-and-swappers" | "renters";

export const PricingSection = () => {
	const [pricingType, setPricingType] = useState<PricingType>(
		"owners-and-swappers"
	);

	return (
		<section
			className="bg-cover bg-center bg-no-repeat 2xl:h-[80vh] w-full py-[20%] md:py-[5%] px-[5%] xsm:px-[8%] flex flex-col-reverse md:grid md:grid-cols-2 gap-y-20 md:gap-6 items-center"
			style={{
				backgroundImage: "url('/images/pricing-3degrees.png')",
			}}
		>
			<div className="bg-3deg-choco-500 rounded-lg py-6 px-4 lg:px-8 xl:w-11/12 2xl:w-4/5">
				<h2 className="text-center text-3deg-black-300 text-2xl xl:text-4xl">
					SWAP & STAY FOR A <br /> FRACTION OF THE COST
				</h2>

				<div className="flex flex-col xl:flex-row mx-auto my-8 justify-evenly rounded-lg bg-3deg-cream-350 w-fit">
					<button
						className={cn("p-8 rounded-lg text-center", {
							"border border-3deg-cream-350 bg-3deg-cream-400":
								pricingType === "owners-and-swappers",
						})}
						onClick={() => setPricingType("owners-and-swappers")}
					>
						<h5 className="text-xl">
							For owners & <br /> swappers
						</h5>
						<h3 className="font-bold text-3xl pt-3">&pound;20/month</h3>
					</button>
					<button
						className={cn("p-8 rounded-lg text-center", {
							"border border-3deg-cream-350 bg-3deg-cream-400":
								pricingType === "renters",
						})}
						onClick={() => setPricingType("renters")}
					>
						<h5 className="text-xl">For renters</h5>
						<h3 className="font-bold text-3xl pt-3">&pound;10/month</h3>
					</button>
				</div>

				<p className="text-3deg-black-300 text-center mb-8">
					No members fees. <br /> Just pay for cleaning and a service for per
					trip.
				</p>

				<div className="xl:w-11/12 2xl:w-4/5 mx-auto">
					<Button>Try it now</Button>
				</div>
			</div>

			<div className="place-content-center">
				<div className="relative h-[19rem] w-[15rem] mx-auto">
					<Image src="/images/3-degrees.png" alt="3-degrees" fill />
				</div>
			</div>
		</section>
	);
};
