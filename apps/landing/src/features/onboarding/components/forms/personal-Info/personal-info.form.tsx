"use client";

import { useFormState } from "react-dom";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";

import { Input } from "@/features/common/components/ui/input";
import { Button } from "@/features/common/components/ui/button";
import { FormProgress } from "../form-progress/FormProgress";
import { personalInfoSchema } from "./personal-info.schema";
import { personalInfoAction } from "./personal-info.action";

export const PersonalInfoForm = () => {
	const [lastResult, action] = useFormState(personalInfoAction, undefined);

	const [form, fields] = useForm({
		// Sync the result of last submission
		lastResult,

		// Reuse the validation logic on the client
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: personalInfoSchema });
		},

		shouldValidate: "onBlur",
		shouldRevalidate: "onInput",
	});

	return (
		<div>
			<FormProgress progressValue={25} />

			<form id={form.id} onSubmit={form.onSubmit} action={action}>
				<Input
					label="Phone number"
					placeholder="+1 (555) 000-0000"
					className="bg-3deg-choco-150 h-12"
					type="tel"
					name={fields.phoneNumber.name}
					errorMessage={fields.phoneNumber.errors}
				/>

				<Input
					label="First Name"
					placeholder="Name"
					className="bg-3deg-choco-150 h-12"
					name={fields.firstName.name}
					errorMessage={fields.firstName.errors}
				/>

				<Input
					label="Last Name"
					placeholder="Surname"
					className="bg-3deg-choco-150 h-12"
					name={fields.lastName.name}
					errorMessage={fields.lastName.errors}
				/>

				<Button type="submit">Continue</Button>
			</form>
		</div>
	);
};
