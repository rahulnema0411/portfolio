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
      },
      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
        recoleta: "var(--font-recoleta)",
        recoletaAlt: "var(--font-recoletaAlt)",
        prompt: "var(--font-prompt)",
      },
    },
  },
  plugins: [],
};
export default config;
