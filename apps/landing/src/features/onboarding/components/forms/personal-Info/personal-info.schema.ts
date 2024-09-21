import { z } from "zod";

export const personalInfoSchema = z.object({
	phoneNumber: z.string({ message: "Phone number is required" }),
	firstName: z.string({ message: "First name is required" }),
	lastName: z.string({ message: "Last name is required" }),
});
