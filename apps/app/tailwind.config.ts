import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
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
			colors: {
				"3deg": {
					black: {
						"100": "#2A2F27",
						"150": "#040404",
						"200": "#50524F",
						"300": "#322914",
					},
					greenish: {
						"100": "#B4B5A2",
						"200": "#515550",
					},
					cream: {
						"100": "#CFC3B3",
						"150": "#ADAAA1",
						"200": "#D6D1C5",
						"250": "#6F6C65",
						"300": "#E1DCD3",
						"350": "#DAD1BF",
						"400": "#FFFAEF",
					},
					choco: {
						"100": "#463B23",
						"150": "#CAC5BB",
						"200": "#4F4734",
						"300": "#B0AA9D",
						"400": "#A1907A",
						"500": "#EBE7DE",
					},
					orange: {
						"100": "#D8704A",
					},
					gray: {
						"100": "#E5E5E5",
					},
					"morning-blue": {
						"100": "#92A389",
					},
					jasper: {
						"100": "#D8704A",
					},
					fawn: {
						"100": "#E3B76E",
					},
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
