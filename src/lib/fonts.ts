import { Bricolage_Grotesque, Nuosu_SIL } from "next/font/google";

// Bricolage_Grotesque
export const manrope = Bricolage_Grotesque({
  variable: "--font-family-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  style: ["normal"],
  adjustFontFallback: false,
});

// Nuosu_SIL
export const suezone = Nuosu_SIL({
  variable: "--font-family-suezone",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
  style: ["normal"],
  adjustFontFallback: false,
});
