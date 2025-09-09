"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { GalleryItem } from "./data";

type Props = {
  item: GalleryItem;
};

export default function HorizontalGalleryItem({ item }: Props) {
  const itemRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!itemRef.current || !overlayRef.current) return;

    // Check if user prefers reduced motion or is on mobile
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isMobile || prefersReducedMotion) {
      // Show overlay by default on mobile (no hover available)
      gsap.set(overlayRef.current, {
        opacity: 1,
        y: 0,
      });
    } else {
      // Set initial hidden state for desktop hover behavior
      gsap.set(overlayRef.current, {
        opacity: 0,
        y: 20,
      });
    }

    return () => {
      // Cleanup will be handled by parent component
    };
  }, []);

  const handleMouseEnter = () => {
    if (!overlayRef.current || !imageRef.current) return;

    // Check if on mobile - skip hover animations
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    gsap.to(overlayRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(imageRef.current, {
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!overlayRef.current || !imageRef.current) return;

    // Check if on mobile - skip hover animations
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    gsap.to(overlayRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power2.in",
    });

    gsap.to(imageRef.current, {
      duration: 0.4,
      ease: "power2.out",
    });
  };

  // Uniform container size for all gallery items
  const getContainerClasses = () => {
    return "relative overflow-hidden rounded-xl group cursor-pointer w-72 h-72 md:w-96 md:h-96";
  };

  return (
    <div
      ref={itemRef}
      className={`flex-shrink-0 ${getContainerClasses()} mx-2`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Content */}
      <Image
        ref={imageRef}
        src={item.image}
        alt={item.title}
        fill
        className="object-contain  transition-transform duration-300 will-change-transform"
      />

      {/* Gradient Overlay */}
      {/* <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} /> */}

      {/* Hover Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 mt-auto h-12  flex flex-col justify-start items-center p-3 md:p-4 text-white bg-black border-white backdrop-blur-sm "
      >
        {/* Top Section - Category */}

        {/* Bottom Section - Content */}
        <div className="space-y-1 ">
          <h3 className="font-bold leading-tight text-lg">{item.title}</h3>
        </div>

        {/* Center Hover Indicator */}
      </div>

      {/* Subtle border glow effect */}
      <div className="absolute inset-0 rounded-xl    transition-colors duration-300 pointer-events-none" />
    </div>
  );
}
