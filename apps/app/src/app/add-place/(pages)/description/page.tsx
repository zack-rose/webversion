"use client";
import { useState } from "react";

import { AddaPlaceDescription } from "@/features/add-a-place/description";
import { Label } from "@/features/common/components/Label";
import { SubmitButton } from "@/features/add-a-place";
import { Textarea } from "@/features/common/components/ui/textarea";
import { TabPill } from "@/features/common/components/tab-pill";

const options = [
	"Peaceful",
	"Modern",
	"Light-Flooded",
	"Pet-Friendly",
	"Cozy",
	"Spacious",
	"Sea View",
	"Mid-Century",
	"Industrial",
];

const AddPlaceDescription = () => {
	const [descriptions, setDescriptions] = useState<string[]>([]);

	const toggleDescription = (item: string) => {
		setDescriptions((prevDescriptions) => {
			if (prevDescriptions.includes(item)) {
				return prevDescriptions.filter((description) => description !== item);
			} else {
				return [...prevDescriptions, item];
			}
		});
	};

	return (
		<section className="flex flex-col justify-center items-center h-full md:w-[70%] lg:w-[55%] xl:w-1/3 2xl:w-1/4 mx-auto pb-[10%]">
			<AddaPlaceDescription
				description="How would you describe your home?"
				progress={70}
				headerClassName="text-center"
				descriptionClassName="text-sm md:text-base"
			/>

			<form className="w-full mt-6" onSubmit={(e) => e.preventDefault()}>
				<div className="flex flex-wrap gap-2 items-center mb-5">
					{options.map((option) => (
						<TabPill
							key={option}
							onClick={() => toggleDescription(option)}
							value={option}
							isSelected={descriptions.includes(option)}
						/>
					))}
				</div>

				<div className="mb-6 space-y-2">
					<Label>Write a short note about your home.</Label>
					<Textarea
						placeholder="A two bedroom apartment in central Miami with ocean and city views.."
						rows={10}
						className="outline-none bg-3deg-cream-200 border-3deg-choco-300 text-black ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
					/>
				</div>
				<SubmitButton url="/add-place/photos" />
			</form>
		</section>
	);
};

export default AddPlaceDescription;
