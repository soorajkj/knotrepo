import typography from "@tailwindcss/typography";
import scrollbar from "tailwind-scrollbar";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import aria from "tailwindcss-aria-attributes";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: { extend: {} },
  safelist: [],
  plugins: [aria, animate, typography, scrollbar],
} satisfies Config;
