import * as React from "react";
import * as VisuallyHiddenPrimitive from "@radix-ui/react-visually-hidden";
import { icons as lucideIcons, LucideProps } from "lucide-react";
import CIGithub from "@/public/icons/github.svg";
import CIGoogle from "@/public/icons/google.svg";
import CITwitter from "@/public/icons/twitter.svg";

export const icons = {
  ...lucideIcons,
  CIGithub,
  CIGoogle,
  CITwitter,
};

export type IconTypes = keyof typeof icons;

interface IconProps extends Omit<LucideProps, "ref"> {
  icon: IconTypes;
  label?: string;
}

export default function Icon(props: IconProps) {
  const { icon, label, ...rest } = props;
  const LucideIcon = icons[icon];

  return (
    <React.Fragment>
      <LucideIcon aria-hidden={true} focusable={false} {...rest} />
      {label && (
        <VisuallyHiddenPrimitive.Root>{label}</VisuallyHiddenPrimitive.Root>
      )}
    </React.Fragment>
  );
}
