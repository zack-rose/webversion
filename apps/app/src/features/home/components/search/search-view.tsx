"use client"

import { useRef } from "react"
import { useRouter } from "next/navigation"
import { HiOutlineMapPin } from "react-icons/hi2"

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/features/common/components/ui/select"
import { cn } from "@/features/common/utils"
import { AnywhereDropdown } from "./anywhere-dropdown"
import { LocationCombobox } from "./location-combobox"
import { locations } from "./data"

interface Props {
	className?: string
}

export const SearchView = ({ className }: Props) => {
	const router = useRouter()
	const inputRef = useRef<HTMLInputElement>(null)

	const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
		const searchValue = inputRef.current?.value || ""

		e.preventDefault()
		return router.push(`/search?key=${encodeURIComponent(searchValue)}`)
	}

	return (
		<form
			className={cn(
				"flex flex-col-reverse md:flex-row justify-between md:items-center gap-4",
				className
			)}
			onSubmit={onSubmitSearch}
		>
			<div className="flex gap-3 items-center flex-wrap">
				<LocationCombobox />
				<AnywhereDropdown />
			</div>

			<div>
				<Select>
					<SelectTrigger className="w-[200px] bg-3deg-cream-200 border border-3deg-cream-500 text-3deg-choco-100">
						<HiOutlineMapPin className="size-4 text-3deg-choco-100" />
						<SelectValue placeholder="Select location" />
					</SelectTrigger>

					<SelectContent className="bg-3deg-cream-300">
						<SelectGroup>
							<SelectLabel>Europe</SelectLabel>
							{locations.map((item) => (
								<SelectItem key={item.value} value={item.value}>
									{item.label}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		</form>
	)
}
