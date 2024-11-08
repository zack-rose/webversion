import Image from "next/image";
import Link from "next/link";

import { Avatar } from "@/features/common/components/avatar";
import { SubscriptionForm } from "@/features/subscription/subscription-form";

const SubscriptionPage = () => {
	return (
		<div className="content-spacing bg-3deg-cream-200 pt-[2.625rem]">
			<Link href="/">
				<div className="mx-auto relative w-[8.75rem] h-[1.625rem]">
					<Image src="/images/brand-logo-secondary.svg" alt="" fill />
				</div>
			</Link>

			<div className="place-items-center pt-12 mb-5">
				<Avatar
					src="/images/avatar.jpeg"
					className="size-20"
					alt="user avatar"
				/>
				<h5 className="text-3deg-black-100 font-bold text-xl pt-3 pb-5">
					Kyle Silva
				</h5>

				<h6 className="text-3deg-black-100 font-semibold">Subscription</h6>
			</div>

			<SubscriptionForm />
		</div>
	);
};

export default SubscriptionPage;
