import * as React from "react";
import { Primitive } from "@radix-ui/react-primitive";
import { Slot } from "@radix-ui/react-slot";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "~utils/classnames";

const ControlGroupContext = React.createContext<
  Pick<ControlGroupProps, "orientation">
>({
  orientation: "horizontal",
});

function useControlGroupContext() {
  const context = React.useContext(ControlGroupContext);

  if (!context) {
    throw new Error("useControlGroup must be used within a <ControlGroup />");
  }

  return context;
}

interface ControlGroupProps
  extends React.ComponentPropsWithoutRef<typeof Primitive.div>,
    VariantProps<typeof ControlGroupRootStyles> {
  orientation?: "horizontal" | "vertical";
}

const ControlGroupRoot = React.forwardRef<
  React.ElementRef<typeof Primitive.div>,
  ControlGroupProps
>(({ className, orientation = "horizontal", ...props }, ref) => (
  <ControlGroupContext.Provider value={{ orientation }}>
    <Primitive.div
      ref={ref}
      data-orientation={orientation}
      className={cn(ControlGroupRootStyles({ orientation, className }))}
      {...props}
    />
  </ControlGroupContext.Provider>
));

ControlGroupRoot.displayName = "ControlGroupRoot";

const ControlGroupItem = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot> &
    VariantProps<typeof ControlGroupItemStyles>
>(({ className, children, ...props }, ref) => {
  const { orientation } = useControlGroupContext();

  return (
    <Slot
      ref={ref}
      className={cn(ControlGroupItemStyles({ orientation, className }))}
      {...props}
    >
      {children}
    </Slot>
  );
});

ControlGroupItem.displayName = "ControlGroupItem";

const ControlGroupRootStyles = tv({
  base: ["flex"],
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
  },
});

const ControlGroupItemStyles = tv({
  base: ["rounded-none focus-within:z-10"],
  variants: {
    orientation: {
      horizontal: ["first:rounded-s-md last:-me-0 last:rounded-e-md"],
      vertical: [
        "w-auto first:rounded-se-md first:rounded-ss-md last:rounded-ee-md last:rounded-es-md",
      ],
    },
  },
});

const ControlGroup = {
  useControlGroupContext,
  ControlGroupRoot,
  ControlGroupItem,
};

export default ControlGroup;
