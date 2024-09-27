import { ZodSchema } from "zod";
import { parseWithZod } from "@conform-to/zod";

interface ParseFormDataProps<T> {
	formData: FormData;
	schema: ZodSchema<T>;
}

export function parseFormData<T>({ formData, schema }: ParseFormDataProps<T>) {
	return parseWithZod(formData, { schema });
}
