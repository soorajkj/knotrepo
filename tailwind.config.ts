import forms from "@tailwindcss/forms";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

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
  },
  plugins: [animate, forms({ strategy: "class" })],
};

export default config;
