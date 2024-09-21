import { parseWithZod } from "@conform-to/zod";

import { socialLinksSchema } from "./socials.schema";

export async function personalInfoAction(
	prevState: unknown,
	formData: FormData
) {
	const submission = parseWithZod(formData, {
		schema: socialLinksSchema,
	});

	if (submission.status !== "success") {
		return submission.reply();
	}

	return;
}
