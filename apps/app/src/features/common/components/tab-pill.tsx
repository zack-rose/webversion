import { cn } from "@/features/common/utils";

interface Props {
	onClick: () => void;
	value: string;
	isSelected: boolean;
	className?: string;
}

export const TabPill = ({ onClick, value, isSelected, className }: Props) => {
	return (
		<button
			onClick={onClick}
			className={cn(
				"px-4 text-sm font-medium border-[0.5px] rounded-3xl py-2",
				{
					"bg-3deg-orange-100 text-white": isSelected,
					"border-3deg-black-300 text-3deg-black-300": !isSelected,
				},
				className
			)}
		>
			{value}
		</button>
	);
};
