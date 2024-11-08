import type { Config } from "tailwindcss";
import config from "@threedegrees/ui/tailwind-config";

export default {
	presets: [config],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				grifinito: ['"Grifinito L"', "sans-serif"],
			},
			fontSize: {
				"13px": ["0.8125rem", "0.983rem"],
				"50px": ["3.125rem", "3.5rem"],
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
