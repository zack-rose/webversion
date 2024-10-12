import Image from "next/image";
import Link from "next/link";

export const MembershipBenefitCard = () => {
	return (
		<Link href="#">
			<div className="relative w-full h-[20rem] mb-2">
				<Image
					src="/images/listing-1.png"
					alt="membership benefit"
					fill
					className="object-cover rounded-lg"
				/>
			</div>
			<h3 className="text-3deg-black-300 font-medium">25% off Lick Paint</h3>
			<p className="text-3deg-black-300 text-sm">Home & Design</p>
		</Link>
	);
};
