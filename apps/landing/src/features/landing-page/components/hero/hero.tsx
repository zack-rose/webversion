import Image from "next/image";
import Link from "next/link";

import { OutlineButton } from "@/features/common/components/outline-button";

export const Hero = () => {
	return (
		<section
			className="bg-cover bg-center bg-no-repeat h-svh w-full flex flex-col items-center"
			style={{
				backgroundImage: "url('/images/hero.png')",
			}}
		>
			<div className="flex flex-wrap gap-3 items-center justify-center pt-8">
				<OutlineButton variant="tertiary" asChild>
					<Link href="#how-it-works">How it Works</Link>
				</OutlineButton>
				<OutlineButton variant="tertiary" asChild>
					<Link href="#about">About</Link>
				</OutlineButton>
				<OutlineButton variant="tertiary" asChild>
					<Link href="/welcome">Apply now</Link>
				</OutlineButton>
			</div>

			<div className="flex flex-col place-items-center mt-auto mb-auto">
				<div className="relative w-[15rem] xxsm:w-[20rem] md:w-[33rem] h-[5rem] md:h-[6.4rem]">
					<Image src="/images/brand-logo.png" alt="" fill />
				</div>

				<p className="text-white text-center pt-5 pb-8 font-medium">
					A members network of beautiful homes to rent and swap
				</p>

				<OutlineButton variant="primary">
					<Link href="/welcome">Apply now</Link>
				</OutlineButton>
			</div>
		</section>
	);
};
