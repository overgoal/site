import type React from "react"
import { cn } from "../utils/cn"

interface CyberpunkContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "danger" | "outline"
  glitch?: boolean
  pulse?: boolean
  borderConfig?: {
    topLeft?: boolean
    topRight?: boolean
    bottomLeft?: boolean
    bottomRight?: boolean
  }
}

export function CyberpunkContainer({
  children,
  className,
  variant = "primary",
  glitch = false,
  pulse = false,
  borderConfig = {
    topLeft: false,
    topRight: false,
    bottomLeft: false,
    bottomRight: false,
  },
  ...props
}: CyberpunkContainerProps) {
  const baseClasses = `
    relative p-4 font-mono
    font-chakra
    transition-all duration-300 ease-out
    // overflow-hidden
    bg-black/80
    group
    cyberpunk-clip

  `

  const variantClasses = {
    primary: `
      shadow-[0_0_30px_rgba(6,182,212,0.3)]
      hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] 
      backdrop-blur-sm
    `,
    secondary: `
      bg-gradient-to-br from-purple-600/20 to-pink-600/20
      text-purple-100
      shadow-[0_0_30px_rgba(147,51,234,0.3)]
      hover:shadow-[0_0_40px_rgba(147,51,234,0.5)]
      border-purple-400/50
      backdrop-blur-sm
    `,
    danger: `
      bg-gradient-to-br from-red-600/20 to-orange-600/20
      text-red-100
      shadow-[0_0_30px_rgba(239,68,68,0.3)]
      hover:shadow-[0_0_40px_rgba(239,68,68,0.5)]
      border-red-400/50
      backdrop-blur-sm
    `,
    outline: `
      bg-transparent
      text-cyan-400
      border-cyan-400/50
      hover:bg-cyan-400/5
      hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]
      backdrop-blur-sm
    `,
  }

  const glitchClasses = glitch ? "animate-pulse" : ""
  const pulseClasses = pulse ? "animate-bounce" : ""

  return (
    <div className={cn(baseClasses, variantClasses[variant], glitchClasses, pulseClasses, className)} {...props}>
      {/* Background geometric overlay */}
      {/* <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                      transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                      transition-transform duration-1000 ease-out"
      /> */}

      {/* Corner accents */}
      {borderConfig.topLeft && <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-current opacity-60" />}
      {borderConfig.topRight && <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-current opacity-60" />}
      {borderConfig.bottomLeft && <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-current opacity-60" />}
      {borderConfig.bottomRight && <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-current opacity-60" />}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Glitch effect overlay */}
      {glitch && (
        <div
          className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-150 animate-pulse"
        />
      )}
    </div>
  )
}
