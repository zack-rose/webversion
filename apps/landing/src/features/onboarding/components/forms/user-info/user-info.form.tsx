"use client";

import { useRouter } from "next/navigation";
import { useForm } from "@conform-to/react";

import { Input } from "@/features/common/components/ui/input";
import { Button } from "@/features/common/components/ui/button";
import { FormProgress } from "../form-progress/FormProgress";
import { userInfoSchema } from "./user-info.schema";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/features/common/components/ui/select";
import { ErrorMessage } from "@/features/common/components/ErrorMessage";
import { Label } from "@/features/common/components/Label";
import { RouteLinks } from "@/features/common/utils";
import { parseFormData } from "@/features/onboarding/components/forms/utils/parse-form-data";

export const UserInfoForm = () => {
	const router = useRouter();

	const [form, fields] = useForm({
		onValidate: ({ formData }) => {
			return parseFormData({ formData, schema: userInfoSchema });
		},
		onSubmit: (e, context) => {
			e.preventDefault();

			const formData = parseFormData({
				formData: context.formData,
				schema: userInfoSchema,
			});

			if (formData.status !== "success") {
				return formData.reply();
			}

			const formValues = formData.value;
			//do whatever you want with the formValues

			router.push(RouteLinks.welcome.interests());
		},

		shouldValidate: "onBlur",
		shouldRevalidate: "onInput",
	});

	return (
		<div className="w-[85%] md:w-[22.125rem]">
			<FormProgress progressValue={50} />

			<form id={form.id} onSubmit={form.onSubmit}>
				<Select name={fields.city.name}>
					<Label>I live in</Label>
					<SelectTrigger className="bg-3deg-choco-150 h-12 mt-1">
						<SelectValue placeholder="City" />
					</SelectTrigger>
					<SelectContent className="bg-3deg-cream-300 border-3deg-cream-150">
						<SelectGroup>
							<SelectLabel>City</SelectLabel>
							<SelectItem value="Manchester">Manchester</SelectItem>
							<SelectItem value="Everton">Everton</SelectItem>
							<SelectItem value="Liverpool">Liverpool</SelectItem>
						</SelectGroup>
					</SelectContent>

					<ErrorMessage errorMessage={fields.city.errors} />
				</Select>

				<Input
					label="Email Address"
					placeholder="Example@gmail.com"
					className="bg-3deg-choco-150 h-12"
					name={fields.email.name}
					errorMessage={fields.email.errors}
				/>

				<Input
					label="Job Title"
					placeholder="Designer"
					className="bg-3deg-choco-150 h-12"
					name={fields.jobTitle.name}
					errorMessage={fields.jobTitle.errors}
				/>

				<Input
					label="Company"
					placeholder="Google"
					className="bg-3deg-choco-150 h-12"
					name={fields.company.name}
					errorMessage={fields.company.errors}
				/>

				<Input
					label="Referral Code (Optional)"
					placeholder="Code"
					className="bg-3deg-choco-150 h-12"
					name={fields.referralCode.name}
					errorMessage={fields.referralCode.errors}
				/>

				<Button type="submit">Continue</Button>
			</form>
		</div>
	);
};
