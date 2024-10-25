"use client";
import { HiMagnifyingGlass } from "react-icons/hi2";

import { AddaPlaceDescription } from "@/features/add-a-place/description";
import { Checkbox } from "@/features/common/components/ui/checkbox";
import { Label } from "@/features/common/components/Label";
import { SubmitButton } from "@/features/add-a-place";
import { Input } from "@/features/common/components/ui/input";

import { locations } from "@/features/home/components/search/data";

const options = ["Yes", "I'm open to requests"];

const AddPlaceRequestTypes = () => {
	return (
		<section className="flex flex-col justify-center items-center h-full md:w-[70%] lg:w-[55%] xl:w-2/5 2xl:w-1/4 mx-auto pb-[10%]">
			<AddaPlaceDescription
				description="Are you looking to house swap to a specific place?"
				progress={30}
				headerClassName="text-2xl md:text-3xl lg:text-4xl text-center"
				descriptionClassName="text-sm md:text-base"
			/>

			<form className="w-full mt-6" onSubmit={(e) => e.preventDefault()}>
				<div className="space-y-3 mb-6">
					{options.map((option) => (
						<div
							key={option}
							className="flex justify-between items-center border border-3deg-greenish-100 rounded-2xl p-3 hover:cursor-pointer"
						>
							<Label
								htmlFor={option}
								className="text-base hover:cursor-pointer"
							>
								{option}
							</Label>
							<Checkbox
								className="border-3deg-black-150 data-[state=checked]:border-none"
								name={option}
								id={option}
							/>
						</div>
					))}
				</div>

				<h5 className="mt-6 mb-4 font-semibold text-3deg-black-300 text-lg">
					Where to?
				</h5>

				<Input
					placeholder="Barcelona, Spain"
					type="search"
					prefixContent={
						<HiMagnifyingGlass className="size-5 text-3deg-cream-250" />
					}
				/>

				<div className="space-y-2 mb-6 h-[18rem] custom-scrollbar">
					{locations.map((location) => (
						<div
							key={location.value}
							className="flex justify-between items-center border-b border-3deg-greenish-100 p-2 hover:cursor-pointer"
						>
							<Label
								htmlFor={location.value}
								className="text-base hover:cursor-pointer"
							>
								{location.label}
							</Label>
							<Checkbox
								className="border-3deg-black-150 data-[state=checked]:border-none"
								name={location.value}
								id={location.value}
							/>
						</div>
					))}
				</div>

				<SubmitButton url="/add-place/availability" />
			</form>
		</section>
	);
};

export default AddPlaceRequestTypes;
