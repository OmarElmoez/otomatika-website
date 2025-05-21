import { DotBackground, FloatingDockDemo, TrustedBySection, AnimatedTestimonialsDemo, GlobeDemo, CompareDemo, VortexDemo } from "../components";
import EmptyFile from "@/assets/empty-file.png"
import PaperClip from "@/assets/paper_clip.webp"
import { FbLogo, LinkedInLogo, GoogleAdsLogo } from "../assets/logos";

const Home = () => {

  return (
    <>
      <section className="container mx-auto md:h-[912px] h-[710px] p-4 relative rounded-[35px] border border-[#E6E6E6] mt-5 overflow-hidden">
        <DotBackground />
        <div className="absolute bottom-[-54px] left-[-71px] rotate-[26deg]">
          <img src={EmptyFile} alt="file" />
          <div className="absolute inset-0 flex items-start justify-center pt-[50px]">
            <h3 className="text-xl font-bold text-gray-800">Social Media Marketing</h3>
          </div>
          <div className="absolute left-[60px] top-[90px] transform w-16 h-16">
            <img src={FbLogo} alt="facebook" />
          </div>
          <div className="absolute right-[50px] top-[100px] transform w-16 h-16">
            <img src={LinkedInLogo} alt="linkedin" />
          </div>
          <div className="absolute left-[140px] bottom-[70px] transform w-16 h-16">
            <img src={GoogleAdsLogo} alt="google ads" />
          </div>
        </div>
        <div className="absolute bottom-[-54px] right-[-55px] rotate-[-30deg]">
          <img src={EmptyFile} alt="file" />
          <img src={PaperClip} alt="paper clip" className="absolute left-5 -top-10 font-medium z-10 h-20 w-20 aspect-square" />
        </div>
      <FloatingDockDemo />
      </section>

      <TrustedBySection />

      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-zinc-800 dark:text-zinc-100">
          Testimonials
        </h2>
        <p className="text-center text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          See what our clients have to say about us
        </p>
        <AnimatedTestimonialsDemo />
      </div>

      <GlobeDemo />

      <VortexDemo />

      <CompareDemo />

    </>
  )
}

export default Home
