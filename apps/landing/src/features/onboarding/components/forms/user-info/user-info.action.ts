import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";

import { RouteLinks } from "@/features/common/utils";
import { userInfoSchema } from "./user-info.schema";

export async function userInfoFormAction(
	prevState: unknown,
	formData: FormData
) {
	const submission = parseWithZod(formData, {
		schema: userInfoSchema,
	});

	if (submission.status !== "success") {
		return submission.reply();
	}

	redirect(RouteLinks.welcome.interests());
}
