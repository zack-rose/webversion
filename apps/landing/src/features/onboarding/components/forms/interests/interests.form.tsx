"use client";

import { useFormState } from "react-dom";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";

import { Button } from "@/features/common/components/ui/button";
import { FormProgress } from "../form-progress/FormProgress";
import { interestsSchema } from "./interests.schema";
import { interestAction } from "./interests.action";
import { Checkbox } from "@/features/common/components/ui/checkbox";
import { cn } from "@/features/common/utils";

export const InterestsForm = () => {
	const [lastResult, action] = useFormState(interestAction, undefined);

	const [form, fields] = useForm({
		lastResult,

		onValidate({ formData }) {
			return parseWithZod(formData, { schema: interestsSchema });
		},

		shouldValidate: "onBlur",
		shouldRevalidate: "onInput",
	});

	return (
		<div>
			<FormProgress progressValue={75} />

			<form id={form.id} onSubmit={form.onSubmit} action={action}>
				<div className="space-y-3 mb-7">
					{InterestOptions.map((interest) => (
						<div
							key={interest}
							className={cn(
								"flex justify-between items-center border border-3deg-greenish-100 rounded-2xl p-3 hover:cursor-pointer"
							)}
						>
							{interest}
							<Checkbox
								className="border-3deg-black-150 data-[state=checked]:border-none"
								name={fields.interests.name}
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
