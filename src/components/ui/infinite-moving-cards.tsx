import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export interface LogoItem {
  src: string;
  alt: string;
}

export const InfiniteMovingCards = ({
  images,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  imageClassName,
  imageSize = "medium",
  showTooltip = true,
}: {
  images: LogoItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  imageClassName?: string;
  imageSize?: "small" | "medium" | "large";
  showTooltip?: boolean;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  
  const [start, setStart] = useState(false);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  const getImageSizeClass = () => {
    switch (imageSize) {
      case "small":
        return "h-8 max-h-8";
      case "large":
        return "h-16 max-h-16";
      case "medium":
      default:
        return "h-12 max-h-12";
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-12 py-6 items-center",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {images.map((image, idx) => (
          <li
            className="relative flex items-center justify-center px-6 group"
            key={`${image.alt}-${idx}`}
          >
            <div className={cn("relative flex items-center justify-center", imageClassName)}>
              <img
                src={image.src}
                alt={image.alt}
                className={cn(
                  "w-auto object-contain transition-all duration-300", 
                  getImageSizeClass()
                )}
                loading="lazy"
              />
              {showTooltip && (
                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-full mb-2 transform -translate-x-1/2 left-1/2 pointer-events-none">
                  <div className="bg-zinc-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                    {image.alt}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full">
                      <div className="border-solid border-t-zinc-800 border-t-4 border-x-transparent border-x-4 border-b-0 h-0 w-0" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
