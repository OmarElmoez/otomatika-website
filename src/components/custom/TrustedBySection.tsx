import { InfiniteMovingCards } from '../ui/infinite-moving-cards.tsx';
import { AllCompanyLogos } from '@/assets/logos';

export const TrustedBySection = () => {
  return (
    <section className="py-32 bg-white dark:bg-transparent">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-zinc-800 dark:text-zinc-100">
          Trusted By Industry Leaders
        </h2>
        <p className="text-center text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Join hundreds of companies who trust our services for their business needs
        </p>
        
        <div className="overflow-hidden">
          <InfiniteMovingCards 
            images={AllCompanyLogos}
            imageSize="large"
            speed="normal"
            className="py-4"
            pauseOnHover={false}
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection; 