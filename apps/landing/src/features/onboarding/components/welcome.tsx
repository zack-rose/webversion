/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/features/common/components/ui/button";
import { RouteLinks } from "@/features/common/utils";
import { useRouter } from "next/navigation";

export const Welcome = () => {
	const router = useRouter();

	const onClickContinue = () =>
		router.push(RouteLinks.welcome["personal-info"]());

	return (
		<div>
			<h2 className="text-center text-3deg-black-300 text-4xl md:text-5xl xl:text-6xl uppercase mb-5 font-grifinito">
				Welcome to the future of living
			</h2>

			<div className="space-y-3 mb-8">
				<p className="text-3deg-black-300">
					Three Degrees connects you with friends and friends-of-friends to help
					you find exceptional homes. We think everyone should be able to rent
					from a network they can trust, without sacrificing on style. Which is
					why we vet everyone who applies to our community, so you don't have
					to. It's renting, just done better.
				</p>

				<p className="text-3deg-black-300">
					Access is by application, invitation and referral only. So, whether
					you are looking for a home, have a home or room to rent, or just
					curious to take a look in to our world, apply today. Renters & owners
					welcome.
				</p>

				<p className="text-3deg-black-300">* All fields are required</p>
			</div>

			<Button onClick={onClickContinue}>Continue</Button>
		</div>
	);
};
