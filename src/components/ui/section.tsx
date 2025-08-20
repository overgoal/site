import type { HTMLAttributes } from "react"

interface SectionProps extends HTMLAttributes<HTMLElement> {}

export function Section({ className = "", ...props }: SectionProps) {
  return (
    <section
      className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    />
  )
}

export interface SectionPropsPublic extends SectionProps {}


