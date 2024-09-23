import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'tealblue': '#3E8BC2',
        'lightblue': "#6BE4FF",
        'materialyellow': "#FFD059",
        'materialgreen': "#255C3B",
        'materialgreenlighter': "#378054",
        'materialgrey': "#E6E6E6",
        'black900': "#171717",
        'materialblue': "#CFEAFC",
        'materialsubtitlegrey': "#737373",
        'githubblue': "#030708",
      },
      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
        montserrat: "var(--font-montserrat)",
        calistoga: "var(--font-calistoga)",
      },
    },
  },
  plugins: [],
};
export default config;
