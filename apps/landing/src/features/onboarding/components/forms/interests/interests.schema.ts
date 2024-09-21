import { z } from "zod";

export const interestsSchema = z.object({
	interests: z.array(z.string()),
});
