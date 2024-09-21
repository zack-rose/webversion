"use client";

import { useFormState } from "react-dom";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";

import { Input } from "@/features/common/components/ui/input";
import { Button } from "@/features/common/components/ui/button";
import { FormProgress } from "../form-progress/FormProgress";
import { userInfoSchema } from "./user-info.schema";
import { userInfoFormAction } from "./user-info.action";
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

export const UserInfoForm = () => {
	const [lastResult, action] = useFormState(userInfoFormAction, undefined);

	const [form, fields] = useForm({
		lastResult,

		onValidate({ formData }) {
			return parseWithZod(formData, { schema: userInfoSchema });
		},

		shouldValidate: "onBlur",
		shouldRevalidate: "onInput",
	});

	return (
		<div>
			<FormProgress progressValue={50} />

			<form id={form.id} onSubmit={form.onSubmit} action={action}>
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
