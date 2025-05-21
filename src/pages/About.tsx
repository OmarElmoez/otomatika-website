import { DotBackground, CTA } from "@/components";
import ProcessStep from "@/components/custom/ProcessStep.tsx";

const About = () => {
  return (
    <div className="bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About Our Agency
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mb-8">
            We're a team of passionate marketers and creatives dedicated to transforming your digital presence and driving real business results.
          </p>
        </div>
      </section>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Process</h2>
        <div className="space-y-8">
          <ProcessStep
            number={1}
            title="Discovery & Research"
            description="We began with a comprehensive analysis of the client's needs, market position, and competitive landscape."
          />
          <ProcessStep
            number={2}
            title="Strategy Development"
            description="Based on our findings, we created a tailored strategy that aligned with the client's business objectives."
          />
          <ProcessStep
            number={3}
            title="Implementation"
            description="We executed the strategy across multiple channels, continuously optimizing based on real-time data."
          />
          <ProcessStep
            number={4}
            title="Analysis & Refinement"
            description="We measured results against KPIs, refined our approach, and delivered comprehensive reporting."
          />
        </div>
      </div>

      {/* Our Mission */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our mission is to empower businesses with innovative marketing solutions that drive growth and create meaningful connections with their audience.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in transparency, data-driven strategies, and creative excellence to deliver exceptional results for our clients.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Our Values</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Innovation in everything we do</li>
                <li>• Integrity and transparency</li>
                <li>• Results-driven approach</li>
                <li>• Client partnerships, not just services</li>
                <li>• Continuous learning and improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-gray-200 dark:bg-gray-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Team Member {i}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">Position</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="container mx-auto h-[550px] p-4 relative rounded-[35px] border border-[#E6E6E6] my-16 overflow-hidden">
        <DotBackground />
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default About;
