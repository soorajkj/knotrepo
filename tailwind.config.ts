import { preset } from "./styles/untitled.preset";
import forms from "@tailwindcss/forms";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  presets: [preset],
  plugins: [animate, forms({ strategy: "class" })],
};

export default config;
