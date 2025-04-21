import { Geist } from "next/font/google";

export const inter = Geist({
  variable: "--font-family-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
  style: ["normal"],
  adjustFontFallback: false,
});
