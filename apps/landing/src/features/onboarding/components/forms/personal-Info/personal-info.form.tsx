"use client";

import { useRouter } from "next/navigation";
import { useForm } from "@conform-to/react";

import { Input } from "@/features/common/components/ui/input";
import { Button } from "@/features/common/components/ui/button";
import { FormProgress } from "../form-progress/FormProgress";
import { personalInfoSchema } from "./personal-info.schema";
import { RouteLinks } from "@/features/common/utils";
import { parseFormData } from "@/features/onboarding/components/forms/utils/parse-form-data";

export const PersonalInfoForm = () => {
	const router = useRouter();

	const [form, fields] = useForm({
		onValidate: ({ formData }) => {
			return parseFormData({ formData, schema: personalInfoSchema });
		},
		onSubmit: (e, context) => {
			e.preventDefault();

			const formData = parseFormData({
				formData: context.formData,
				schema: personalInfoSchema,
			});

			if (formData.status !== "success") {
				return formData.reply();
			}

			const formValues = formData.value;
			//do whatever you want with the formValues

			router.push(RouteLinks.welcome.info());
		},
		shouldValidate: "onBlur",
		shouldRevalidate: "onInput",
	});

	return (
		<div className="w-[85%] md:w-[22.125rem]">
			<FormProgress progressValue={25} />

			<form id={form.id} onSubmit={form.onSubmit}>
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
