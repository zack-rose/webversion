"use client";

import { useRouter } from "next/navigation";
import { useForm } from "@conform-to/react";

import { Button } from "@/features/common/components/ui/button";
import { FormProgress } from "../form-progress/FormProgress";
import { interestsSchema } from "./interests.schema";
import { Checkbox } from "@/features/common/components/ui/checkbox";

import { RouteLinks } from "@/features/common/utils";
import { parseFormData } from "@/features/onboarding/components/forms/utils/parse-form-data";
import { cn } from "@/features/common/utils";
import { Label } from "@/features/common/components/Label";

export const InterestsForm = () => {
	const router = useRouter();

	const [form, fields] = useForm({
		onValidate: ({ formData }) => {
			return parseFormData({ formData, schema: interestsSchema });
		},
		onSubmit: (e, context) => {
			e.preventDefault();

			const formData = parseFormData({
				formData: context.formData,
				schema: interestsSchema,
			});

			if (formData.status !== "success") {
				return formData.reply();
			}

			const formValues = formData.value;
			//do whatever you want with the formValues

			router.push(RouteLinks.welcome.socials());
		},
		shouldValidate: "onBlur",
		shouldRevalidate: "onInput",
	});

	return (
		<div className="w-[85%] md:w-[22.125rem]">
			<FormProgress progressValue={75} />

			<form id={form.id} onSubmit={form.onSubmit}>
				<div className="space-y-3 mb-7">
					{InterestOptions.map((interest) => (
						<div
							key={interest}
							className={cn(
								"flex justify-between items-center border border-3deg-greenish-100 rounded-2xl p-3 hover:cursor-pointer"
							)}
						>
							<Label
								htmlFor={interest}
								className="text-base hover:cursor-pointer"
							>
								{interest}
							</Label>
							<Checkbox
								className="border-3deg-black-150 data-[state=checked]:border-none"
								name={fields.interests.name}
								id={interest}
							/>
						</div>
					))}
				</div>

				<Button type="submit">Continue</Button>
			</form>
		</div>
	);
};

const InterestOptions = [
	"I have a home rent or swap",
	"I am looking for somewhere to rent",
	"I am interested in both",
	"I am just looking",
];
