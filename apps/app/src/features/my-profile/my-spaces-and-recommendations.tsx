"use client";

import { useState } from "react";
import { ListPlacesGrid } from "@/features/common/components/list-places-grid";
import { cn } from "@/features/common/utils";

const tabOptions = ["my spaces", "recommendations"] as const;
type Tab = (typeof tabOptions)[number];

export const MySpacesAndRecommendations = () => {
	const [activeTab, setActiveTab] = useState<Tab>("my spaces");

	return (
		<section className="pb-[10%]">
			<div className="flex items-center flex-wrap w-fit mx-auto gap-4 border border-3deg-choco-300 p-1 rounded-3xl mb-4">
				{tabOptions.map((tab) => (
					<button
						key={tab}
						className={cn(
							"capitalize font-xs font-medium px-2 xxsm:px-4 md:px-10 py-2 text-sm",
							{
								"text-white bg-3deg-orange-100 rounded-3xl": tab === activeTab,
								"text-3deg-choco-600": tab !== activeTab,
							}
						)}
						onClick={() => setActiveTab(tab)}
					>
						{tab}
					</button>
				))}
			</div>

			<ListPlacesGrid sectionTitle="my listings" seeAllLink="#" />
		</section>
	);
};
