import tailwindConfig from "../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

export function generateSafelist() {
  const fullConfig = resolveConfig(tailwindConfig);
  const spacing = fullConfig.theme.spacing;

  return Object.keys(spacing).map((key) => `gap-${key}`);
}
