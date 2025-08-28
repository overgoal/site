"use client";
import React, { useRef } from "react";
import { CyberpunkContainer } from "@/components/cyberpunk-container";
import TimelineItem from "./TimelineItem";
import { timelineData } from "./data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);


export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !titleRef.current) return;

    // Animate title on scroll
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });

  return (
    <section ref={containerRef} className="w-full relative">
      <CyberpunkContainer className="w-full relative py-12">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <CyberpunkContainer
            borderConfig={{}}
            className="inline-block px-8 py-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Compete in Seasons and Tournaments
            </h2>
          </CyberpunkContainer>
          <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
            Monthly competitions to win prizes and boost your ranking or
            individual tournament to win a prize pool. Be the best and claim
            your rewards!
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative ">
          {timelineData.map((item) => (
            <TimelineItem key={item.id} item={item}  />
          ))}
        </div>
        <div className="col-span-5 row-span-2 md:col-span-5  rounded-lg  flex flex-col items-center justify-center w-full ">
          <div
         
            className="flex flex-col w-full  items-center justify-center gap-8 border-t-0"
          >
            <div className="flex flex-row   items-start justify-center gap-8 group/coins">
              <div className="flex flex-col items-center justify-center  ">
                <p className="text-white/80 text-center text-xl md:text-2xl font-bold mb-1 ">
                  <span className="text-primary ">$GOAL</span>
                </p>
                <Image
                  src="/$GOAL.png"
                  alt="Game Overview"
                  width={130}
                  height={130}
                  className="hover:scale-110 transition-all duration-300 will-change-transform "
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-white/80 text-center text-xl md:text-2xl font-bold ">
                  <span className="text-amber-400">REP</span>
                </p>
                <Image
                  src="/REP.png"
                  alt="Game Overview"
                  width={150}
                  height={150}
                  className="hover:scale-110 transition-all duration-300 will-change-transform group/coins"
                />
              </div>
            </div>
            <p className="text-white/80 text-center text-base md:text-lg max-w-xl w-full font-bold mt-4">
              $GOAL and REP are the dual currencies powering Overgoal’s football
              universe.
            </p>
          </div>
        
        </div>
      </CyberpunkContainer>
    </section>
  );
}
