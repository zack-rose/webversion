import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

import { cn } from "../../utils";

interface NavlinkProps {
	Icon: IconType;
	label: string;
	href: string;
}

export const MobileNavlink = ({ Icon, label, href }: NavlinkProps) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={cn({
				"text-3deg-orange-100": isActive,
				"text-white": !isActive,
			})}
		>
			<Icon className="size-6 mx-auto mb-1" />
			<p className="text-xs capitalize font-light">{label}</p>
		</Link>
	);
};
