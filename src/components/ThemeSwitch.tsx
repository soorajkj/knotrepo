"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { useIsClient } from "usehooks-ts";

export default function ThemeSwitch() {
  const { themes, setTheme } = useTheme();
  const mounted = useIsClient();

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6">
      <div className="flex items-center rounded-md">
        {themes.map((theme, i) => (
          <button
            key={i}
            onClick={() => setTheme(theme)}
            className="px-2 text-sm capitalize"
          >
            {theme}
          </button>
        ))}
      </div>
    </div>
  );
}
