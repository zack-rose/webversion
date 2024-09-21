import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";

import { RouteLinks } from "@/features/common/utils";
import { interestsSchema } from "./interests.schema";

export async function interestAction(prevState: unknown, formData: FormData) {
	const submission = parseWithZod(formData, {
		schema: interestsSchema,
	});

	if (submission.status !== "success") {
		return submission.reply();
	}

	redirect(RouteLinks.welcome.socials());
}
