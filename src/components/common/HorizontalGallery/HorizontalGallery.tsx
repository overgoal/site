"use client";
import React, { useRef, useState } from "react";
import { CyberpunkContainer } from "@/components/cyberpunk-container";
import HorizontalGalleryItem from "./HorizontalGalleryItem";
import { galleryData } from "./data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const duplicatedData = [...galleryData, ...galleryData];


export default function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollTween, setScrollTween] = useState<gsap.core.Tween | null>(null);
  const isMobile = useRef<boolean>(false);


  useGSAP(() => {
    isMobile.current = window.innerWidth < 768;
    if (
      !containerRef.current ||
      !scrollContainerRef.current ||
      !titleRef.current
    ) {
      return;
    }

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

    // Create infinite horizontal scroll animation only when section is in viewport
    const createScrollAnimation = () => {
      const containerWidth = scrollContainerRef.current!.scrollWidth;
      const items = gsap.utils.toArray(".gallery-item");
      const totalItems = items.length;

      // Create the scroll animation (initially paused)
      const tween = gsap.to(scrollContainerRef.current, {
        x: -(containerWidth / 2), // Move by half the width (since we duplicated)
        duration: totalItems * 3, // Slower on desktop
        ease: "none",
        repeat: -1,
        paused: true, // Start paused
      });

      setScrollTween(tween);
      return tween;
    };

    // Set up ScrollTrigger to control animation based on viewport
    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%", // Start when section is 80% from top of viewport
      end: "bottom 20%", // End when section is 20% from bottom of viewport
      onEnter: () => {
        // Section enters viewport - start animation
        if (!scrollTween) {
          const timer = setTimeout(() => {
            const tween = createScrollAnimation();
            if (tween && !isHovered) {
              tween.play();
            }
          }, 100);
          return () => clearTimeout(timer);
        } else if (!isHovered) {
          scrollTween.play();
        }
      },
      onLeave: () => {
        // Section leaves viewport - pause animation
        if (scrollTween) {
          scrollTween.pause();
        }
      },
      onEnterBack: () => {
        // Section re-enters viewport from below - resume animation
        if (scrollTween && !isHovered) {
          scrollTween.play();
        }
      },
      onLeaveBack: () => {
        // Section leaves viewport from top - pause animation
        if (scrollTween) {
          scrollTween.pause();
        }
      },
    });

    return () => {
      // Cleanup
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
      if (scrollTween) {
        scrollTween.kill();
      }
    };
  }, [isHovered]); // Include isHovered in dependencies

  // Handle hover to pause/resume animation
  const handleMouseEnter = () => {
    if(isMobile.current) return;
    if(isMobile) return;
    setIsHovered(true);
    if (scrollTween) {
      scrollTween.pause();
    }
  };

  const handleMouseLeave = () => {
    if(isMobile.current) return;
    setIsHovered(false);
    // Only resume if the section is in viewport
    if (scrollTween && containerRef.current && ScrollTrigger.isInViewport(containerRef.current, 0.2)) {
      scrollTween.play();
    }
  };

  // Duplicate items for seamless infinite scroll

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
            {duplicatedData.map((item, index) => (
              <div key={`${item.id}-${index}`} className="gallery-item">
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
            <div className="hidden md:flex items-center space-x-2 text-white text-sm">
              <span className="font-chakra">Paused</span>
            </div>
          </div>
        </div>
      </CyberpunkContainer>
    </section>
  );
}
