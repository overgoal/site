import { CyberpunkContainer } from "@/components/cyberpunk-container";
import Image from "next/image";
import React from "react";

import featuresData from "@/components/sections/Features/data";
import FeaturesItem from "@/components/sections/Features/FeaturesItem";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

export default function FeaturesSection({}: Props) {
  return (
    <CyberpunkContainer className="w-full relative  pb-12 ">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <CyberpunkContainer
          borderConfig={{
            topLeft: true,
            topRight: true,
            bottomLeft: false,
            bottomRight: false,
          }}
          className="text-white/80 px-12 text-center text-5xl font-bold my-6 z-20"
        >
          <h2 className="text-white/80 px-12 text-center text-5xl font-bold my-6 z-20">
            Build your own story{" "}
          </h2>
        </CyberpunkContainer>
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 w-full mt-2 px-24 gap-y-24 gap-x-12">
          {featuresData.map((feature, index) => (
            <FeaturesItem
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
          <div className="col-span-1 md:col-span-4 row-span-2 rounded-lg  flex flex-col items-center justify-start w-full ">
            <h2 className="text-white/80 text-center text-2xl md:text-5xl font-bold mb-16">
              Compete in Seasons and Tournaments
            </h2>
            <CyberpunkContainer
              borderConfig={{
                topLeft: false,
                topRight: false,
                bottomLeft: true,
                bottomRight: true,
              }}
              className="flex flex-col md:flex-row w-full   items-center justify-center gap-8"
            >
              <div className="flex flex-row   items-center justify-center gap-8 group/coins">
                <div className="flex flex-col items-center justify-center ">
                  <p className="text-white/80 text-center text-xl md:text-2xl font-bold mb-2 ">
                    Win <span className="text-primary ">$GOAL</span>
                  </p>
                  <Image
                    src="/$GOAL.png"
                    alt="Game Overview"
                    width={130}
                    height={130}
                    className="hover:scale-110 transition-all duration-300 will-change-transform "
                  />
                  {/* <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                        transform -skew-x-2 -translate-x-full group-hover/coins:translate-x-full 
                      transition-transform duration-1000 ease-out"
                  /> */}
                  {/* <p className="text-white/80 text-center text-base md:text-base max-w-md font-bold mb-2">
                    $GOAL is Overgoal’s player-earned utility token. Win
                    matches, complete challenges, and participate in tournaments
                    to earn $GOAL
                  </p> */}
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-white/80 text-center text-xl md:text-2xl font-bold mb-2">
                    Win <span className="text-amber-400">REP</span>
                  </p>
                  <Image
                    src="/REP.png"
                    alt="Game Overview"
                    width={150}
                    height={150}
                    className="hover:scale-110 transition-all duration-300 will-change-transform group/coins"
                  />
                  {/* <p className="text-white/80 text-center text-base md:text-base max-w-md font-bold mb-2">
                    REP is Overgoal’s progression currency. Earn REP by
                    performing well in matches and making key decisions
                    throughout your career.
                  </p> */}
                </div>
               
              </div>
              <p className="text-white/80 text-center text-base md:text-lg max-w-xl w-full font-bold mt-4">
                  $GOAL and REP are the dual currencies powering Overgoal’s
                  football universe.
                </p>
            </CyberpunkContainer>
            <Link href="/economy" className="mt-12 cursor-pointer">
              <Button className="bg-[#E8E2D1] text-black cursor-pointer">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </CyberpunkContainer>
  );
}
