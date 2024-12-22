import { wedgesTW } from "@lemonsqueezy/wedges";
import typography from "@tailwindcss/typography";
import scrollbar from "tailwind-scrollbar";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import aria from "tailwindcss-aria-attributes";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    fontFamily: {
      "family-manrope": ["var(--font-family-manrope)"],
      "family-suezone": ["var(--font-family-suezone)"],
    },
    extend: {},
  },
  plugins: [
    animate,
    scrollbar({ nocompatible: true, preferredStrategy: "pseudoelements" }),
    typography(),
    aria,
    wedgesTW({}),
  ],
};

export default config;
