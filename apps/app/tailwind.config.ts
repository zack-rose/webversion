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
			screens: {
				xxsm: "375px",
				xsm: "425px",
			},
			colors: {
				"3deg": {
					black: {
						"100": "#2A2F27",
						"150": "#040404",
						"200": "#50524F",
						"300": "#322914",
					},
					white: {
						"100": "#F4F1EE",
						"200": "#EFECE4",
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
						"450": "#EAE7DF",
						"500": "#B3AEA4",
					},
					choco: {
						"100": "#463B23",
						"150": "#CAC5BB",
						"200": "#4F4734",
						"250": "#241F15",
						"300": "#B0AA9D",
						"350": "#B5AFA1",
						"400": "#A1907A",
						"450": "#615A4B",
						"500": "#EBE7DE",
						"550": "#6D685B",
						"600": "#5D5A54",
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
					blue: {
						"100": "#1D3646",
					},
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
