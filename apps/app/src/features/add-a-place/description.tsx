import { cn } from "@/features/common/utils";
import { FormProgress } from "./form-progress/FormProgress";

interface Props {
	description: string;
	progress: number;
	headerClassName?: string;
	descriptionClassName?: string;
}

export const AddaPlaceDescription = ({
	description,
	progress,
	headerClassName,
	descriptionClassName,
}: Props) => {
	return (
		<div>
			<h2
				className={cn(
					"text-3deg-black-300 text-4xl md:text-5xl font-grifinito",
					headerClassName
				)}
			>
				About your place
			</h2>
			<p className={cn("text-3deg-choco-650 my-2", descriptionClassName)}>
				{description}
			</p>
			<FormProgress progressValue={progress} />
		</div>
	);
};
