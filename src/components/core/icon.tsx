"use client";

import { forwardRef, Fragment, SVGAttributes } from "react";
import * as VisuallyHiddenPrimitive from "@radix-ui/react-visually-hidden";
import Dark from "@/public/icons/dark.svg";
import Google from "@/public/icons/google.svg";
import Light from "@/public/icons/light.svg";
import LoaderCircle from "@/public/icons/loader-circle.svg";
import Menu from "@/public/icons/menu.svg";

export const icons = {
  dark: Dark,
  google: Google,
  light: Light,
  loaderCircle: LoaderCircle,
  menu: Menu,
};

interface IconProps extends SVGAttributes<SVGSVGElement> {
  icon: keyof typeof icons;
  label?: string;
}

const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { icon, width = 16, height = 16, label, ...rest } = props;

  const Comp = icons[icon];

  return (
    <Fragment>
      <Comp
        ref={ref}
        aria-hidden={true}
        focusable={false}
        width={width}
        height={height}
        {...rest}
      ></Comp>
      {label && (
        <VisuallyHiddenPrimitive.Root>{label}</VisuallyHiddenPrimitive.Root>
      )}
    </Fragment>
  );
});

Icon.displayName = "Icon";

export default Icon;
