"use client";
import { useState } from "react";

import { FormProgress } from "@/features/add-a-place/form-progress/FormProgress";
import { TabPill } from "@/features/common/components/tab-pill";
import { Input } from "@/features/common/components/ui/input";
import { SubmitButton } from "@/features/add-a-place";
import { Checkbox } from "@/features/common/components/ui/checkbox";
import { Label } from "@/features/common/components/Label";

const pricingOptions = ["Nightly", "Weekly", "Monthly"] as const;
type PricingOption = (typeof pricingOptions)[number];

const charges = ["Add a cleaning fee", "Bills included"];

const AddPlacePricing = () => {
	const [pricingOption, setpricingOption] = useState<PricingOption>("Monthly");

	return (
		<section className="flex flex-col justify-center items-center h-full md:w-[70%] lg:w-[55%] xl:w-1/3 2xl:w-1/4 mx-auto pb-[10%]">
			<div className="w-full">
				<h2 className="text-3deg-black-300 text-2xl md:text-3xl lg:text-4xl text-start">
					Set Pricing
				</h2>

				<FormProgress progressValue={90} />
			</div>

			<form
				className="w-full mt-6 space-y-5"
				onSubmit={(e) => e.preventDefault()}
			>
				<Input
					label="Set the price (this can always be negotiated later)"
					placeholder="£175"
					innerContainerClassName="bg-3deg-choco-150 border-0 h-12"
				/>

				<div className="grid grid-cols-3 gap-2 items-center">
					{pricingOptions.map((item) => (
						<TabPill
							key={item}
							onClick={() => setpricingOption(item)}
							value={item}
							isSelected={item === pricingOption}
						/>
					))}
				</div>

				<Input
					placeholder="£175"
					innerContainerClassName="bg-3deg-choco-150 border-0 h-12"
				/>

				<div className="grid grid-cols-3 gap-2 items-center">
					{pricingOptions.map((item) => (
						<TabPill
							key={item}
							onClick={() => setpricingOption(item)}
							value={item}
							isSelected={item === pricingOption}
							className=""
						/>
					))}
				</div>

				<div className="space-y-5">
					{charges.map((option) => (
						<div
							key={option}
							className="flex justify-between items-center border border-[#626356] rounded-2xl p-3 hover:cursor-pointer"
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

				<SubmitButton url="/add-place/local-attractions" />
			</form>
		</section>
	);
};

export default AddPlacePricing;
