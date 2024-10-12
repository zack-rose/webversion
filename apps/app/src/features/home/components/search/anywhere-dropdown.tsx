"use client";
import { useState } from "react";
import { HiCalendarDays, HiChevronDown } from "react-icons/hi2";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/features/common/components/ui/popover";
import { Button } from "@/features/common/components/ui/button";
import { Tabs } from "@/features/common/components/tabs";
import { Months } from "@/features/common/utils";
import { Slider } from "@/features/common/components/ui/slider";
import { cn } from "@/features/common/utils";

const tabOptions = ["I'm flexible", "Exact dates"] as const;
type Tab = (typeof tabOptions)[number];

interface Props {
	buttonClassName?: string;
}

export const AnywhereDropdown = ({ buttonClassName }: Props) => {
	const [activeTab, setActiveTab] = useState<Tab>("I'm flexible");
	const [tripDuration, setTripDuration] = useState([0, 0]);

	const handleTripDurationChange = (value: number[]) => setTripDuration(value);

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					className={cn(
						"flex justify-between items-center font-normal bg-3deg-cream-300 hover:bg-3deg-cream-300 border-3deg-cream-150 w-full md:w-[9.375rem] lg:w-[15.625rem]",
						buttonClassName
					)}
				>
					<div className="flex items-center gap-2 text-3deg-cream-250">
						<HiCalendarDays className="size-5" />
						<p className="text-sm">Anytime</p>
					</div>

					<HiChevronDown />
				</Button>
			</PopoverTrigger>

			<PopoverContent className="mx-2 w-[95vw] md:w-[22rem] border border-3deg-cream-500 bg-3deg-choco-500 mt-3 p-3 xxsm:p-4">
				<h4 className="text-3deg-black-300 text-lg font-semibold">
					When are you going?
				</h4>

				<Tabs
					tabs={tabOptions}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
					className="mt-4 mb-8"
					buttonClassName="md:px-8 py-[0.625rem]"
				/>

				<div className="space-y-4 mb-8">
					<h6 className="font-medium text-3deg-black-300">Go in</h6>
					<div className="flex flex-wrap gap-2 items-center">
						{Months.map((month) => (
							<button
								key={month}
								className="border border-3deg-choco-300 rounded-2xl text-3deg-black-300 px-4 py-1"
							>
								{month}
							</button>
						))}
					</div>
				</div>

				<div className="mb-8">
					<h6 className="font-medium text-3deg-black-300">
						Add a minimum trip length?
					</h6>

					<div className="text-3deg-black-300 font-semibold text-2xl my-4">
						{tripDuration[0]}+ nights
					</div>

					<Slider
						defaultValue={[5]}
						max={500}
						step={1}
						onValueChange={handleTripDurationChange}
					/>
				</div>

				<Button className="w-full" size="lg">
					Search
				</Button>
			</PopoverContent>
		</Popover>
	);
};
