"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TimelineItemType = {
  id: number;
  title: string;
  description: string;
  image: string;
  layout: "image-left" | "image-right" | "center";
};

type Props = {
  item: TimelineItemType;
};

export default function TimelineItem({ item }: Props) {
  const itemRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (
      !itemRef.current ||
      !imageRef.current ||
      !contentRef.current ||
      !timelineRef.current
    )
      return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: itemRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Set initial states
    gsap.set([imageRef.current, contentRef.current, timelineRef.current], {
      opacity: 0,
      y: 50,
    });

    // Animate timeline dot first
    tl.to(timelineRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    })
      // Then animate image and content together
      .to(
        [imageRef.current, contentRef.current],
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
        },
        "-=0.3"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [item.id]);

  const renderLayout = () => {
    switch (item.layout) {
      case "image-left":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div ref={imageRef} className="relative">
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="w-3/5 object-contain rounded-lg"
              />
            </div>
            <div
              ref={contentRef}
              className="flex flex-col justify-center ml-12 space-y-4"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        );

      case "image-right":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div
              ref={contentRef}
              className="flex flex-col justify-center space-y-4 lg:order-1 order-2"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
            <div ref={imageRef} className="relative lg:order-2 order-1">
              <Image
                src={"/tournam_tro.png"}
                alt={item.title}
                width={100}
                height={100}
                className="w-3/5 object-contain rounded-lg"
              />
            </div>
          </div>
        );

      case "center":
        return (
          <div className="flex flex-col items-center justify-center text-center space-y-8">
            <div ref={imageRef} className="relative ">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={600}
                className=" object-cover rounded-lg"
              />
            </div>
            <div
              ref={contentRef}
              className="flex flex-col items-center space-y-4 max-w-2xl"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                {item.title}
              </h3>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div ref={itemRef} className="relative w-full py-10">
      {/* Timeline line and dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent hidden lg:block" />

      <div
        ref={timelineRef}
        className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-2 border-white/20 top-8 hidden lg:block"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {renderLayout()}
      </div>
    </div>
  );
}
