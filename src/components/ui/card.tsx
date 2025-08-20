import type { HTMLAttributes, ReactNode } from "react"

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-[--color-border] bg-[--color-surface] text-[--color-foreground] shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = "", ...props }: CardProps) {
  return (
    <div className={`p-4 border-b border-[--color-border] ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardContent({ children, className = "", ...props }: CardProps) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = "", ...props }: CardProps) {
  return (
    <div className={`p-4 border-t border-[--color-border] ${className}`} {...props}>
      {children}
    </div>
  )
}

export interface CardPropsPublic extends CardProps {}


