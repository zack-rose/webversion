import Image from "next/image";
import Link from "next/link";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/features/common/components/ui/dropdown-menu";
import { cn } from "../../utils";

interface AvatarProps {
	className?: string;
	imgClassName?: string;
}

export const AvatarDropdownMenu = ({
	className,
	imgClassName,
}: AvatarProps) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className={cn("relative size-10 cursor-pointer", className)}>
					<Image
						src="/images/avatar.jpeg"
						alt="user avatar"
						className={cn("rounded-full", imgClassName)}
						fill
					/>
				</div>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="mt-4 bg-3deg-cream-450 w-[12rem] rounded-lg border-0 mr-[1rem] md:mr-[2.2rem] lg:mr-[3rem] xl:mr-[8.8rem]">
				<DropdownMenuGroup className="space-y-1">
					{mainMenuLinks.map((item, i) => (
						<DropdownMenuItem
							className="focus:bg-3deg-cream-350 rounded-lg text-3deg-choco-250 text-sm font-medium"
							key={`${item.href}-${i}`}
							asChild
						>
							<Link href={item.href} className="pl-2">
								{item.label}
							</Link>
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>

				<DropdownMenuSeparator className="bg-3deg-cream-500 dark:bg-3deg-cream-500" />

				<DropdownMenuGroup className="space-y-1">
					{extraLinks.map((item, i) => (
						<DropdownMenuItem
							className="focus:bg-3deg-cream-350 rounded-lg text-3deg-choco-250 text-sm font-medium"
							key={`${item.href}-${i}`}
							asChild
						>
							<Link href={item.href} className="pl-2">
								{item.label}
							</Link>
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

const mainMenuLinks = [
	{ label: "My network", href: "/network" },
	{ label: "Member Resources", href: "/member-resources" },
	{ label: "Favorite places", href: "/favorite-places" },
	{ label: "Messages", href: "#" },
	{ label: "Settings", href: "#" },
];

const extraLinks = [
	{ label: "Profile", href: "/profile" },
	{ label: "Help", href: "#" },
	{ label: "Exit", href: "#" },
];
