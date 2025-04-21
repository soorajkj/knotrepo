import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import aria from "tailwindcss-aria-attributes";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    fontFamily: {
      inter: ["var(--font-family-inter)"],
      fraunces: ["var(--font-family-fraunces)"],
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  safelist: [],
  plugins: [
    aria,
    animate,
    typography,
    plugin(({ addVariant }) => {
      const addHasVariant = (name: string, selector: string) => {
        addVariant(`has-${name}`, `&:has(${selector})`);
        addVariant(`peer-has-${name}`, `:merge(.peer) ~ &:has(${selector})`);
        addVariant(`group-has-${name}`, `&:has(:merge(.group) ${selector})`);
      };

      const booleanStates = [
        "checked",
        "disabled",
        "expanded",
        "invalid",
        "readonly",
        "required",
        "selected",
      ];

      booleanStates.forEach((state) => {
        addHasVariant(state, `[${state}]`);
        addHasVariant(`aria-${state}`, `[aria-${state}="true"]`);
      });

      const enumerables = {
        "aria-current": ["page", "step", "location", "date", "time"],
        "aria-sort": ["ascending", "descending", "none", "other"],
        "aria-orientation": ["horizontal", "vertical"],
      };

      Object.entries(enumerables).forEach(([attribute, values]) => {
        values.forEach((value) => {
          addHasVariant(`${attribute}-${value}`, `[${attribute}="${value}"]`);
        });
      });
    }),
  ],
} satisfies Config;
