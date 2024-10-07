"use client";

import React from "react";
import { useTheme } from "next-themes";
import { useIsClient } from "usehooks-ts";
import Dark from "@/public/images/dark.svg";
import Light from "@/public/images/light.svg";
import System from "@/public/images/system.svg";
import RadioGroup from "@/components/core/radio-group";
import Panel from "@/components/dashboard/Panel";

const elements: any[any] = {
  light: Light,
  dark: Dark,
  system: System,
};

export default function ThemeSettings() {
  const mounted = useIsClient();
  const { theme, themes, setTheme } = useTheme();

  if (!mounted) return null;

  return (
    <Panel.PanelRoot>
      <Panel.PanelHeader>
        <Panel.PanelTitle>Appearance</Panel.PanelTitle>
      </Panel.PanelHeader>
      <Panel.PanelContent>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <p className="max-w-sm text-sm text-foreground-light">
              Choose how Supabase looks to you. Select a single theme, or sync
              with your system.
            </p>
          </div>
          <div className="col-span-12 space-y-3 md:col-span-8">
            <RadioGroup.RadioGroupRoot
              defaultValue={theme}
              value={theme}
              onValueChange={setTheme}
              aria-label="change apperance"
              className="grid-cols-12"
            >
              {themes.map((theme, i) => {
                const Element = elements[theme];
                return (
                  <RadioGroup.RadioGroupItemMod
                    key={i}
                    id={theme}
                    value={theme}
                    aria-label={theme}
                    label={theme.charAt(0).toUpperCase() + theme.slice(1)}
                    className="col-span-4 md:col-span-3 [&_svg]:w-full"
                  >
                    <Element />
                  </RadioGroup.RadioGroupItemMod>
                );
              })}
            </RadioGroup.RadioGroupRoot>
          </div>
        </div>
      </Panel.PanelContent>
    </Panel.PanelRoot>
  );
}
