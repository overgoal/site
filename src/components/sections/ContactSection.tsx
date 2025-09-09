import React from "react";
import { CyberpunkContainer } from "@/components/cyberpunk-container";
import { SOCIAL_LINKS } from "@/components/constants";
import Link from "next/link";
import Image from "next/image";
import { TwitterIcon, GitHubIcon, DiscordIcon } from "@/components/icons/icons";

const iconMap = {
  TwitterIcon,
  GitHubIcon,
  DiscordIcon,
} as const;

export default function ContactSection() {
  return (
    <CyberpunkContainer className="relative py-16 md:py-24 lg:py-32 flex flex-col gap-6 md:gap-8 lg:gap-12 justify-center items-center">
      {/* Background NPC Image - Hidden on mobile, visible on larger screens */}
      {/* <div className="hidden md:block  absolute top-0 -left-32 lg:-left-30 ">
        <Image
          src="/Npc.png"
          alt="Contact background"
          className="object-contain -rotate-15 hover:scale-110 transition-all duration-300 hover:rotate-0"
          width={150}
          height={150}
        />
      </div> */}

      {/* Content Container */}
      <div className="flex flex-col items-center justify-center gap-3 md:gap-4 px-4 md:px-8 lg:px-12">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white/80 text-center">
          Join the community.
        </h2>
        <p className="text-white/80 text-center mb-6 md:mb-8 lg:mb-12 text-sm md:text-base lg:text-lg font-chakra text-pretty max-w-md md:max-w-lg lg:max-w-xl">
          Follow us on our social media platforms to stay updated with the
          latest news and updates.
        </p>
      </div>

      {/* Social Links */}
      <div className="flex flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8">
        {SOCIAL_LINKS.map((link, index) => {
          const IconComponent = iconMap[link.icon as keyof typeof iconMap];
          return (
            <Link key={index} href={link.href} target="_blank">
              <IconComponent className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer hover:scale-110 transition-all duration-300" />
            </Link>
          );
        })}
      </div>
    </CyberpunkContainer>
  );
}
