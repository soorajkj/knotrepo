import { Caprasimo, Manrope } from "next/font/google";

export const manrope = Manrope({
  variable: "--font-family-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  style: ["normal"],
  adjustFontFallback: false,
});

export const suezone = Caprasimo({
  variable: "--font-family-suezone",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
  style: ["normal"],
  adjustFontFallback: false,
});
