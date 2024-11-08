"use client";
import { useState } from "react";
import { FaApple } from "react-icons/fa6";

import { cn } from "../common/utils";
import { Button } from "../common/components/ui/button";

interface SubscriptionOption {
	duration: string;
	amount: number;
	amountLabel: string;
	label: string;
	popular?: boolean;
}

const subscriptionOptions: SubscriptionOption[] = [
	{
		duration: "1 Month",
		amount: 29,
		amountLabel: "",
		label: `"Ideal for quick stays and immediate rentals."`,
	},
	{
		duration: "3 Months",
		amount: 49,
		amountLabel: " (£16.33/month)",
		label: `"Perfect for seasonal swappers”`,
		popular: true,
	},
	{
		duration: "12 Months",
		amount: 99,
		amountLabel: " (£8.25/month)",
		label: `"Optimal for long-term planners and frequent users."`,
	},
];

export const SubscriptionForm = () => {
	const [option, setOption] = useState<SubscriptionOption>(
		subscriptionOptions[0]
	);

	return (
		<form className="xl:px-8 md:max-w-[33.375rem] mx-auto pb-[4.8rem]">
			<div className="space-y-3 mb-10">
				{subscriptionOptions.map((subscription) => (
					<button
						className={cn("border rounded-xl w-full relative text-left", {
							"border-3deg-black-300":
								subscription.duration === option.duration,
							"border-3deg-choco-300":
								subscription.duration !== option.duration,
						})}
						key={subscription.duration}
						onClick={() => setOption(subscription)}
						type="button"
					>
						{subscription.popular && (
							<div className="text-white bg-3deg-orange-100 text-sm font-semibold px-2 py-1 w-fit ml-auto rounded-tr-xl rounded-bl-xl">
								Most Popular
							</div>
						)}

						<div className="p-6 space-y-2">
							<h3 className="text-3deg-black-300 text-xl font-semibold">
								{`${subscription.duration} - £${subscription.amount} ${subscription.amountLabel}`}
							</h3>
							<p className="text-3deg-black-300 text-sm">
								{subscription.label}
							</p>
						</div>
					</button>
				))}
			</div>

			<div className="space-y-3">
				<Button className="h-[3.1875rem] text-base">
					{`Subscribe for £${option.amount}`}{" "}
				</Button>

				<Button
					className="h-[3.1875rem] w-full text-[#344054] text-base gap-3"
					variant="secondary"
				>
					<FaApple className="size-6 text-black" /> Subscribe with Apple Pay
				</Button>
			</div>

			<div className="mt-4 flex flex-col items-center space-y-4">
				<button
					type="button"
					className="text-sm font-medium text-3deg-blue-100"
				>
					Continue with code
				</button>

				<p className="text-sm text-3deg-black-300 w-4/5 text-center">
					By proceeding with payment, you are agreeing to our{" "}
					<span className="underline">Terms & Conditions</span>
				</p>
			</div>
		</form>
	);
};
