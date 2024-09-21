import { Pill } from "@/features/common/components/Pill";
import { cn } from "@/features/common/utils";
import { HiOutlineHeart } from "react-icons/hi2";
import {
	MdOutlineAddBusiness,
	MdSwapCalls,
	MdAccountCircle,
} from "react-icons/md";

interface Props {
	variant?: "morning-blue" | "fawn" | "jasper";
}

export const FeedCard = ({ variant = "morning-blue" }: Props) => {
	return (
		<div
			className={cn("p-4 md:p-6 rounded-xl ", {
				"bg-3deg-morning-blue-100": variant === "morning-blue",
				"bg-3deg-fawn-100": variant === "fawn",
				"bg-3deg-jasper-100": variant === "jasper",
			})}
		>
			<div className="flex gap-4 items-center">
				<MdAccountCircle className="text-slate-500 size-16" />

				<div className="space-y-1">
					<h5 className="text-black">Jane West</h5>
					<div className="flex gap-2 items-center">
						<Pill className="font-light text-xs text-3deg-black-300">
							City expert
						</Pill>
						<Pill className="font-light text-xs text-3deg-black-300">
							Foody
						</Pill>
					</div>
				</div>
			</div>

			<h4 className="text-black font-medium text-xl">
				Looking for a swap, London for Miami this summer.
			</h4>

			<div className="flex justify-between items-center mt-[15%]">
				<div className="flex gap-2">
					<Pill>
						<MdOutlineAddBusiness className="text-3deg-black-300 text-xl" />
						<p className="text-3deg-black-300 text-sm">Rent</p>
					</Pill>

					<Pill>
						<MdSwapCalls className="text-3deg-black-300 text-xl" />
						<p className="text-3deg-black-300 text-sm">Rent</p>
					</Pill>
				</div>

				<div className="rounded-full border border-black p-1">
					<HiOutlineHeart className="text-black size-5" />
				</div>
			</div>
		</div>
	);
};
