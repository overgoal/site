"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CyberpunkContainer } from "@/components/cyberpunk-container";

gsap.registerPlugin(ScrollTrigger);

type Milestone = {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  highlights: string[];
  image: string;
  icon: string;
  gradient: string;
  borderColor: string;
  accentColor: string;
};

type Props = {
  milestone: Milestone;
  index: number;
};

export default function MilestoneItem({ milestone, index }: Props) {
  const itemRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!itemRef.current || !cardRef.current || !imageRef.current || !contentRef.current || !iconRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: itemRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Set initial states
    gsap.set([cardRef.current, imageRef.current, contentRef.current, iconRef.current], {
      opacity: 0,
      y: 60,
      scale: 0.9,
    });

    // Animate icon first
    tl.to(iconRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.7)",
    })
    // Then animate card with bounce effect
    .to(cardRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.3")
    // Stagger content and image
    .to([imageRef.current, contentRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.2,
    }, "-=0.5");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [milestone.id]);

  const isEven = index % 2 === 0;

  return (
    <div ref={itemRef} className="relative w-full py-16">
      {/* Connecting line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent hidden lg:block" />

      {/* Milestone dot with icon */}
      <div
        ref={iconRef}
        className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 ${milestone.gradient} rounded-full border-2 ${milestone.borderColor} items-center justify-center text-2xl top-8 z-20 ${index % 2 === 0 ? 'hidden lg:flex' : 'hidden lg:flex'}`}
      >
        {milestone.icon}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Content Section */}
          <div ref={contentRef} className={`flex flex-col space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
            <CyberpunkContainer
              borderConfig={{
                topLeft: true,
                topRight: true,
                bottomLeft: false,
                bottomRight: false,
              }}
              className="inline-flex items-center space-x-4 px-6 py-3"
            >
              <span className={`text-3xl ${milestone.accentColor}`}>{milestone.icon}</span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">{milestone.title}</h3>
                <p className="text-white/70 text-sm">{milestone.subtitle}</p>
              </div>
            </CyberpunkContainer>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className={`text-2xl font-bold ${milestone.accentColor}`}>{milestone.date}</span>
                <div className={`w-12 h-0.5 ${milestone.accentColor.replace('text-', 'bg-')}`} />
              </div>

              <p className="text-white/90 text-lg leading-relaxed">
                {milestone.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-white font-semibold text-base">Key Highlights:</h4>
                <ul className="space-y-2">
                  {milestone.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-white/80">
                      <span className={`w-2 h-2 rounded-full ${milestone.accentColor.replace('text-', 'bg-')}`} />
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div ref={imageRef} className={`relative ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
            <div className={`relative overflow-hidden rounded-xl border ${milestone.borderColor} bg-gradient-to-br ${milestone.gradient}`}>
              <Image
                src={milestone.image}
                alt={milestone.title}
                width={500}
                height={350}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />

              {/* Overlay gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t ${milestone.gradient} opacity-20`} />

              {/* Floating date badge */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/20">
                <span className={`text-sm font-bold ${milestone.accentColor}`}>{milestone.date}</span>
              </div>
            </div>

            {/* Achievement indicator for Dojo win */}
            {milestone.id === 2 && (
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center text-4xl animate-pulse">
                🏆
              </div>
            )}

            {/* Future indicator for Dev Connect */}
            {milestone.id === 3 && (
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-2xl border-2 border-green-500/50">
                🚀
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
