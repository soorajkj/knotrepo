import { Bricolage_Grotesque } from "next/font/google";

export const manrope = Bricolage_Grotesque({
  variable: "--font-family-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  style: ["normal"],
  adjustFontFallback: false,
});
