import { Manrope, Suez_One } from "next/font/google";

export const manrope = Manrope({
  variable: "--font-family-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  style: ["normal"],
  adjustFontFallback: true,
});

export const suezone = Suez_One({
  variable: "--font-family-suezone",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
  style: ["normal"],
  adjustFontFallback: true,
});
