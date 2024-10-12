"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/features/common/components/ui/button";
import { addPlaceUrls } from "@/interface";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	url: addPlaceUrls;
}

export const SubmitButton = ({ url, type = "submit", ...rest }: Props) => {
	const router = useRouter();

	return (
		<Button
			type={type}
			{...rest}
			className="w-full"
			onClick={() => router.push(url)}
			size="lg"
		>
			Continue
		</Button>
	);
};
