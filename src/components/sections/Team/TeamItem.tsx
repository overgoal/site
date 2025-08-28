import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Linkedin, Github, Globe } from "lucide-react";

type Props = {
  name: string;
  role: string;
  image: string;
  description: string;
  socials: {
    twitter: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
};

export default function TeamItem({
  name,
  role,
  image,
  description,
  socials,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-start gap-4 border-1 border-white/10  p-3 rounded-lg">
      <div className="flex flex-col items-center justify-center gap-1">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-base text-white/80 mb-2">{role}</p>
      </div>
      <Image src={image} alt={name} width={300} height={300} />
      <div className="flex flex-col items-center justify-between gap-2 h-full py-2">
        <p className=" text-base text-white/80 text-center my-4 md:my-2  px-24 md:px-0">
          {description}
        </p>
        <div className="flex flex-row items-center justify-center gap-4 ">
          {socials.twitter && (
            <Link href={socials.twitter} target="_blank">
              <Image
                src="/twitter.png"
                alt="Twitter"
                width={24}
                height={24}
                className="fill-white text-white bg-white"
              />
              {/* <Twitter className="w-6 h-6 cursor-pointer " /> */}
            </Link>
          )}
          {socials.linkedin && (
            <Link href={socials.linkedin} target="_blank">
              <Linkedin className="w-6 h-6 cursor-pointer " />
            </Link>
          )}
          {socials.github && (
            <Link href={socials.github} target="_blank">
              <Github className="w-6 h-6 cursor-pointer " />
            </Link>
          )}
          {socials.website && (
            <Link href={socials.website} target="_blank">
              <Globe className="w-6 h-6 cursor-pointer " />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
