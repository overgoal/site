import React from "react";
import HomeSection from "../components/sections/HomeSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import TimelineSection from "../components/sections/TimelineSection";
import HorizontalGallerySection from "../components/sections/HorizontalGallerySection";
import GameSection from "../components/sections/GameSection";
import Social from "../components/sections/Social";
import TeamSection from "../components/sections/TeamSection";
import ContactSection from "../components/sections/ContactSection";


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
      <ContactSection />
    </>
  );
}
