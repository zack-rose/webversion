"use client"

import { useState } from "react"
import { ListPlacesGrid } from "@/features/common/components/list-places-grid"
import { Tabs } from "@/features/common/components/tabs"

const tabOptions = ["my spaces", "recommendations"] as const
type Tab = (typeof tabOptions)[number]

export const MySpacesAndRecommendations = () => {
	const [activeTab, setActiveTab] = useState<Tab>("my spaces")

	return (
		<section className="pb-[10%]">
			<Tabs
				tabs={tabOptions}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				className="w-full md:w-fit"
				buttonClassName="md:px-10"
			/>

			<ListPlacesGrid sectionTitle="CJ's listings" seeAllLink="#" />
		</section>
	)
}
