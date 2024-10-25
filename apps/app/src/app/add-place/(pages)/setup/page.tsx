"use client";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa6";

import { AddaPlaceDescription } from "@/features/add-a-place/description";
import { Label } from "@/features/common/components/Label";
import { SubmitButton } from "@/features/add-a-place";

const availabilityOptions = ["Bedrooms", "Beds", "Bathrooms", "Sleeps"];

const AddPlaceSetup = () => {
	return (
		<section className="pb-[10%] flex items-center md:gap-[5%] lg:gap-[10%]">
			<div className="w-full md:w-[45%] lg:w-2/5">
				<AddaPlaceDescription description="What is the set up?" progress={60} />

				<form className="mt-6" onSubmit={(e) => e.preventDefault()}>
					<div className="space-y-3 mb-6">
						{availabilityOptions.map((option) => (
							<div
								key={option}
								className="flex justify-between items-center border-b border-3deg-greenish-100 p-3"
							>
								<Label htmlFor={option} className="text-base">
									{option}
								</Label>

								<div className="flex gap-2">
									<button className="bg-white p-1 rounded-sm">
										<FaMinus />
									</button>
									<div>1</div>
									<button className="bg-white p-1 rounded-sm">
										<FaPlus />
									</button>
								</div>
							</div>
						))}
					</div>

					<SubmitButton url="/add-place/description" />
				</form>
			</div>

			<div className="hidden md:block w-[55%] lg:w-3/5 h-[23rem] lg:h-[32rem] relative">
				<Image src="/images/listing-1.png" alt="offering" fill />
			</div>
		</section>
	);
};

export default AddPlaceSetup;
