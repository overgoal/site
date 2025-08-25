import React from "react";
import Image from "next/image";
import { CyberpunkContainer } from "@/components/cyberpunk-container";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function FeaturesItem({ title, description, image }: Props) {
  return (
    <div className="group/2 row-span-2 relative h-full  hover:overflow-visible transition-all duration-300 hover:z-50">
      <div className="w-full h-full group-hover/2:scale-110 transition-all duration-300 overflow-hidden rounded-lg flex flex-col items-center text-center justify-center ">
        <span className="text-white text-xl text-center  opacity-100 transition-all duration-300  w-full  backdrop-blur-sm py-4">
          {title}
        </span>
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
        <p className="text-white/80 bg-black/80 inset-0 h-full flex items-center px-10 justify-center absolute text-base text-center group-hover/2:text-white opacity-0 group-hover/2:opacity-100 transition-all duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}
