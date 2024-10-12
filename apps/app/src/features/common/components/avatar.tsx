import Image from "next/image";
import { cn } from "@/features/common/utils";

interface Props {
	className?: string;
	imgClassName?: string;
	src: string;
	alt: string;
}

export const Avatar = ({ className, src, alt, imgClassName }: Props) => {
	return (
		<div className={cn("relative size-12", className)}>
			<Image
				src={src}
				alt={alt}
				className={cn("rounded-full", imgClassName)}
				fill
			/>
		</div>
	);
};
