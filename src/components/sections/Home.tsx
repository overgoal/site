import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import BackgroundBlur from "../BackgroundBlur";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="w-full h-full flex items-center flex-col justify-start relative "
    >
      <BackgroundBlur />
      <div className="relative w-full h-12  flex items-center justify-center bg-white z-100">
        <span className="text-black/80 text-xl font-chakra uppercase font-bold">
          The footbal has changed
        </span>
      </div>
      <div className="flex items-start flex-col justify-start w-full text-center z-100">
        <h1 className="text-[19.5vw] font-bold uppercase text-center text-white leading-56 tracking-tighter">
          Overgoal
        </h1>
      </div>
      <div className="relative w-full h-64  flex items-center justify-center bg-white/30 z-100 mt-6">
        <div className="z-100 w-full flex flex-col items-center justify-center gap-8  ">
          {/* <h2 className="text-white/80 text-xl font-chakra uppercase font-bold">
          more than a match
        </h2> */}
          <div className="flex flex-col items-center bg-white/10 justify-center font-chakra">
            <Link
              href="https://www.overgoal.com"
              target="_blank"
              className="border border-white/10"
            >
              <Button className="bg-white text-xl text-black hover:bg-white/80 cursor-pointer">
                Play now
              </Button>
            </Link>
          </div>

          <div className="flex flex-row items-center justify-center gap-6">
            <Image
              src="/dojo-icon.svg"
              alt="home-bg"
              width={50}
              height={50}
              className="object-contain"
            />
            <Image
              src="/cart.png"
              alt="home-bg"
              width={50}
              height={50}
              className="object-contain"
            />
            <Image
              src="/starknet.png"
              alt="home-bg"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
