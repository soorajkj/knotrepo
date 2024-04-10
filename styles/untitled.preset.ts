import type { Config } from "tailwindcss";

export const preset = {
  content: [],
  theme: {
    fontFamily: {
      "family-sora": ["var(--font-family-sora)"],
      "family-calsans": ["var(--font-family-calsans)"],
    },
    extend: {},
  },
} satisfies Config;
