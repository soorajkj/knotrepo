import { Caprasimo, Plus_Jakarta_Sans } from "next/font/google";

export const manrope = Plus_Jakarta_Sans({
  variable: "--font-family-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
