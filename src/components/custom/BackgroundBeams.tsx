import { BackgroundBeams } from "../ui/background-beams.tsx";
import { ContainerTextFlipDemo, ResizableNavbar, TypewriterEffectSmoothDemo } from "@/components";
import AnimatedModalDemo from "@/components/custom/AnimatedModal.tsx";

const BackgroundBeamsDemo = ()=> {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-between antialiased">
      <ResizableNavbar />
      <div className="max-w-2xl mx-auto p-4 mt-16">
        <h1 className="relative grid gap-4 z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          <span>Make your Ads be</span>
          <div>10x <ContainerTextFlipDemo /></div>
        </h1>
      </div>
      <AnimatedModalDemo />
      <TypewriterEffectSmoothDemo />
      <BackgroundBeams />
    </div>
  );
}

export default BackgroundBeamsDemo;
