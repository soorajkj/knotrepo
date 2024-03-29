"use client";

import { useTheme } from "next-themes";
import useIsSSR from "@/hooks/use-is-ssr";
import Icon, { icons } from "@/components/core/icon";
import ToggleGroup from "@/components/core/toggle-group";

type ThemeIcon = Pick<typeof icons, "light" | "dark" | "system">;

export default function ThemeToggler() {
  const { themes, theme, setTheme } = useTheme();
  const { isSSR } = useIsSSR();

  if (isSSR) return null;

  return (
    <div className="fixed bottom-4 right-4">
      <ToggleGroup.ToggleGroupRoot
        type="single"
        onValueChange={(value) => setTheme(value)}
        value={theme}
      >
        {themes.map((theme, i) => {
          return (
            <ToggleGroup.ToggleGroupItem
              key={i}
              aria-label={theme}
              value={theme}
              className="rounded-full"
            >
              <Icon icon={theme as keyof ThemeIcon} height={16} width={16} />
            </ToggleGroup.ToggleGroupItem>
          );
        })}
      </ToggleGroup.ToggleGroupRoot>
    </div>
  );
}
