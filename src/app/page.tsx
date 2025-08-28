import React from "react";
import HomeSection from "./test/components/HomeSection";
import FeaturesSection from "./test/components/FeaturesSection";
import TimelineSection from "./test/components/TimelineSection";
import HorizontalGallerySection from "./test/components/HorizontalGallerySection";
import GameSection from "./test/components/GameSection";
import Social from "./test/components/Social";
import TeamSection from "./test/components/TeamSection";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <HomeSection />
      <GameSection />
      <FeaturesSection />
      <TimelineSection />
      <HorizontalGallerySection />
      <Social />
      <TeamSection />
    </>
  );
}
