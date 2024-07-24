import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ["fem-cream"]: "var(--color-name-cream)",
        ["fem-deep-aquamarine"]: "var(--color-name-deep-aquamarine)",
        ["fem-deep-aquamarine-hover"]:
          "var(--color-name-deep-aquamarine-hover)",
        ["fem-gunmetal"]: "var(--color-name-gunmetal)",
        ["fem-aurometal-saurus"]: "var(--color-name-aurometal-saurus)",
      },
    },
  },
  plugins: [],
}
export default config
