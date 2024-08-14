import type { Config } from "tailwindcss";

export const preset = {
  content: [],
  theme: {
    fontFamily: {
      "family-manrope": ["var(--font-family-manrope)"],
      "family-suezone": ["var(--font-family-suezone)"],
    },
    extend: {},
  },
} satisfies Config;
