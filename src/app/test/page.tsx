import React from "react";
import HomeSection from "./components/HomeSection";
import FeaturesSection from "./components/FeaturesSection";
import TimelineSection from "./components/TimelineSection";
import HorizontalGallerySection from "./components/HorizontalGallerySection";
import GameSection from "./components/GameSection";
import Social from "./components/Social";
import TeamSection from "./components/TeamSection";


export default function page() {
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
