import { Config } from "tailwindcss";

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
			fontFamily: {
				grifinito: ['"Grifinito L"', "sans-serif"],
			},
		},
	},
} satisfies Config;
