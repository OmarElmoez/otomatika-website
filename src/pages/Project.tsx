import { Stats, CTA, FeaturesSection, ProjectHero, VortexDemo } from "@/components";

// import { useParams } from "react-router-dom";


const Project = () => {

  // const {projectName} = useParams();

  return (
    <div className="bg-white dark:bg-black">
      <ProjectHero />

      {/* Project Details Tabs */}
      {/*<section className="py-12 px-4 bg-gray-50 dark:bg-gray-900">*/}
      {/*  <div className="max-w-6xl mx-auto">*/}
      {/*    <div className="grid md:grid-cols-2 gap-8">*/}
      {/*      <div>*/}
      {/*        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h2>*/}
      {/*        <p className="text-gray-600 dark:text-gray-300 mb-4">*/}
      {/*          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,*/}
      {/*          pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit.*/}
      {/*        </p>*/}
      {/*        <p className="text-gray-600 dark:text-gray-300">*/}
      {/*          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in*/}
      {/*          erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue.*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">*/}
      {/*        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Project Goals</h3>*/}
      {/*        <ul className="space-y-2 text-gray-600 dark:text-gray-300">*/}
      {/*          <li>• Increase brand awareness by 50%</li>*/}
      {/*          <li>• Improve conversion rates by 25%</li>*/}
      {/*          <li>• Enhance user engagement across platforms</li>*/}
      {/*          <li>• Develop a cohesive marketing strategy</li>*/}
      {/*          <li>• Establish measurable KPIs for future campaigns</li>*/}
      {/*        </ul>*/}
      {/*      </div>*/}
      {/*    </div>*/}

      {/*    <div className="mt-12">*/}
      {/*      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Project Results</h2>*/}
      {/*      <div className="grid md:grid-cols-3 gap-6 mb-8">*/}
      {/*        <ResultCard*/}
      {/*          value={65}*/}
      {/*          label="Increase in Engagement"*/}
      {/*          duration={2000}*/}
      {/*        />*/}
      {/*        <ResultCard*/}
      {/*          value={42}*/}
      {/*          label="Conversion Rate"*/}
      {/*          duration={2500}*/}
      {/*        />*/}
      {/*        <ResultCard*/}
      {/*          value={89}*/}
      {/*          label="ROI"*/}
      {/*          duration={3000}*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      <FeaturesSection />

      {/* Project Gallery */}
      {/*<section className="py-16 px-4">*/}
      {/*  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Project Gallery</h2>*/}
      {/*  <Gallery/>*/}
      {/*</section>*/}

      <VortexDemo />

      <Stats />
      {/* CTA Section */}
      <CTA/>
    </div>
  );
};

export default Project;
