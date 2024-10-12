import {
  __require
} from "./chunk-3RG5ZIWI.js";

// tailwind.config.ts
var tailwind_config_default = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      screens: {
        xxsm: "375px",
        xsm: "425px"
      },
      fontSize: {
        "13px": ["0.8125rem", "0.983rem"]
      },
      colors: {
        "3deg": {
          black: {
            "100": "#2A2F27",
            "150": "#040404",
            "200": "#50524F",
            "300": "#322914"
          },
          white: {
            "100": "#F4F1EE",
            "200": "#EFECE4"
          },
          greenish: {
            "100": "#B4B5A2",
            "200": "#515550",
            "300": "#41463F"
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
            "500": "#B3AEA4"
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
            "650": "#443D2D"
          },
          orange: {
            "100": "#D8704A",
            "200": "#AE6634"
          },
          gray: {
            "100": "#E5E5E5",
            "150": "#BCB7AB"
          },
          "morning-blue": {
            "100": "#92A389"
          },
          jasper: {
            "100": "#D8704A"
          },
          fawn: {
            "100": "#E3B76E"
          },
          blue: {
            "100": "#1D3646",
            "200": "#2D3239"
          },
          brown: {
            "100": "#AE6634"
          }
        }
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [__require("tailwindcss-animate")]
};
export {
  tailwind_config_default as default
};
