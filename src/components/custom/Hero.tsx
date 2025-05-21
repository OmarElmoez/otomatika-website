import { SparklesCore } from "../ui/sparkles.tsx"
import HeroImage from "@/assets/webnwell-hero-img.png"

const Hero = () =>  {
  return (
    <div className="h-[30rem] w-full bg-black flex flex-row items-center justify-between overflow-hidden rounded-md p-8">
      <div className="flex flex-col items-center justify-center w-1/2 h-full">
        <div className="flex flex-col items-center justify-center flex-1">
          <h1 className="md:text-6xl text-3xl lg:text-8xl font-bold text-center text-white relative z-20">Webnwell</h1>
          <div className="w-full max-w-[30rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center p-4">
        <img
          src={HeroImage}
          alt="Webnwell Showcase"
          className="rounded-lg border-2 border-indigo-500/50 shadow-lg shadow-indigo-500/20 max-w-full h-auto"
        />
      </div>
    </div>
  )
}

export default Hero;
