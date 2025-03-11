import { Calistoga, Inter } from "next/font/google";

export const manrope = Inter({
  variable: "--font-family-manrope",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
  style: ["normal"],
  adjustFontFallback: false,
});

export const schoolbell = Calistoga({
  variable: "--font-family-schoolbell",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
  style: ["normal"],
  adjustFontFallback: false,
});
