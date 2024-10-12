"use client";
import { HiChevronLeft } from "react-icons/hi2";
import { useRouter } from "next/navigation";

export const GoBackNavigation = () => {
	const router = useRouter();
	const goBack = () => router.back();

	return (
		<div onClick={goBack} className="cursor-pointer mb-5 w-fit">
			<HiChevronLeft className="size-5 text-black" />
		</div>
	);
};
