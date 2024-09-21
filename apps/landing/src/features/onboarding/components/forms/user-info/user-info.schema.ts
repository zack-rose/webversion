import { z } from "zod";

export const userInfoSchema = z.object({
	city: z.string({ message: "City is required" }),
	email: z
		.string({ message: "Email address is required" })
		.email("Email address is required"),
	jobTitle: z.string({ message: "Job title is required" }),
	company: z.string({ message: "Company is required" }),
	referralCode: z.string().optional(),
});
