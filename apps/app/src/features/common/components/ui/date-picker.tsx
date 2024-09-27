"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { Button } from "@/features/common/components/ui/button"
import { Calendar } from "@/features/common/components/ui/calendar"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/features/common/components/ui/popover"
import { cn } from "@/features/common/utils"

interface Props {
	popoverTriggerClassName?: string
	popoverTriggerButtonClassName?: string
}

export function DatePicker({
	popoverTriggerClassName,
	popoverTriggerButtonClassName,
}: Props) {
	const [date, setDate] = React.useState<Date>()

	return (
		<Popover>
			<PopoverTrigger asChild className={cn(popoverTriggerClassName)}>
				<Button
					variant={"outline"}
					className={cn(
						"w-[250px] justify-start text-left font-normal bg-3deg-cream-300 hover:bg-3deg-cream-300 border-3deg-cream-150",
						!date && "text-muted-foreground",
						popoverTriggerButtonClassName
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{date ? (
						format(date, "PPP")
					) : (
						<span className="text-3deg-cream-250">Pick a date</span>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	)
}
