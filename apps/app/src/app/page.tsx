"use client";

import { PopularCollections, Hero } from "@/features/home/components";
import { SearchView } from "@/features/common/components/search-view";
import { ListPlacesGrid } from "@/features/common/components/list-places-grid";

export default function Home() {
	return (
		<main className="pt-[--safe-area-inset-top] bg-3deg-cream-200">
			<Hero />
			<SearchView className="content-spacing my-8" />
			<div className="space-y-10">
				<PopularCollections />
				<ListPlacesGrid
					sectionTitle="featured homes"
					containerClassName="content-spacing"
					seeAllLink="#"
				/>
				<ListPlacesGrid
					sectionTitle="Newly added homes"
					containerClassName="content-spacing pb-[5%]"
					seeAllLink="#"
				/>
			</div>
		</main>
	);
}
