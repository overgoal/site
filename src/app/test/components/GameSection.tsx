import React from "react";
import { cn } from "@/utils/cn";
import { CyberpunkContainer } from "@/components/cyberpunk-container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";


export default function GameSection() {
  return (
    <div className="w-full max-h-screen h-full relative z-100  bg-black">
      <div
        className={cn(
          "to-black pointer-events-none absolute -top-31 left-0 z-10 w-full bg-gradient-to-b from-transparent px-12",
          `h-32` // Dynamic height using constant
        )}
      ></div>
      <CyberpunkContainer className="w-full h-full  z-20 ">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="space-y-2 flex flex-col items-center justify-center gap-4">
           
            <CyberpunkContainer className="w-full h-full p-0 z-20   ">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <Link href="" target="_blank">
                  <Button className="px-16 py-6 cursor-pointer text-2xl! font-chakra text-black font-bold  transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-[#E8E2D1]  border-1 border-black">
                    Coming Soon
                  </Button>
                </Link>
              </div>
            </CyberpunkContainer>

            <div className="rounded-[50%] h-8 w-8 bg-black border-2 border-white/10 flex items-center justify-center">
              <div className="p-2  rounded-[50%]">
                <ChevronDownIcon className="h-5 w-5  animate-pulse text-white/80" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full  relative justify-center max-w-4xl mt-4 md:mt-8  items-center mx-auto flex-col gap-8 px-8 border-b pb-12 border-white/10">
          <CyberpunkContainer
            borderConfig={{
              bottomLeft: true,
              bottomRight: true,
            }}
            className="flex flex-col  max-w-2xl  px-4 md:px-12 "
          >
            <h2 className="text-white/80 text-center text-2xl md:text-5xl font-bold mb-6">
              More Than a Match
            </h2>
            <p className="text-white/80 text-center text-base md:text-lg font-chakra">
              is a{" "}
              <span className="text-primary font-bold">fully on-chain</span>{" "}
              RPG, decision-making game that blends skill, strategy, and a touch
              of chaos. Set in a near-future world where footballers are seen as
              living legends,{" "}
              <span className="text-primary font-bold">
                your reputation is shaped as much by your performance off the
                pitch as on it.
              </span>{" "}
              Fame, scandals, and constant media attention make every decision
              count.
            </p>
          </CyberpunkContainer>
          <div className="flex flex-col justify-center items-center gap-4">
            <h4>Build on</h4>
            <div className="flex flex-row  gap-4 items-center justify-center">
              <Link href="https://dojoengine.org/" target="_blank">
                <Image
                  src="/dojo-icon.svg"
                  alt="Dojo icon"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="https://www.starknet.io/" target="_blank">
                <Image
                  src="/starknet.png"
                  alt="Starknet icon"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="https://cartridge.gg" target="_blank">
                <Image
                  src="/cart.png"
                  alt="Cartridge icon"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>
      </CyberpunkContainer>
    </div>
  );
}
