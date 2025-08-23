"use client";
import Image from "next/image";
import React, { useRef } from "react";
import BackgroundBlur from "../BackgroundBlur";
import Header from "../layout/header";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { CyberpunkContainer } from "../cyberpunk-container";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/utils/cn";
import { ChevronDownIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function HomeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bannerRef = useRef<HTMLSpanElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
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

  useGSAP(() => {
    if (
      !titleRef.current ||
      !bannerRef.current ||
      !overviewRef.current ||
      !headerRef.current
    )
      return;
    const overviewTexts = overviewRef.current.querySelectorAll("p");
    const headerItems = headerRef.current.querySelectorAll(".item");

    gsap.set(headerItems, {
      y: 10,
      opacity: 0,
    });

    console.log(headerItems);
    const tl = gsap.timeline();
    const chars = new SplitText(titleRef.current, {
      type: "chars",
    });

    tl.from(bannerRef.current, {
      duration: 0.5,
      y: 100,
      opacity: 0,
      ease: "power2.inOut",
    });

    tl.from(
      chars.chars,
      {
        // rotationX: -90,
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power2.inOut",
        stagger: 0.05,
      },
      "<"
    );

    tl.to(headerItems, {
      duration: 0.5,
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      stagger: 0.05,
    });

    tl.from(overviewTexts, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power2.inOut",
    });
  });

  return (
    <section
      id="home"
      className="w-full h-full flex items-center flex-col justify-start relative "
    >
      <BackgroundBlur />
      <div className="relative w-full h-10  flex items-center justify-center bg-[#E8E2D1] z-100">
        <span
          ref={bannerRef}
          className="text-black/80 text-xl font-chakra uppercase font-bold"
        >
          Under Development
        </span>
      </div>
      <div className="flex items-start flex-col justify-start w-full text-center z-90 font-air-strike">
        <h1
          ref={titleRef}
          className="text-[19.5vw] font-bold uppercase text-center text-[#E8E2D1] leading-56 tracking-tighter"
        >
          Overgoal
        </h1>
      </div>
      <div ref={headerRef}>{/* <Header /> */}</div>

      <div
        ref={sectionRef}
        className="w-full h-full mt-2 grid grid-cols-5 z-90 font-chakra "
      >
        <div id="content" className="col-span-5 ">
          <div className="p-10 pt-2 ">
            <div
              id="overview"
              className="scroll-mt-6 flex flex-col items-center justify-center w-full "
            >
              <Image
                src="/heroImage.png"
                alt="Overgoal"
                width={1180}
                height={1180}
                className="object-contain absolute top-10 z-100 left-1/2  -translate-x-1/2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Call-to-Action Section */}
      <div className="w-full min-h-screen flex flex-col justify-center relative  items-center z-100 p-10 mt-20">
        <div className="flex flex-col justify-center absolute top-90 left-0 items-center max-w-full w-full h-screen  mx-auto text-white text-center space-y-8">
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
    </section>
  );
}
