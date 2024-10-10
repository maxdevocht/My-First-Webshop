import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        default:
          "bg-peach-500 text-peach-50 hover:bg-peach-900/90 dark:bg-peach-50 dark:text-peach-900 dark:hover:bg-peach-50/90",
        destructive:
          "bg-red-500 text-peach-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-peach-50 dark:hover:bg-red-900/90",
        outline:
          "border border-peach-200 bg-white hover:bg-peach-100 hover:text-peach-900 dark:border-peach-800 dark:bg-peach-950 dark:hover:bg-peach-800 dark:hover:text-peach-50",
        secondary:
          "bg-peach-100 text-peach-900 hover:bg-peach-100/80 dark:bg-peach-800 dark:text-peach-50 dark:hover:bg-peach-800/80",
        ghost:
          "hover:bg-peach-100 hover:text-peach-900 dark:hover:bg-peach-800 dark:hover:text-peach-50",
        link: "text-peach-900 underline-offset-4 hover:underline dark:text-peach-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
