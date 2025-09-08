import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

export default function HomeSection() {
  return (
    <div className="w-full h-[40vh] md:h-[75vh] relative  ">
      {/* <BackgroundBlur /> */}
      <div className="relative w-full h-16 md:h-10 flex items-center justify-center bg-[#0abee1] z-100">
        <span className="text-black/80 text-lg md:text-xl font-chakra uppercase font-bold text-center px-4 md:px-0">
        The first football RPG where every decision matters
        </span>
      </div>
      <div className="flex items-start flex-col justify-start w-full text-center z-90 font-air-strike">
        <h1 className="text-[19.5vw] font-bold uppercase text-center text-white leading-30 md:leading-56 tracking-tighter">
          Overgoal
        </h1>
      </div>
      <div className="w-full h-[25vh] md:h-[40vh] mt-0 grid grid-cols-5 z-90 font-chakra ">
        <div id="content" className="col-span-5 ">
          <div className="p-4 pt-2 ">
            <div
              id="overview"
              className="scroll-mt-6 flex flex-col items-center justify-center w-full "
            >
              <Image
                src="/heroImage.png"
                alt="Overgoal"
                width={1000}
                height={1000}
                className="object-contain absolute top-[12vh] md:top-5 w-[90vw] md:w-[1000px] z-100 left-1/2  -translate-x-1/2"
                priority
                loading="eager"
                sizes="(max-width: 768px) 90vw, 1000px"
              />
            </div>
          </div>
        </div>
        <div
          className={cn(
            "to-black/60 pointer-events-none absolute -bottom-2 left-0 z-50 w-full bg-gradient-to-b from-transparent px-12",
            `h-32` // Dynamic height using constant
          )}
        ></div>
      </div>
    </div>
  );
}
