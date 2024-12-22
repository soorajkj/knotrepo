import * as React from "react";
import tailwindConfig from "../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

// export type ThemeKey = keyof (typeof tailwindConfig)["theme"];

export default function useTailwind() {
  const config = React.useMemo(() => {
    return resolveConfig(tailwindConfig);
  }, []);

  return config.theme;
}
