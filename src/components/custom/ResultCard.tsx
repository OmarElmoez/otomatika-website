import { useEffect, useRef, useState } from "react";

interface ResultCardProps {
  value: number;
  label: string;
  duration?: number; // in ms
}

const ResultCard = ({ value, label, duration = 2000 }: ResultCardProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const startTimestamp = useRef<number | null>(null);

  useEffect(() => {
    let animationFrame: number;
    const step = (timestamp: number) => {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const progress = Math.min((timestamp - startTimestamp.current) / duration, 1);
      setDisplayValue(Math.floor(progress * value));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
      <div className="text-4xl font-bold text-primary-700 dark:text-cyan-400 mb-2">
        {displayValue}
        <span className="text-lg align-top ml-1">%</span>
      </div>
      <div className="text-gray-700 dark:text-gray-300 text-lg font-medium">{label}</div>
    </div>
  );
};

export default ResultCard; 