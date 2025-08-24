import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ChevronDownIcon } from 'lucide-react'
import { cn } from '@/utils/cn'
import { CyberpunkContainer } from '../cyberpunk-container'


export default function GameSection() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center relative  items-center z-100 p-10 mt-0 lg:mt-20">
        <div className="flex flex-col justify-center absolute top-[15vh] sm:top-[30vh] md:top-[30vh] lg:top-90 left-0 items-center max-w-full w-full h-screen  mx-auto text-white text-center space-y-8">
          <div
            className={cn(
              "to-black pointer-events-none absolute -top-31 left-0 z-10 w-full bg-gradient-to-b from-transparent px-12",
              `h-32` // Dynamic height using constant
            )}
          ></div>
          <CyberpunkContainer className="w-full h-full p-0 z-20   ">
            {/* Content Area - Now expanded */}
            <div className="w-full flex flex-col items-center justify-center space-y-8 ">
              {/* Main heading for this section */}
              <div className="space-y-2 flex flex-col items-center justify-center">
                {/* <p className="text-7xl font-air-strike-bold  text-white/80 tracking-tighter">
                  More than a match
                </p> */}
                <CyberpunkContainer className="w-full h-full p-0 z-20   ">
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <Link href="https://play.overgoal.gg/" target="_blank">
                      <Button className="px-16 py-6 cursor-pointer text-2xl! font-chakra text-black font-bold  transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-[#E8E2D1]  border-1 border-black">
                        Play Now
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

              {/* Feature highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-[#E8E2D1]">
                    Strategic
                  </div>
                  <div className="text-sm text-white/70">
                    Deep tactical gameplay
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-[#E8E2D1]">
                    Competitive
                  </div>
                  <div className="text-sm text-white/70">Real-time matches</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-[#E8E2D1]">
                    Rewarding
                  </div>
                  <div className="text-sm text-white/70">
                    Earn while you play
                  </div>
                </div>
              </div>

              {/* Call-to-action button */}
              <div className="pt-8">
                <Link
                  href="https://play.overgoal.gg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="item block"
                  aria-label="Play Overgoal now"
                >
                  <Button className="px-12 py-4 cursor-pointer text-2xl font-chakra text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    Play Now
                  </Button>
                </Link>
              </div>
            </div>
          </CyberpunkContainer>
        </div>
      </div>
  )
}