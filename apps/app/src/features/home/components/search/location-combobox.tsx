"use client";
import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

import { Button } from "@/features/common/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/features/common/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/features/common/components/ui/popover";
import { Label } from "@/features/common/components/Label";
import { Checkbox } from "@/features/common/components/ui/checkbox";

import { locations } from "./data";
import { cn } from "@/features/common/utils";

interface Props {
	buttonClassName?: string;
}

export const LocationCombobox = ({ buttonClassName }: Props) => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className={cn(
						"items-start justify-start text-3deg-cream-250 gap-2 hover:text-3deg-cream-250 bg-3deg-cream-300 hover:bg-3deg-cream-300 border-3deg-cream-150 w-full md:w-[9.375rem] lg:w-[15.625rem]",
						buttonClassName
					)}
				>
					<HiMagnifyingGlass className="size-5 text-3deg-cream-250" />

					<p className="text-sm hover:text-3deg-cream-250">
						{value
							? locations.find((location) => location.value === value)?.label
							: "Anywhere"}
					</p>
				</Button>
			</PopoverTrigger>

			<PopoverContent className="mx-2 w-[95vw] md:w-[22rem] border border-3deg-cream-500 bg-3deg-choco-500 mt-3 p-3 xxsm:p-4">
				<Command className="bg-3deg-choco-500">
					<CommandInput
						placeholder="Search anywhere..."
						className="h-8"
						commandInputWrapperClassName="rounded-md border border-3deg-cream-150 mb-2"
					/>

					<CommandList>
						<CommandEmpty>Location not found.</CommandEmpty>
						<CommandGroup>
							{locations.map((location) => (
								<CommandItem
									key={location.value}
									value={location.value}
									onSelect={(currentValue) => {
										setValue(currentValue === value ? "" : currentValue);
									}}
									className="flex justify-between items-center data-[selected='true']:bg-3deg-choco-500 border-b last:border-0 border-3deg-greenish-100 rounded-none space-y-2"
								>
									<Label
										htmlFor={location.value}
										className="text-xs text-3deg-black-150 hover:cursor-pointer"
									>
										{location.label}
									</Label>
									<Checkbox
										className="border-3deg-black-150 data-[state=checked]:border-none size-4"
										name={location.label}
										id={location.value}
									/>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>

				<Button
					className="w-full mt-8"
					size="lg"
					onClick={() => setOpen(false)}
				>
					Search
				</Button>
			</PopoverContent>
		</Popover>
	);
};
