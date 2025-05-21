import React from 'react';
import { CardStack } from '../components/CardStack'; // Assuming CardStack is in components folder

const AgencyPage: React.FC = () => {
  // Placeholder data for testimonials
  const testimonials = [
    {
      id: 1,
      name: 'Agency One',
      designation: 'CEO',
      content: 'Working with this company has transformed our workflow. Highly recommended!',
    },
    {
      id: 2,
      name: 'Agency Two',
      designation: 'CTO',
      content: 'The tools and support provided are exceptional. We couldn\'t be happier.',
    },
    {
      id: 3,
      name: 'Agency Three',
      designation: 'Director',
      content: 'A game-changer for our agency. The results speak for themselves.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Empowering Agencies</h1>
        <p className="text-xl mb-8">Discover how our solutions can elevate your agency's performance.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">Get Started</button>
      </section>

      {/* Agency Logo Grid */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold text-center mb-8">Trusted by Leading Agencies</h2>
        <div className="flex justify-center flex-wrap gap-8">
          {['Agency 1', 'Agency 2', 'Agency 3', 'Agency 4'].map((agency) => (
            <div key={agency} className="w-32 h-16 bg-gray-200 flex items-center justify-center rounded">
              {agency}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Card Stack */}
      <section className="py-20">
        <h2 className="text-2xl font-semibold text-center mb-8">What Our Clients Say</h2>
        <div className="flex justify-center">
          <CardStack items={testimonials} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-8">Why Choose Us</h2>
        <div className="flex justify-center flex-wrap gap-8">
          {['Feature 1', 'Feature 2', 'Feature 3'].map((feature) => (
            <div key={feature} className="w-64 p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">{feature}</h3>
              <p>Description of {feature.toLowerCase()}.</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Agency?</h2>
        <p className="text-xl mb-8">Join the ranks of successful agencies today.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">Contact Us</button>
      </section>
    </div>
  );
};

export default AgencyPage;
