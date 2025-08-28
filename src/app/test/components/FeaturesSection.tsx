import { CyberpunkContainer } from "@/components/cyberpunk-container";
import FeaturesItem from "@/components/sections/Features/FeaturesItem";

export default function FeaturesSection() {
  return (
    <CyberpunkContainer className="w-full relative  pb-12 ">
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
          <h2 className="text-white/80 px-0 md:px-12 text-center text-3xl md:text-5xl font-bold my-6 z-20">
            Build your own story{" "}
          </h2>
        </CyberpunkContainer>
        <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-2 w-full mt-2 px-6 md:px-24 gap-y-24 gap-x-12">
          <FeaturesItem />
        </div>
      </div>
    </CyberpunkContainer>
  );
}
