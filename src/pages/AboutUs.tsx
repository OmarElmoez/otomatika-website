import { CTA, AboutUsHero, ServicesSection } from "@/components";
import Gallery from "../components/custom/Gallery.tsx";

const AboutUs = () => {
  return (
    <>
      <AboutUsHero />

      <h2 className="text-3xl font-bold mt-16 text-gray-900 dark:text-white mb-8 text-center">Meet Our Team</h2>
      <Gallery />

      <h2 className="text-3xl font-bold mt-16 text-gray-900 dark:text-white mb-8 text-center">Our Services</h2>
      <ServicesSection />

      {/* CTA Section */}
      <CTA />
    </>
  );
};

export default AboutUs;
