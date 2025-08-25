import React from "react";
import { Tweet } from "react-tweet";
import { cn } from "@/utils/cn";
import { CyberpunkContainer } from "@/components/cyberpunk-container";

type Props = {};

export default function Social({}: Props) {
  return (
    <CyberpunkContainer className="w-full h-screen relative">
      <div className="border-t border-white/10 pt-12 max-w-4xl mx-auto my-8" />
      <div
        className={cn(
          "from-black pointer-events-none absolute -top-18 left-0 z-100 w-full bg-gradient-to-b to-transparent px-12",
          `h-28` // Dynamic height using constant
        )}
      ></div>
      <h2 className="text-4xl font-bold text-center mb-8"> First place in Dojo Game Jam</h2>
      <div className=" grid grid-cols-1 items-center justify-center gap-4 px-12">
        <div className="flex flex-col items-center justify-center ">
          {/* <h2 className="text-2xl  text-center mt-4">
            Overgoal Took the first place in Dojo Game Jam!!
          </h2> */}
          <Tweet id="1940062911088758849" />
        </div>
        {/* <div className="flex md:flex-row flex-col gap-4">
          <Tweet id="1942233501283008975" />
          <Tweet id="1940413609798258778" />
        </div> */}
      </div>
    </CyberpunkContainer>
  );
}
