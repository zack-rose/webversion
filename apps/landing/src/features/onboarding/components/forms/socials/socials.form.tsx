"use client";

import { useFormState } from "react-dom";
import { useForm } from "@conform-to/react";

import { Input } from "@/features/common/components/ui/input";
import { Button } from "@/features/common/components/ui/button";
import { FormProgress } from "../form-progress/FormProgress";
import { socialLinksSchema } from "./socials.schema";
import { personalInfoAction } from "./socials.action";
import { parseFormData } from "@/features/onboarding/components/forms/utils/parse-form-data";

export const SocialMediaInfoForm = () => {
	const [lastResult, action] = useFormState(personalInfoAction, undefined);

	const [form, fields] = useForm({
		lastResult,
		onValidate: ({ formData }) => {
			return parseFormData({ formData, schema: socialLinksSchema });
		},
		shouldValidate: "onBlur",
		shouldRevalidate: "onInput",
	});

	return (
		<div>
			<FormProgress progressValue={100} />

			<form id={form.id} onSubmit={form.onSubmit} action={action}>
				<Input
					label="Instagram"
					placeholder="@username"
					className="bg-3deg-choco-150 h-12"
					type="tel"
					name={fields.instagram.name}
					errorMessage={fields.instagram.errors}
				/>

				<Input
					label="Website"
					placeholder="https://"
					className="bg-3deg-choco-150 h-12"
					name={fields.website.name}
					errorMessage={fields.website.errors}
				/>

				<Input
					label="LinkedIn"
					placeholder="@username"
					className="bg-3deg-choco-150 h-12"
					name={fields.linkedIn.name}
					errorMessage={fields.linkedIn.errors}
				/>

				<Button type="submit">Submit application</Button>
			</form>
		</div>
	);
};
