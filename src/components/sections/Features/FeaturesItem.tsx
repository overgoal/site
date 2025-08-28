"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import featuresData from "./data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/utils/cn";



type Feature = {
  index: number;
  title: string;
  description: string;
  image: string;
};

const images = [
  { image: "/start_back.png", index: 0 },
  { image: "/matchScene.png", index: 1 },
  { image: "/nonMatch.png", index: 2 },
  { image: "/legend11.png", index: 3 },
];

export default function FeaturesItem() {
  const [currentFeature, setCurrentFeature] = useState<Feature>({
    index: 0,
    image: "/start_back.png",
    title: featuresData[0]?.title || "",
    description: featuresData[0]?.description || "",
  });

  // const [prevFeature, setPrevFeature] = useState<Feature>({
  //   index: 1,
  //   image: "/matchScene.png",
  //   title: featuresData[1]?.title || "",
  //   description: featuresData[1]?.description || "",
  // });

  const currentFeatureRef = useRef<HTMLImageElement>(null);
  // const prevFeatureRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0); // Track current index to avoid stale closures

  // Function to transition to a new feature with crossfade effect
  const transitionToFeature = (nextIndex: number) => {
    if (!currentFeatureRef.current ) return;

    const nextImage = images[nextIndex];
    const nextFeatureData = featuresData[nextIndex];

    // Update the ref immediately to prevent stale closures
    currentIndexRef.current = nextIndex;

    // Move current feature to previous (this will be visible during transition)
    // setPrevFeature(currentFeature);

    // Set up new image with initial hidden state
    gsap.set(currentFeatureRef.current, {
      opacity: 0,
      startAt: { opacity: 0 },
    });

    // console.log(nextImage);

    // Update current feature state (new image will load)
    setCurrentFeature({
      index: nextIndex,
      image: nextImage.image,
      title: nextFeatureData.title,
      description: nextFeatureData.description,
    });


    // Create crossfade animation - new image fades in over previous
    gsap.to(currentFeatureRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.1, // Small delay to ensure new image has loaded
    });
  };

  // Set up image cycling with smooth crossfade transitions using useGSAP hook
  useGSAP(
    () => {
      if (!currentFeatureRef.current) return;

      // Set initial states to prevent FOUC
      gsap.set(currentFeatureRef.current, {
        opacity: 1,
      });

      // gsap.set(prevFeatureRef.current, {
      //   opacity: 1,
      // });

      // Function to cycle to next image with crossfade transition
      const cycleToNextImage = () => {
        const currentIndex = currentIndexRef.current;
        const nextIndex = (currentIndex + 1) % images.length;

        console.log(currentIndex, nextIndex);
        transitionToFeature(nextIndex);
      };

      // Create interval for cycling through images
      const interval = setInterval(cycleToNextImage, 3000);

      // Cleanup function handled automatically by useGSAP
      return () => clearInterval(interval);
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="row-span-2 col-span-5  relative h-full transition-all duration-300"
    >
      <div className="w-full h-full  transition-all duration-300 overflow-hidden rounded-lg flex flex-col xl:flex-row items-center text-center justify-center ">
        <div className="flex flex-col md:flex-col  items-center justify-center gap-3  mr-0 md:mr-4 ">
          {featuresData.map((feature, index) => (
            <div
              onClick={() => {
                // Use the same transition function for manual clicks
                if (index !== currentFeature.index) {
                  transitionToFeature(index);
                }
              }}
              key={index}
              className={cn(
                "cursor-pointer border border-white/10  box-shadow-lg  flex flex-col  items-center md:items-start justify-center  py-6 w-full gap-2 lg:gap-4 rounded-lg px-8"
              )}
            >
              <span
                className={cn(
                  "text-white text-xl text-center md:text-left font-bold opacity-100 transition-colors duration-300  ",
                  currentFeature.index === index && "text-primary"
                )}
              >
                {feature.title}
              </span>
              <p className="text-white/80  h-full text-base text-center md:text-left group-hover/2:text-white opacity-100 transition-all duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="relative w-4/5 h-full">
          {/* Previous image - stays visible as background during transition */}
          <Image
            ref={currentFeatureRef}
            src={currentFeature.image}
            alt={`Previous feature: ${currentFeature.title}`}
            width={500}
            height={500}
            className="w-full h-full object-cover  md:w-[700px] mt-4 xl:mt-0 lg:pt-0 border border-white/10 rounded-lg"
            style={{ zIndex: 1 }}
          />
          {/* Current image - fades in on top during transition */}
          {/* <Image
            ref={prevFeatureRef}
            src={ ""}
            alt={`Current feature: ${prevFeature.title}`}
            width={500}
            height={500}
            className="w-full h-full object-cover   md:w-[700px] mt-4 xl:mt-0 lg:pt-0 border border-white/10 rounded-lg absolute top-0 left-0"
            style={{ zIndex: 2 }}
          /> */}
        </div>
      </div>
    </div>
  );
}
