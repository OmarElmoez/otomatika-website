import { Stats, CTA, FeaturesSection, VortexDemo } from "@/components";
import { useParams } from "react-router-dom";
import PROJECTS_DATA  from "@/constants/projects";
import { HeroParallax } from "@/components/ui/hero-parallax";

const Project = () => {

  const {projectName} = useParams();

  const projectData = PROJECTS_DATA[projectName as keyof typeof PROJECTS_DATA];

  return (
    <div className="bg-white dark:bg-black">
      <HeroParallax heroData={projectData.hero} />

      <FeaturesSection />

      <VortexDemo />

      <Stats />

      <CTA />
    </div>
  );
};

export default Project;
