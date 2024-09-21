import { z } from "zod";

export const socialLinksSchema = z.object({
	instagram: z.string().optional(),
	website: z.string().optional(),
	linkedIn: z.string().optional(),
});
