"use client";
import React, { useRef } from "react";
import { cn } from "@/utils/cn";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Tweet } from "react-tweet";
gsap.registerPlugin(ScrollTrigger);

// Content data structure for different scroll states
interface ContentState {
  id: number;
  image: string;
  title: string;
  description: string;
}

const contentStates: ContentState[] = [
  {
    id: 1,
    image: "/screens/MAIN.png",
    title: "Game Overview",
    description:
      "Welcome to the ultimate gaming experience where strategy meets action. Explore vast worlds and compete with players globally.",
  },
  {
    id: 2,
    image: "/screens/select1.png",
    title: "Character Selection",
    description:
      "Choose from a diverse roster of unique characters, each with special abilities and playstyles to match your strategy.",
  },
  {
    id: 3,
    image: "/screens/teamSelect3.png",
    title: "Team Formation",
    description:
      "Build the perfect team composition. Coordinate with allies and create synergies that will dominate the battlefield.",
  },
  {
    id: 4,
    image: "/screens/MatchEvent.png",
    title: "Live Match",
    description:
      "Experience real-time combat with dynamic events. Every decision matters as you fight for victory and glory.",
  },
  {
    id: 5,
    image: "/screens/nonMatch.png",
    title: "Victory Celebration",
    description:
      "Claim your rewards and climb the leaderboards. Each victory brings you closer to becoming a legendary champion.",
  },
];

export default function StatusSection() {
  const statusSectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  // Set up ScrollTrigger pin animation using useGSAP hook
  useGSAP(
    () => {
      if (!statusSectionRef.current || !pinRef.current) return;

      // Set initial content state
      const updateContent = (index: number) => {
        const state = contentStates[index];
        if (!state) return;

        // Update image src
        if (imageRef.current) {
          imageRef.current.src = state.image;
          imageRef.current.alt = state.title;
        }

        // Update text content
        if (titleRef.current) {
          titleRef.current.textContent = state.title;
        }

        if (descriptionRef.current) {
          descriptionRef.current.textContent = state.description;
        }
      };

      // Set initial content
      updateContent(0);

      console.log(pinRef.current);

      // Create ScrollTrigger for pinning and content changes
      const scrollTrigger = ScrollTrigger.create({
        trigger: statusSectionRef.current,
        start: "top 0%",
        end: "+=800",
        // markers: true,
        toggleActions: "restart none none none",
        pin: pinRef.current,
        pinSpacing: false,
        // scrub: 1,
        //     onUpdate: (self) => {
        //       // Calculate which content state to show based on scroll progress
        //       const progress = self.progress;
        //       const stateIndex = Math.min(
        //         Math.floor(progress * contentStates.length),
        //         contentStates.length - 1
        //       );

        //       if (currentStateRef.current !== stateIndex) {
        //         currentStateRef.current = stateIndex;
        //         setCurrentStateIndex(stateIndex);

        //         // Animate content transition
        //         const tl = gsap.timeline();

        //         // Fade out current content
        //         tl.to(
        //           [imageRef.current, titleRef.current, descriptionRef.current],
        //           {
        //             opacity: 0,
        //             scale: 0.95,
        //             duration: 0.3,
        //             ease: "power2.out",
        //           }
        //         )
        //           // Update content and fade back in
        //           .call(() => updateContent(stateIndex))
        //           .to(
        //             [imageRef.current, titleRef.current, descriptionRef.current],
        //             {
        //               opacity: 1,
        //               scale: 1,
        //               duration: 0.4,
        //               ease: "power2.out",
        //               stagger: 0.1,
        //             }
        //           );
        //       }
        //     },
      });

      // Set initial states to prevent FOUC
      //   gsap.set([imageRef.current, titleRef.current, descriptionRef.current], {
      //     opacity: 1,
      //     scale: 1,
      //   });

      // Cleanup function is handled automatically by useGSAP
      return () => {
        scrollTrigger.kill();
      };
    },
    { scope: statusSectionRef }
  ); // Scope to the ref for better performance

  return (
    <div
      className="w-full h-[200vh] relative pt-12 status-section "
      ref={statusSectionRef}
    >
      <div
        className={cn(
          "from-black pointer-events-none absolute -top-18 left-0 z-100 w-full bg-gradient-to-b to-transparent px-12",
          `h-28` // Dynamic height using constant
        )}
      ></div>
      <h2 className="text-4xl font-bold text-center mb-32">Game Status</h2>
      <div
        className=" flex justify-center items-start
         w-full h-full gap-12 "
      >
        <div
          ref={pinRef}
          className=" w-full  flex flex-row gap-4  items-center justify-center p-4 "
        >
          <Tweet id="1940062911088758849" />

          <div className="flex max-w-xl text-center w-full flex-col gap-4">
            <h2 className="text-2xl font-bold">Game Overview</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iure
              ullam illo, fugiat vel ratione a consectetur enim nihil vero
              molestiae animi, minima totam vitae dolorum! Sequi, beatae.
              Dolorum, aliquid?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
