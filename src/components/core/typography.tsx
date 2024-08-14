import { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

type TitleStyleProps = VariantProps<typeof TitleStyles>;

interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    Omit<TitleStyleProps, "level" | "weight"> {
  variant: `${NonNullable<TitleStyleProps["level"]>}/${NonNullable<
    TitleStyleProps["weight"]
  >}`;
}

const Title = forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  const { children, variant, className, ...rest } = props;

  const [level, weight] = variant.split("/") as [
    TitleStyleProps["level"],
    TitleStyleProps["weight"],
  ];

  const Comp: any = `h${level}`;

  return (
    <Comp
      ref={ref}
      className={cn(TitleStyles({ level, weight, className }))}
      {...rest}
    >
      {children}
    </Comp>
  );
});

type TextStyleProps = VariantProps<typeof TextStyles>;

interface TextProps
  extends React.ButtonHTMLAttributes<HTMLParagraphElement>,
    Omit<TextStyleProps, "size" | "weight"> {
  variant: `${NonNullable<TextStyleProps["size"]>}/${NonNullable<
    TextStyleProps["weight"]
  >}`;
}

const Text = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const { children, className, variant, ...rest } = props;

  const [size, weight] = variant.split("/") as [
    TextStyleProps["size"],
    TextStyleProps["weight"],
  ];

  return (
    <p
      ref={ref}
      className={cn(TextStyles({ size, weight, className }))}
      {...rest}
    >
      {children}
    </p>
  );
});

const Link = () => {
  return <p></p>;
};

const TitleStyles = cva(["font-family-manrope"], {
  variants: {
    level: {
      1: "text-7xl",
      2: "text-6xl",
      3: "text-5xl",
      4: "text-4xl",
      5: "text-3xl",
      6: "text-2xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
});

const TextStyles = cva(["font-family-manrope"], {
  variants: {
    size: {
      xl: "text-xl",
      lg: "text-lg",
      md: "text-base",
      sm: "text-sm",
      xs: "text-xs",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
});

Title.displayName = "Title";
Text.displayName = "Text";

const Typography = { Title, Text, Link };

export default Typography;
