import type { HTMLAttributes, ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"

const badgeStyles = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
  {
    variants: {
      variant: {
        primary: "bg-[--color-primary] text-black",
        secondary: "bg-[--color-secondary] text-black",
        accent: "bg-[--color-accent] text-black",
        success: "bg-[--color-success] text-black",
        danger: "bg-[--color-danger] text-white",
        muted: "bg-[--color-highlight] text-[--color-muted]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeStyles> {
  children: ReactNode
}

export function Badge({ children, className = "", variant, ...props }: BadgeProps) {
  return (
    <span className={badgeStyles({ variant, className })} {...props}>
      {children}
    </span>
  )
}

export interface BadgePropsPublic extends BadgeProps {}


