"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { HiMagnifyingGlass, HiOutlineMapPin } from "react-icons/hi2";

import { Input } from "@/features/common/components/ui/input";
import { DatePicker } from "@/features/common/components/ui/date-picker";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/features/common/components/ui/select";
import { cn } from "@/features/common/utils";

interface Props {
	className?: string;
}

export const SearchView = ({ className }: Props) => {
	const router = useRouter();
	const inputRef = useRef<HTMLInputElement>(null);

	const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
		const searchValue = inputRef.current?.value || "";

		e.preventDefault();
		return router.push(`/search?key=${encodeURIComponent(searchValue)}`);
	};

	return (
		<form
			className={cn(
				"flex flex-col-reverse md:flex-row justify-between md:items-center gap-4",
				className
			)}
			onSubmit={onSubmitSearch}
		>
			<div className="flex gap-3 items-center flex-wrap">
				<Input
					placeholder="Anywhere"
					type="search"
					containerClassName="mb-1"
					prefixContent={
						<HiMagnifyingGlass className="size-5 text-3deg-cream-250" />
					}
					ref={inputRef}
				/>

				<DatePicker popoverTriggerButtonClassName="md:w-[150px] lg:w-[250px]" />

				{/* <div className="bg-3deg-orange-100 p-1 rounded-full">
					<HiArrowRight className="text-3deg-white-100" />
				</div> */}
			</div>

			<div className="">
				<Select>
					<SelectTrigger className="w-[200px] bg-3deg-cream-200 border border-3deg-cream-500 text-3deg-choco-100">
						<HiOutlineMapPin className="size-4 text-3deg-choco-100" />
						<SelectValue placeholder="Select location" />
					</SelectTrigger>

					<SelectContent className="bg-3deg-cream-300">
						<SelectGroup>
							<SelectLabel>Europe</SelectLabel>
							<SelectItem value="paris">Paris, France</SelectItem>
							<SelectItem value="berlin">Berlin, Germany</SelectItem>
							<SelectItem value="scotland">Scotland</SelectItem>
							<SelectItem value="london">London, England</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		</form>
	);
};
