import React from 'react';
import { motion } from 'framer-motion';

type Card = {
  id: number;
  name: string;
  designation: string;
  content: string;
};

interface CardStackProps {
  items: Card[];
}

export const CardStack: React.FC<CardStackProps> = ({ items }) => {
  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96">
      {items.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute dark:bg-black bg-white h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
          style={{
            transformOrigin: 'top center',
          }}
          animate={{
            top: index * -10,
            scale: 1 - index * 0.06,
            zIndex: items.length - index,
          }}
        >
          <div className="font-normal text-neutral-700 dark:text-neutral-200">
            {card.content}
          </div>
          <div>
            <p className="text-neutral-500 font-medium dark:text-white">
              {card.name}
            </p>
            <p className="text-neutral-400 font-normal dark:text-neutral-200">
              {card.designation}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}; 