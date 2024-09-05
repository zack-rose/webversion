import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatToPounds = (value: string | number) => {
	const numValue = typeof value === "string" ? parseFloat(value) : value;

	if (isNaN(numValue)) {
		return "Invalid input";
	}

	const formattedValue = numValue.toLocaleString("en-GB", {
		style: "currency",
		currency: "GBP",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

	return formattedValue;
};
