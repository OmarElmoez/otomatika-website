interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-700 dark:bg-cyan-500 text-white flex items-center justify-center text-2xl font-bold">
        {number}
      </div>
      <div>
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{title}</h4>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep; 