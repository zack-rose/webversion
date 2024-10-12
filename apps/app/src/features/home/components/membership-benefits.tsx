import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

import { OutlineButton } from "@/features/common/components/outline-button";
import { MembershipBenefitCard } from "@/features/membership-benefits/membership-benefit.card";

export const MembershipBenefitSection = () => {
	return (
		<section className="content-spacing pb-[5%]">
			<div className="flex justify-between items-center mb-6 flex-wrap">
				<h3 className="text-base xxsm:text-xl xsm:text-2xl md:text-3xl lg:text-4xl text-3deg-choco-100 uppercase">
					Membership benefits
				</h3>

				<OutlineButton
					variant="tertiary"
					className="border-3deg-choco-300 text-3deg-choco-100 px-3 py-[0.3rem]"
				>
					<Link href="/membership-benefits" className="flex items-center gap-2">
						See all <HiArrowRight />
					</Link>
				</OutlineButton>
			</div>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 max-w-full overflow-hidden">
				{Array.from({ length: 3 }).map((item, i) => (
					<MembershipBenefitCard key={i} />
				))}
			</div>
		</section>
	);
};
