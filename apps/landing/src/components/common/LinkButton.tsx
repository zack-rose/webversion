import { PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";

import { cn } from "@/lib/utils";

interface Props extends LinkProps {
	variant?: "primary" | "secondary" | "tertiary";
	className?: string;
}

export const LinkButton = ({
	variant = "primary",
	className,
	children,
	...rest
}: PropsWithChildren<Props>) => {
	return (
		<Link {...rest} passHref legacyBehavior>
			<a
				className={cn(
					"rounded-3xl px-5 py-1 outline-none transition duration-700 ease-in-out transform hover:translate-x-1",
					{
						"bg-3deg-cream-100 text-white text-balance font-bold hover:bg-transparent border-3deg-cream-100 hover:border":
							variant === "primary",
						"bg-transparent text-white border border-white text-sm font-medium hover:bg-3deg-cream-100":
							variant === "tertiary",
					},
					className
				)}
			>
				{children}
			</a>
		</Link>
	);
};
