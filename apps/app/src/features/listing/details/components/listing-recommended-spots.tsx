"use client";
import { useState } from "react";
import Image from "next/image";

import { TabPill } from "@/features/common/components/tab-pill";
import { HiStar } from "react-icons/hi2";

export const ListingRecommendedSpots = () => {
	const [recommendedPlaces, setRecommendedPlaces] = useState("");

	return (
		<div className="space-y-4">
			<div className="flex flex-wrap justify-between items-center">
				<h3 className="text-3deg-black-300 text-3xl">Recommended spots:</h3>

				<div className="flex gap-2">
					{["Bars", "Restaurants", "Coffee"].map((item) => (
						<TabPill
							key={item}
							onClick={() => setRecommendedPlaces(item)}
							value={item}
							isSelected={item === recommendedPlaces}
						/>
					))}
				</div>
			</div>

			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				{Array.from({ length: 4 }).map((_item, i) => (
					<div className="space-y-2" key={i}>
						<div className="relative w-full h-[12rem]">
							<Image
								src="/images/listing-1.png"
								alt=""
								fill
								className="rounded-lg object-cover"
							/>
						</div>

						<div className="flex justify-between items-center">
							<p className="text-sm font-medium text-3deg-black-300">
								Bar Bario
							</p>
							<div className="flex items-center text-3deg-orange-100 gap-2">
								<p className="text-sm font-medium">4.7</p>
								<HiStar className="text-lg" />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
