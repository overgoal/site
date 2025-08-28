import React from "react";
import HomeSection from "./components/HomeSection";
import FeaturesSection from "./components/FeaturesSection";
import TimelineSection from "./components/TimelineSection";
import MilestonesSection from "./components/MilestonesSection";
import HorizontalGallerySection from "./components/HorizontalGallerySection";
import GameSection from "./components/GameSection";
import StatusSection from "./components/StatusSection";
import Social from "./components/Social";
import TeamSection from "./components/TeamSection";

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

      {/* <StatusSection /> */}
    </>
  );
}
