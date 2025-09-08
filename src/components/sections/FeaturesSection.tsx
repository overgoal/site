import React from "react";
import { CyberpunkContainer } from "../cyberpunk-container";
import Image from "next/image";


export default function FeaturesSection() {
  return (
    <CyberpunkContainer className="w-full h-screen  flex items-center justify-center text-white z-20 pt-0 mt-10" >
      {/* Feature highlights */}
      <h2 className="text-white/80 text-center text-5xl font-bold my-4 z-20">
        Become the legend
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full mt-12 px-12 ">
        <div className="text-center space-y-2  flex flex-col items-center justify-center border-r border-white/10  ">
          <div className="text-xl font-bold text-white">
          Create Your Striker. Get Drafted.
          </div>
          <div className="text-sm text-white/70">
            <Image
              src="/screens/Main.png"
              alt="Strikers"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="text-center space-y-2 border-r border-white/10">
          <div className="text-xl font-bold text-white">
            Become legend in the field
          </div>
          <div className="text-sm text-white/70">
            Become legend in the field
          </div>
        </div>
        <div className="text-center space-y-2 border-r border-white/10">
          <div className="text-xl font-bold text-white">
            Outstand outside the field
          </div>
          <div className="text-sm text-white/70">Real-time matches</div>
        </div>
        <div className="text-center space-y-2 ">
          <div className="text-xl font-bold text-white">
            Claim your rewards $$
          </div>
          <div className="text-sm text-white/70">
            Repeat until you are a legend
          </div>
        </div>
      </div>
    </CyberpunkContainer>
  );
}
