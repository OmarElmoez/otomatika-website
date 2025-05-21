import { TypewriterEffectSmooth } from "../ui/typewriter-effect.tsx";
const TypewriterEffectSmoothDemo = () => {
  const words = [
    {
      text: "Built",
    },
    {
      text: "for",
    },
    {
      text: "Media",
    },
    {
      text: "Buyers",
    },
    {
      text: "by",
    },
    {
      text: "Media",
    },
    {
      text: "Buyers",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

export default TypewriterEffectSmoothDemo;