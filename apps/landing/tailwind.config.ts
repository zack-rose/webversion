import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			screens: {
				xxsm: "375px",
				xsm: "425px",
			},
			colors: {
				"3deg": {
					"black-100": "#2A2F27",
					"black-200": "#50524F",
					"black-300": "#322914",
					"greenish-100": "#B4B5A2",
					"greenish-200": "#515550",
					"cream-100": "#CFC3B3",
					"cream-200": "#D6D1C5",
					"choco-100": "#463B23",
					"choco-200": "#4F4734",
					"choco-300": "#B0AA9D",
					"choco-400": "#A1907A",
				},
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
