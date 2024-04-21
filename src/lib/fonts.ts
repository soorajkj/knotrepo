import { Manrope } from "next/font/google";

export const manrope = Manrope({
  variable: "--font-family-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  style: ["normal"],
  adjustFontFallback: true,
});
