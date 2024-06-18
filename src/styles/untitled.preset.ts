import type { Config } from "tailwindcss";

export const preset = {
  content: [],
  theme: {
    fontFamily: {
      "family-manrope": ["var(--font-family-manrope)"],
      "family-calistoga": ["var(--font-family-calistoga)"],
    },
    extend: {},
  },
} satisfies Config;
