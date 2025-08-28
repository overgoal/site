"use client";
import React from "react";
import { DotGrid, GrainGradient } from "@paper-design/shaders-react";

interface ShaderBackgroundProps {
  children: React.ReactNode;
}

export default function ShaderBackground({ children }: ShaderBackgroundProps) {
  return (
    <div className="min-h-screen relative">
      <DotGrid
        className="absolute inset-0 w-full h-full"
        colorBack="#000000"
        colorFill="#00e9fa"
        // colorStroke='#A16EFF'
        shape="circle"
        size={0.5}
        // strokeWidth={1}
      />

      <GrainGradient
        className="absolute inset-0 w-full h-full opacity-20"
        colors={["#00e9fa", "#000", "#000"]}
      />

      {children}
    </div>
  );
}
