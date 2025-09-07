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
                <Link href="https://discord.gg/m79rRpzRbU" target="_blank">
                  <Button className="px-16 py-6 cursor-pointer text-2xl! font-chakra text-black font-bold  transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-[#E8E2D1]  border-1 border-black flex items-center gap-3">
                    {/* Discord icon placeholder - replace with actual Discord icon */}
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0188 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                    </svg>
                    Join the squad
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
              More Than a Match!
            </h2>
            <p className="text-white/80 text-center text-base md:text-lg font-chakra">
              Overgoal is a{" "}
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
            <h4>Powered by</h4>
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
