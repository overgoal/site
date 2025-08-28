"use client";
import React, { useRef } from "react";
import { CyberpunkContainer } from "@/components/cyberpunk-container";
import MilestoneItem from "./MilestoneItem";
import { milestonesData } from "./data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

export default function Milestones({}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !headerRef.current || !subtitleRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate header with typewriter effect
    gsap.set(headerRef.current, { opacity: 0, y: 30 });
    gsap.set(subtitleRef.current, { opacity: 0, y: 20 });

    tl.to(headerRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.5");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  });

  return (
    <section ref={containerRef} className="w-full relative py-20 bg-gradient-to-b from-transparent via-black/20 to-transparent">
      <CyberpunkContainer className="w-full relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <CyberpunkContainer
            borderConfig={{
              topLeft: true,
              topRight: true,
              bottomLeft: true,
              bottomRight: true,
            }}
            className="inline-block px-12 py-8 mb-8"
          >
            <div ref={headerRef} className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-4xl">🎯</span>
                <h2 className="text-4xl md:text-6xl font-bold text-white">
                  Our Journey
                </h2>
                <span className="text-4xl">🎯</span>
              </div>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
          </CyberpunkContainer>

          <p ref={subtitleRef} className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to industry recognition, follow our path of innovation,
            achievement, and future aspirations in the Web3 gaming landscape.
          </p>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center items-center space-x-8 mb-16">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span className="text-white/60 text-sm">Formation</span>
          </div>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-yellow-500"></div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="text-white/60 text-sm">Victory</span>
          </div>
          <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-500 to-green-500"></div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-white/60 text-sm">Future</span>
          </div>
        </div>

        {/* Milestone Items */}
        <div className="relative">
          {milestonesData.map((milestone, index) => (
            <MilestoneItem
              key={milestone.id}
              milestone={milestone}
              index={index}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <CyberpunkContainer
            borderConfig={{
              topLeft: false,
              topRight: false,
              bottomLeft: true,
              bottomRight: true,
            }}
            className="inline-block px-8 py-6"
          >
            <p className="text-white/80 text-lg">
              🚀 <span className="text-primary font-semibold">Join us</span> as we continue to push the boundaries of football gaming
            </p>
          </CyberpunkContainer>
        </div>
      </CyberpunkContainer>
    </section>
  );
}
