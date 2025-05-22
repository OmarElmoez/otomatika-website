import { StickyScroll } from "../ui/sticky-scroll-reveal";
import HeroImg from "@/assets/webnwell-hero-img.png"
import BlogImg from "@/assets/Blog-thumbnail-1.png"
import { Zap, Brain, Factory, BarChart } from "lucide-react";

const content = [
  {
    title: "Automation Excellence",
    description:
      "At Otomatika, we specialize in cutting-edge automation solutions that transform how businesses operate. Our systems streamline workflows, reduce manual intervention, and increase operational efficiency across industries.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src={HeroImg}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Automation illustration"
        />
      </div>
    ),
    cta: {
      text: "Explore Automation Solutions",
      icon: Zap
    }
  },
  {
    title: "Intelligent Systems",
    description:
      "Our AI-powered systems learn and adapt to your business needs. With Otomatika's intelligent automation, your processes become smarter over time, identifying patterns and optimizing operations without constant reprogramming.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--violet-500),var(--indigo-500))] text-white">
        <img
          src={BlogImg}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="AI systems visualization"
        />
      </div>
    ),
    cta: {
      text: "Discover AI Solutions",
      icon: Brain
    }
  },
  {
    title: "Industry Solutions",
    description:
      "From manufacturing to healthcare, Otomatika delivers tailored automation solutions for your specific industry challenges. Our expertise spans multiple sectors, providing specialized tools that address your unique operational requirements.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <img
          src={HeroImg}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Industry solutions diagram"
        />
      </div>
    ),
    cta: {
      text: "Find Your Industry Solution",
      icon: Factory
    }
  },
  {
    title: "Proven Results",
    description:
      "Our clients report an average 40% increase in productivity after implementing Otomatika solutions. With reduced errors, faster processing times, and lower operational costs, the return on investment is clear and measurable.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--teal-500))] text-white">
        <img
          src={BlogImg}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Results graph"
        />
      </div>
    ),
    cta: {
      text: "See Success Stories",
      icon: BarChart
    }
  },
]
const OtomatikaScrollReveal = () => {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}

export default OtomatikaScrollReveal;
