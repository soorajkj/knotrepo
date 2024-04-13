"use client";

import { useTheme } from "next-themes";
import useIsSSR from "@/hooks/use-is-ssr";
import Icon from "@/components/core/icon";
import ToggleGroup from "@/components/core/toggle-group";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const { isSSR } = useIsSSR();

  if (isSSR) return null;

  return (
    <div className="relative inline-flex w-auto">
      <ToggleGroup.ToggleGroupRoot
        type="single"
        onValueChange={(value) => setTheme(value)}
        value={theme}
        className="rounded-full border border-zinc-900 p-px"
      >
        <ToggleGroup.ToggleGroupItem
          value="light"
          className="h-7 w-7 rounded-full"
        >
          <Icon icon="light" height={14} width={14} fill="currentColor" />
          <span className="sr-only">Light</span>
        </ToggleGroup.ToggleGroupItem>
        <ToggleGroup.ToggleGroupItem
          value="dark"
          className="h-7 w-7 rounded-full"
        >
          <Icon icon="dark" height={14} width={14} fill="currentColor" />
          <span className="sr-only">Dark</span>
        </ToggleGroup.ToggleGroupItem>
      </ToggleGroup.ToggleGroupRoot>
    </div>
  );
}
