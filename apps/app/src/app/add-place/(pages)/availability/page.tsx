"use client";
import Image from "next/image";

import { AddaPlaceDescription } from "@/features/add-a-place/description";
import { Checkbox } from "@/features/common/components/ui/checkbox";
import { Label } from "@/features/common/components/Label";
import { SubmitButton } from "@/features/add-a-place";

const availabilityOptions = [
	"Short (less than 3 months)",
	"Extended (3-6 months)",
	"Long (6+ months)",
	"Open or flexible availability",
];

const AddPlaceAvailability = () => {
	return (
		<section className="pb-[10%] flex items-center md:gap-[5%] lg:gap-[10%]">
			<div className="w-full md:w-[45%] lg:w-2/5">
				<AddaPlaceDescription
					description="How long is it available for? Tick all that apply."
					progress={40}
				/>

				<form className="mt-6" onSubmit={(e) => e.preventDefault()}>
					<div className="space-y-3 mb-6">
						{availabilityOptions.map((option) => (
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

					<SubmitButton url="/add-place/location" />
				</form>
			</div>

			<div className="hidden md:block w-[55%] lg:w-3/5 h-[23rem] lg:h-[32rem] relative">
				<Image src="/images/listing-1.png" alt="offering" fill />
			</div>
		</section>
	);
};

export default AddPlaceAvailability;
