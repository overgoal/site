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
    artstation?: string;
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
        <p className=" text-base text-white/80 text-center my-4 md:my-2  px-4 md:px-0">
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
          {socials.artstation && (
            <Link href={socials.artstation} target="_blank">
              {/* ArtStation placeholder icon - replace with actual ArtStation icon */}
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="w-6 h-6 cursor-pointer"
              >
                <path d="M0 17.723l2.027 3.505h.001c.424.734 1.207 1.235 2.126 1.235h8.468l-.895-1.635H0zm21.897-9.42L14.91 2.289C14.485 1.555 13.702 1.054 12.785 1.054H3.894l.895 1.635H12.32l5.952 10.31H20.4c.919 0 1.703-.501 2.127-1.235.425-.734.425-1.636 0-2.37zM7.411 8.417l-1.635 2.834h3.27zm8.468-.001l-3.27 5.668L9.878 8.416z"/>
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
