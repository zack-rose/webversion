import { PropsWithChildren } from "react";
import { cn } from "../utils";

interface Props
	extends React.DetailedHTMLProps<
		React.LabelHTMLAttributes<HTMLLabelElement>,
		HTMLLabelElement
	> {}

export const Label = ({
	children,
	className,
	...props
}: PropsWithChildren<Props>) => {
	return (
		<label
			className={cn("text-3deg-black-300 text-sm font-medium", className)}
			{...props}
		>
			{children}
		</label>
	);
};
