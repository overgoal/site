"use client"

import type { ComponentPropsWithoutRef } from "react"
import * as RadixLabel from "@radix-ui/react-label"

interface LabelProps extends ComponentPropsWithoutRef<typeof RadixLabel.Root> {}

export function Label({ className = "", ...props }: LabelProps) {
  return (
    <RadixLabel.Root
      className={`text-sm font-medium text-[--color-muted] ${className}`}
      {...props}
    />
  )
}

export interface LabelPropsPublic extends LabelProps {}


