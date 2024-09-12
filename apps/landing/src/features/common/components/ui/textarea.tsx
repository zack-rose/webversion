import * as React from "react";

import { cn } from "@/features/common/utils/tailwind";

export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	errorMessage?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, label, errorMessage, ...props }, ref) => {
		return (
			<div className="space-y-1 mb-5">
				<label
					className="text-3deg-black-300 text-sm font-medium"
					htmlFor={props.name}
				>
					{label}
				</label>

				<textarea
					className={cn(
						"flex min-h-[80px] w-full rounded-md border border-3deg-cream-150 bg-3deg-cream-300 px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-3deg-cream-250 text-3deg-cream-250 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-3deg-cream-150 disabled:cursor-not-allowed disabled:opacity-50 dark:border-3deg-cream-150 dark:bg-3deg-cream-300 dark:placeholder:text-3deg-cream-250 dark:focus-visible:ring-3deg-cream-150",
						className
					)}
					ref={ref}
					{...props}
				/>

				{errorMessage && <p className="text-red-600 text-xs">{errorMessage}</p>}
			</div>
		);
	}
);
Textarea.displayName = "Textarea";

export { Textarea };
