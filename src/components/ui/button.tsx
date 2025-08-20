"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import React, { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { mergeRefs } from "@/utils/merge-refs";

const buttonStyles = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-medium",
  {
    variants: {
      variant: {
        primary:
          "bg-[--color-primary] text-black hover:bg-[--color-primary-hover]",
        secondary:
          "bg-[--color-secondary] text-[--color-foreground] hover:bg-opacity-90",
        outline:
          "border border-[--color-border] text-[--color-foreground] hover:bg-[--color-highlight]/50",
        ghost: "text-[--color-foreground] hover:bg-[--color-highlight]",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface BaseProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  children: ReactNode;
  asChild?: boolean;
  isLoading?: boolean;
}


const Button = forwardRef<HTMLButtonElement, BaseProps>(function Button(
  {
    children,
    className = "",
    variant,
    size,
    isLoading = false,
    disabled,
    asChild = false,
    ...props
  },
  ref
) {
  const Comp = asChild ? Slot : "button";

  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const mergedRef = mergeRefs<HTMLButtonElement | null>(buttonRef, ref);

  const state = isLoading || disabled;
  const ariaBusy = state ? true : undefined;

  return (
    <Comp
      ref={mergedRef}
      className={buttonStyles({ variant, size, className })}
      aria-disabled={disabled}
      role={!asChild ? "button" : undefined}
      tabIndex={disabled || asChild ? -1 : 0}
      aria-busy={ariaBusy}
      {...props}
    >
      {children}
    </Comp>
  );
});

Button.displayName = "Button";
export { Button };
