"use client";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Image from "next/image";

import { AddaPlaceDescription } from "@/features/add-a-place/description";
import { SubmitButton } from "@/features/add-a-place";
import { Input } from "@/features/common/components/ui/input";

const AddPlaceLocation = () => {
	return (
		<section className="flex flex-col justify-center items-center h-full md:w-[70%] lg:w-[55%] xl:w-[35%] 2xl:w-1/4 mx-auto pb-[10%]">
			<AddaPlaceDescription
				description="Enter your address so we can place a pin near in on the map. Please note, we will never share your exact address."
				progress={50}
				headerClassName="text-2xl md:text-3xl lg:text-4xl text-center"
				descriptionClassName="text-sm md:text-base text-center"
			/>

			<div className="w-full my-4">
				<Input
					placeholder="Search for a place"
					type="search"
					prefixContent={
						<HiMagnifyingGlass className="size-5 text-3deg-cream-250" />
					}
				/>
			</div>

			<div className="relative w-full h-[25rem] mb-6">
				<Image alt="map" src="/images/map.png" fill />
			</div>

			<SubmitButton url="/add-place/setup" />
		</section>
	);
};

export default AddPlaceLocation;
