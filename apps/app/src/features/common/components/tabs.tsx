import React from "react"
import { cn } from "@/features/common/utils"

interface TabsProps<T extends string | number> {
	tabs: readonly T[]
	activeTab: T
	setActiveTab: (tab: T) => void
	className?: string
	buttonClassName?: string
}

export const Tabs = <T extends string | number>({
	tabs,
	activeTab,
	setActiveTab,
	className,
	buttonClassName,
}: TabsProps<T>) => {
	return (
		<div
			className={cn(
				"grid grid-cols-2 mx-auto gap-4 border border-3deg-choco-300 p-1 rounded-3xl mb-4",
				className
			)}
		>
			{tabs.map((tab) => (
				<button
					key={tab}
					className={cn(
						"capitalize font-xs font-medium py-2 text-sm",
						{
							"text-white bg-3deg-orange-100 rounded-3xl": tab === activeTab,
							"text-3deg-choco-600": tab !== activeTab,
						},
						buttonClassName
					)}
					onClick={() => setActiveTab(tab)}
				>
					{tab}
				</button>
			))}
		</div>
	)
}
