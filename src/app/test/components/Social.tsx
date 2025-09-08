"use client";
import React, { useRef } from "react";
import { Tweet } from "react-tweet";
import { CyberpunkContainer } from "@/components/cyberpunk-container";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// Game phases data
const gamePhases = [
  {
    id: 1,
    title: "Fully On-Chain. Unstoppable",
    description:
      "Traditional games are fragile — when servers shut down, everything you’ve earned disappears. Overgoal is the next step: a fully on-chain football experience where characters, stats, and achievements live forever. This isn’t just ownership — it’s a new era of unstoppable games.",
    image: "/teamup.jpeg",
    tweetId: "",
  },
  {
    id: 2,
    title: "Dojo Game Jam",
    description:
      "Overgoal won the latest Dojo Game Jam, in 48hs shipping a production ready game. Fully on chain contracts and modern UI",
    image: "",
    tweetId: "1940062911088758849",
  },
  {
    id: 3,
    title: "Devconnect 2025",
    description:
      "Join our first seasion during Devconnect Argentina - November 2025- where we will present the game to the world",
    image: "/devco.png",
    tweetId: "",
  },
];

export default function Social() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

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
    <section ref={containerRef} className="w-full relative ">
      <CyberpunkContainer className="w-full relative py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <CyberpunkContainer
            borderConfig={{
              topLeft: false,
              topRight: false,
              bottomLeft: false,
              bottomRight: false,
            }}
            className="inline-block px-8 py-4"
          >
            <h2
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              The Overgoal journey has already begun.
            </h2>
          </CyberpunkContainer>
          <p className="text-white/70 text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
          Our mission isn&apos; t just to create the best football game — it&apos;s to redefine what on-chain gaming can be. With Overgoal, players can truly own their progress, share characters across worlds, and enjoy seamless access to blockchain gaming without barriers.
          </p>
        </div>

        {/* Phases Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent hidden lg:block" />

          {gamePhases.map((phase, index) => (
            <PhaseItem key={phase.id} phase={phase} index={index} />
          ))}
        </div>
      </CyberpunkContainer>
    </section>
  );
}

// Phase Item Component
interface PhaseItemProps {
  phase: (typeof gamePhases)[0];
  index: number;
}

function PhaseItem({ phase, index }: PhaseItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  useGSAP(() => {
    if (!itemRef.current || !contentRef.current || !visualRef.current) return;

    // Check if user prefers reduced motion or is on mobile
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isMobile || prefersReducedMotion) {
      // Just set visible state without animations on mobile
      gsap.set([contentRef.current, visualRef.current], {
        opacity: 1,
        x: 0,
        y: 0,
      });
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: itemRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Set initial states
    gsap.set([contentRef.current, visualRef.current], {
      opacity: 0,
      x: isEven ? -50 : 50,
      y: 30,
    });

    // Animate content
    tl.to(contentRef.current, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    }).to(
      visualRef.current,
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.4"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [phase.id]);

  return (
    <div ref={itemRef} className="relative py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            !isEven ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* Content Section */}
          <div
            ref={contentRef}
            className={`flex flex-col space-y-2 bg-white/5 backdrop-blur-none rounded-lg  ${
              !isEven ? "lg:col-start-2" : ""
            }`}
          >
            <CyberpunkContainer
              borderConfig={{
                topLeft: false ,
                topRight: false,
                bottomLeft: false,
                bottomRight: false,
              }}
              className="inline-flex justify-start bg-[#0abee1]  items-start py-2"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold  text-black">
                  {phase.title}
                </h3>
              </div>
            </CyberpunkContainer>

            <div className="space-y-4">
              <div className="flex items-start space-x-3 "></div>

              <p className="text-white/90 text-lg leading-relaxed px-4">
                {phase.description}
              </p>

              <div className="space-y-2"></div>
            </div>
          </div>

          {/* Visual Section */}
          <div
            ref={visualRef}
            className={`relative ${
              !isEven ? "lg:col-start-1 lg:row-start-1" : ""
            }`}
          >
            <CyberpunkContainer
              className={`w-full  flex items-center justify-center p-6`}
            >
            {phase.image !== "" ? (
              <Image
                src={phase.image}
                alt={phase.title}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Tweet id={phase.tweetId} />
              </div>
            )}
            </CyberpunkContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
