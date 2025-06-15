import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

const backgroundColors = [
  "#000000", // slate-900
  "#000000", // black
  "#000000", // neutral-900
];
// const linearGradients = [
//   "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
//   "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
//   "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
// ];

export const StickyScroll = ({
                               content,
                               contentClassName,
                             }: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    cta?: {
      text: string;
      icon: LucideIcon;
    };
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  // const [backgroundGradient, setBackgroundGradient] = useState(
  //   linearGradients[0],
  // );

  // useEffect(() => {
  //   setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  // }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="scroll-reveal relative flex h-[30rem] container mx-auto justify-between space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex flex-1 items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-10 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
              {item.cta && (
                <motion.button
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="mt-6 flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-sm font-medium text-white hover:from-cyan-600 hover:to-blue-600 transition-colors"
                >
                  <item.cta.icon className="h-4 w-4" />
                  {item.cta.text}
                </motion.button>
              )}
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        // style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-5 hidden flex-1 overflow-hidden rounded-md lg:block",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
