import Image from "next/image";
import React from "react";

export default function BackgroundBlur() {
  return (
    <>
      <Image
        src="/field.png"
        alt="home-bg"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-screen object-cover opacity-5"
      />
      <div className="absolute inset-0 z-10 w-full h-full flex flex-col items-center justify-start  backdrop-blur-sm p-5  bg-black/20"></div>
    </>
  );
}
