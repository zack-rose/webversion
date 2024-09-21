import { PropsWithChildren } from "react";
import { cn } from "../utils";

interface Props {
	className?: string;
}

export const Pill = ({ className, children }: PropsWithChildren<Props>) => {
	return (
		<div
			className={cn(
				"flex gap-2 items-center border-[0.5px] border-3deg-black-300 rounded-3xl py-1 px-2 cursor-pointer",
				className
			)}
		>
			{children}
		</div>
	);
};
