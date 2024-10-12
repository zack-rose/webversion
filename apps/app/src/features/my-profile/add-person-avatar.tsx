import Image from "next/image";
import { HiPlus } from "react-icons/hi2";
import Link from "next/link";

import { cn } from "@/features/common/utils";

interface Props {
	className?: string;
	imageContainerClassName?: string;
}

export const AddPersonAvatar = ({
	className,
	imageContainerClassName,
}: Props) => {
	return (
		<Link
			href="/profile/random-person"
			className={cn("space-y-3 cursor-pointer w-[5rem]", className)}
		>
			<div className={cn("relative size-[4rem]", imageContainerClassName)}>
				<Image
					src="/images/avatar.jpeg"
					className="rounded-full border-[3px] border-3deg-orange-100"
					fill
					alt=""
				/>

				<div className="absolute bottom-0 right-0 bg-3deg-orange-100 p-[0.1rem] rounded-full">
					<HiPlus className="text-white" />
				</div>
			</div>

			<div className="text-3deg-blue-100 text-sm text-center">Jane West</div>
		</Link>
	);
};
