import { PropsWithChildren } from "react";

interface Props
	extends React.DetailedHTMLProps<
		React.LabelHTMLAttributes<HTMLLabelElement>,
		HTMLLabelElement
	> {}

export const Label = ({ children, ...props }: PropsWithChildren<Props>) => {
	return (
		<label className="text-3deg-black-300 text-sm font-medium" {...props}>
			{children}
		</label>
	);
};
