import { cn } from "@/lib/utils.ts";
import { ContainerTextFlipDemo, TypewriterEffectSmoothDemo, AnimatedModalDemo } from "@/components";


const DotBackground = () => {
  return (
    <div className="relative flex flex-col h-[50rem] w-full items-center justify-center gap-6 bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      {/* <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        Backgrounds
      </p> */}
      <div className="max-w-2xl mx-auto p-4 mt-16">
        <h1 className="relative grid gap-4 z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          <span>Make your Ads be</span>
          <div>10x <ContainerTextFlipDemo /></div>
        </h1>
      </div>
      <AnimatedModalDemo />
      <TypewriterEffectSmoothDemo />
    </div>
  );
};

export default DotBackground;
