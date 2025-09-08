"use client";
import React, { useRef, useState } from "react";
import { CyberpunkContainer } from "@/components/cyberpunk-container";
import HorizontalGalleryItem from "./HorizontalGalleryItem";
import { galleryData } from "./data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollTween, setScrollTween] = useState<gsap.core.Tween | null>(null);

  useGSAP(() => {
    if (
      !containerRef.current ||
      !scrollContainerRef.current ||
      !titleRef.current
    )
      return;

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

    // Create infinite horizontal scroll animation (desktop only)
    const createScrollAnimation = () => {
      // Check if on mobile or user prefers reduced motion
      const isMobile = window.innerWidth < 768;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (isMobile || prefersReducedMotion) {
        return; // Skip animation on mobile
      }

      const containerWidth = scrollContainerRef.current!.scrollWidth;

      // Duplicate items for seamless loop
      const items = gsap.utils.toArray(".gallery-item");
      const totalItems = items.length;

      // Create the scroll animation
      const tween = gsap.to(scrollContainerRef.current, {
        x: -(containerWidth / 2), // Move by half the width (since we duplicated)
        duration: totalItems * 3, // Slower on desktop
        ease: "none",
        repeat: -1,
        paused: false,
      });

      setScrollTween(tween);
      return tween;
    };

    // Create animation after a short delay to ensure DOM is ready
    const timer = setTimeout(createScrollAnimation, 100);

    return () => {
      clearTimeout(timer);
      if (scrollTween) {
        scrollTween.kill();
      }
    };
  }, []);

  // Handle hover to pause/resume animation
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (scrollTween) {
      scrollTween.pause();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (scrollTween) {
      scrollTween.resume();
    }
  };

  // Duplicate items for seamless infinite scroll
  const duplicatedData = [...galleryData, ...galleryData];

  return (
    <section
      ref={containerRef}
      className="w-full relative  bg-gradient-to-b from-transparent via-black/10 to-transparent"
    >
      <CyberpunkContainer className="w-full relative">
        {/* Header */}
        <div className="text-center mb-16">
          <CyberpunkContainer
            borderConfig={{
              topLeft: true,
              topRight: true,
              bottomLeft: false,
              bottomRight: false,
            }}
            className="inline-block px-8 py-4"
          >
            <div
              ref={titleRef}
              className="flex flex-col items-center space-y-4"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                Current State
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <p className="text-white/70 text-lg max-w-2xl">
                Overgoal v0.1. Created at Dojo Game-Jam 2025
              </p>
            </div>
          </CyberpunkContainer>
        </div>

        {/* Gallery Container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/50 to-transparent z-10 pointer-events-none" />

          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex items-center py-6"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          > 
            {duplicatedData.map((item) => (
              <div key={`${item.id}`} className="gallery-item">
                <HorizontalGalleryItem key={`${item.id}`} item={item}  />
              </div>
            ))}
          </div>

          {/* Pause Indicator */}
          <div
            className={`absolute top-4 right-4 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-lg border border-white/20 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center space-x-2 text-white text-sm">
              <span className="font-chakra">Paused</span>
            </div>
          </div>
        </div>
      </CyberpunkContainer>
    </section>
  );
}
