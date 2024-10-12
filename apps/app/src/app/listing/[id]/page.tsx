import React from "react";
import { PageParams } from "@/interface";
import { GoBackNavigation } from "@/features/add-a-place";
import {
	ListingDetailsCarousel,
	ListingInfo,
	ListingRecommendedSpots,
	ListingReviews,
} from "@/features/listing/details";

const ListingDetails = (props: PageParams) => {
	console.log("🚀 ==> params id:", props.params.id);

	return (
		<div className="bg-3deg-cream-200 pb-[5%] pt-4">
			<section className="pl-[5%] xl:pl-[10%] pr-[5%] md:pr-0 mb-6">
				<GoBackNavigation />
				<ListingDetailsCarousel />
			</section>

			<section className="content-spacing">
				<ListingInfo />
				<ListingReviews />
				<ListingRecommendedSpots />
			</section>
		</div>
	);
};

export default ListingDetails;
