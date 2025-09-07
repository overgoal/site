"use client";
import Image from "next/image";
import React, { useRef } from "react";
import BackgroundBlur from "../BackgroundBlur";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import GameSection from "./GameSection";
import FeaturesSection from "./FeaturesSection";
import { cn } from "@/utils/cn";

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
          The first football RPG where every decision matters
        </span>
      </div>
      <div className="flex items-start flex-col justify-start w-full text-center z-90 font-air-strike">
        <h1
          ref={titleRef}
          className="text-[19.5vw] font-bold uppercase text-center text-[#E8E2D1] leading-30 md:leading-56 tracking-tighter"
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
                className="object-contain absolute top-[20vh]  md:top-10 w-[100vw] md:w-[1180px] z-100 left-1/2  -translate-x-1/2"
              />
            </div>
          </div>
        </div>
        <div
          className={cn(
            "to-black pointer-events-none absolute -top-31 left-0 z-10 w-full bg-gradient-to-b from-transparent px-12",
            `h-32` // Dynamic height using constant
          )}
        ></div>
      </div>

      {/* Expanded Call-to-Action Section */}
      <GameSection />
      <FeaturesSection />
    </section>
  );
}
