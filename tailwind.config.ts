import { preset } from "./src/styles/untitled.preset";
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
  presets: [preset],
  plugins: [animate, forms({ strategy: "class" })],
};

export default config;
