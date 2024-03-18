import { forwardRef, Fragment, SVGAttributes } from "react";
import * as VisuallyHiddenPrimitive from "@radix-ui/react-visually-hidden";
import Dark from "@/public/icons/dark.svg";
import Email from "@/public/icons/email.svg";
import Github from "@/public/icons/github.svg";
import Google from "@/public/icons/google.svg";
import Instagram from "@/public/icons/instagram.svg";
import Light from "@/public/icons/light.svg";
import Sparkles from "@/public/icons/sparkles.svg";
import System from "@/public/icons/system.svg";
import Trash from "@/public/icons/trash.svg";
import Verified from "@/public/icons/verified.svg";
import Linkgram from "@/public/images/linkgram.svg";

export const icons = {
  dark: Dark,
  email: Email,
  github: Github,
  google: Google,
  instagram: Instagram,
  sparkles: Sparkles,
  light: Light,
  system: System,
  trasn: Trash,
  verified: Verified,
  linkgram: Linkgram,
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
      />
      {label && (
        <VisuallyHiddenPrimitive.Root>{label}</VisuallyHiddenPrimitive.Root>
      )}
    </Fragment>
  );
});

Icon.displayName = "Icon";

export default Icon;
