import * as React from "react"

import { cn } from "@/features/common/utils/tailwind"
import { ErrorMessage } from "../ErrorMessage"
import { Label } from "../Label"

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string
	errorMessage?: string | string[]
	prefixContent?: React.ReactNode
	containerClassName?: string
	innerContainerClassName?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			label,
			errorMessage,
			type,
			prefixContent,
			containerClassName,
			innerContainerClassName,
			...props
		},
		ref
	) => {
		return (
			<div className={cn("space-y-1 mb-5", containerClassName)}>
				<Label htmlFor={props.name}>{label}</Label>

				<div
					className={cn(
						"flex items-center h-10 w-full rounded-md border border-3deg-cream-150 bg-3deg-cream-300 px-3 py-2 focus-within:ring-1 focus-within:ring-3deg-cream-150",
						innerContainerClassName
					)}
				>
					{prefixContent && <span className="mr-2">{prefixContent}</span>}

					<input
						type={type}
						className={cn(
							"text-sm file:border-0 bg-transparent file:bg-transparent file:text-sm file:font-medium placeholder:text-3deg-cream-250 text-3deg-cream-250 focus-visible:outline-none focus-visible:ring-3deg-cream-150 disabled:cursor-not-allowed disabled:opacity-50 dark:border-3deg-cream-150 dark:bg-3deg-cream-300 dark:placeholder:text-3deg-cream-250 dark:focus-visible:ring-3deg-cream-150 outline-none",
							className
						)}
						ref={ref}
						{...props}
					/>
				</div>

				{errorMessage && <ErrorMessage errorMessage={errorMessage} />}
			</div>
		)
	}
)
Input.displayName = "Input"

export { Input }
