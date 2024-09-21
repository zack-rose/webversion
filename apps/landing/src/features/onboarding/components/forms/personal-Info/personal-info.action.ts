"use server";
import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";

import { RouteLinks } from "@/features/common/utils";
import { personalInfoSchema } from "./personal-info.schema";

export async function personalInfoAction(
	prevState: unknown,
	formData: FormData
) {
	const submission = parseWithZod(formData, {
		schema: personalInfoSchema,
	});

	if (submission.status !== "success") {
		return submission.reply();
	}

	redirect(RouteLinks.welcome.info());
}
