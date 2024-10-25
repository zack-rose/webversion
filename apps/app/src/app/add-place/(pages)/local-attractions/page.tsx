"use client";

import Image from "next/image";
import { HiMagnifyingGlass } from "react-icons/hi2";

import { FormProgress } from "@/features/add-a-place/form-progress/FormProgress";
import { Input } from "@/features/common/components/ui/input";
import { SubmitButton } from "@/features/add-a-place";

const AddPlaceLocalAttractions = () => {
	return (
		<section className="flex flex-col justify-center items-center h-full md:w-[70%] lg:w-[55%] xl:w-1/3 2xl:w-1/4 mx-auto pb-[10%]">
			<div className="w-full space-y-4">
				<h2 className="text-3deg-black-300 text-2xl md:text-3xl lg:text-4xl text-start">
					Local Favourites
				</h2>

				<FormProgress progressValue={95} />
			</div>

			<form className="w-full mt-6" onSubmit={(e) => e.preventDefault()}>
				<Input
					label="Where do you get your morning coffee?"
					placeholder="Start by searching for a place"
					type="search"
					innerContainerClassName="border-black bg-3deg-white-100"
					containerClassName="mb-0"
					prefixContent={
						<HiMagnifyingGlass className="size-5 text-3deg-cream-250" />
					}
				/>

				<p className="text-sm py-3">Matches 4</p>

				{Array.from({ length: 2 }).map((item, i) => (
					<div
						key={i}
						className="bg-3deg-white-100 p-2 flex mb-2 rounded-lg gap-3"
					>
						<div className="w-1/4 relative h-16">
							<Image
								alt=""
								src="/images/listing-1.png"
								fill
								className="rounded-lg"
							/>
						</div>

						<div className="w-3/4 space-y-1">
							<h4 className="font-medium">Camberwell Arms</h4>
							<p className="text-xs">
								65 Camberwell Church St. Peckham, Greater London, SE5 8TR,
								United Kingdom
							</p>

							<p className="text-3deg-orange-100 text-xs">3 recommended</p>
						</div>
					</div>
				))}

				<div className="space-y-3 mb-3">
					<p className="text-3deg-black-300 text-sm font-medium">
						Your favourite restaurant?
					</p>

					<p className="text-3deg-black-300 text-sm font-medium">
						The best place to work out?
					</p>

					<p className="text-3deg-black-300 text-sm font-medium">Hidden gem?</p>
				</div>

				<Input
					placeholder="Start by searching for a place"
					type="search"
					innerContainerClassName="border-black bg-3deg-white-100"
					prefixContent={
						<HiMagnifyingGlass className="size-5 text-3deg-cream-250" />
					}
				/>

				<SubmitButton url="/add-place/thank-you" />
			</form>
		</section>
	);
};

export default AddPlaceLocalAttractions;
