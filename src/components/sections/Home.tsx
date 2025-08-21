"use client";
import Image from "next/image";
import React, { useRef } from "react";
import BackgroundBlur from "../BackgroundBlur";
import Header from "../layout/header";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HomeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: sectionRef.current,
  //     start: "top top",
  //     end: "bottom bottom",
  //     scrub: true,
  //     markers: true,
  //     pin: true,
  //   });
  // }, []);

  return (
    <section
      id="home"
      className="w-full h-full flex items-center flex-col justify-start relative "
    >
      <BackgroundBlur />
      <div className="relative w-full h-12  flex items-center justify-center bg-[#E8E2D1] z-100">
        <span className="text-black/80 text-xl font-chakra uppercase font-bold">
          Under Development
        </span>
      </div>
      <div className="flex items-start flex-col justify-start w-full text-center z-100 font-air-strike">
        <h1 className="text-[19.5vw] font-bold uppercase text-center text-[#E8E2D1] leading-56 tracking-tighter">
          Overgoal
        </h1>
      </div>
      <Header />

      <div
        ref={sectionRef}
        className="w-full h-full mt-2 grid grid-cols-5 z-90 font-chakra  "
      >
        {/* Main Content Area - Right Side */}
        <div id="content" className="col-span-5 ">
          <div className="p-10 pt-2 space-y-16">
            {/* Overview Section */}
            <section
              id="overview"
              className="scroll-mt-6 flex flex-col items-center justify-center w-full "
            >
              <div className="w-full flex flex-col items-center justify-center">
                <div className="space-y-10 text-white/90 text-lg leading-relaxed flex flex-row gap-10 items-start justify-start">
                 

                  <div className="flex flex-col gap-4 text-center justify-center items-center p-8 pt-2 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-wider">
                      Welcome to the future of football
                    </h2>
                    <div className="flex flex-col gap-6 max-w-xl w-full">
                      <p className="tracking-wide text-base">
                        Overgoal is a narrative-driven, on-chain football RPG
                        built on Starknet and Dojo. Guide your Legend through a
                        career filled with choices, matches, and high-stakes
                        decisions—all shaped by real player-driven data.
                      </p>
                      <p className="tracking-wide text-base">
                        Experience skill-based progression, transparent
                        economics, and true community governance in a
                        persistent, evolving world where every decision matters
                        and  <span className="text-primary">every match tells a story.</span>
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-4 mt-4  pt-4 border-t border-white/20">
                      <p className="text-sm text-white/50 text-center">Powered by</p>
                      <div className="flex items-center gap-8">
                        <Image
                          src="/dojo-icon.svg"
                          alt="Dojo Engine"
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                        <Image
                          src="/starknet.png"
                          alt="Starknet"
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                        <Image
                          src="/cart.png"
                          alt="cart"
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </section>

            {/* Narrative Gameplay Section */}
          </div>
        </div>
      </div>
    </section>
  );
}
