import { MembershipBenefitCard } from "@/features/membership-benefits/membership-benefit.card";

const MembershipBenefits = () => {
	return (
		<main className="bg-3deg-cream-200 px-[5%] lg:px-[15%] xl:px-[25%] pb-[5%]">
			<h1 className="uppercase text-center text-3deg-choco-100 text-5xl py-8 font-grifinito">
				Membership Benefits
			</h1>

			<div className="grid md:grid-cols-2 gap-x-4 gap-y-8 max-w-full overflow-hidden">
				{Array.from({ length: 16 }).map((item, i) => (
					<MembershipBenefitCard key={i} />
				))}
			</div>
		</main>
	);
};

export default MembershipBenefits;
