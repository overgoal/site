import { CyberpunkContainer } from "@/components/cyberpunk-container";
import FeaturesItem from "@/components/sections/Features/FeaturesItem";

export default function FeaturesSection() {
  return (
    <CyberpunkContainer className="w-full relative  pb-8 ">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <CyberpunkContainer
          borderConfig={{
            topLeft: true,
            topRight: true,
            bottomLeft: false,
            bottomRight: false,
          }}
          className="text-white/80 px-12 text-center text-5xl font-bold my-6 z-20"
        >
          <h2 className="text-white/80 px-0 md:px-8 text-center text-2xl md:text-4xl font-bold my-2 md:my-4 z-20">
            Build your own story{" "}
          </h2>
        </CyberpunkContainer>
        <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-2 w-full mt-1 md:mt-2 px-6 md:px-16 gap-y-4 md:gap-y-8 gap-x-8">
          <FeaturesItem />
        </div>
      </div>
    </CyberpunkContainer>
  );
}
