import React from "react";
import { teamData } from "@/components/sections/Team/data";
import TeamItem from "@/components/sections/Team/TeamItem";
import { CyberpunkContainer } from "@/components/cyberpunk-container";

export default function TeamSection() {
  return (
    <CyberpunkContainer className="w-full relative ">
      <div className="border-t border-white/10 pt-12 max-w-4xl mx-auto" />

      <h2 className="text-5xl font-bold text-white/80 text-center mb-12  ">
        Meet the Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-12">
        {teamData.map((member) => (
          <TeamItem
            key={member.name}
            {...member}
            image={member.image}
            description={member.description}
            socials={member.socials}
          />
        ))}
      </div>
    </CyberpunkContainer>
  );
}
