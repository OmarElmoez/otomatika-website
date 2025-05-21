import { Compare } from "../ui/compare.tsx";
import FirstImage from "@/assets/old-way-to-lanuch-ads.png"
import SecondImage from "@/assets/new-way-to-lanuch-ads.png"

export const CompareDemo = () => {
  return (
    <div className="container mx-auto p-6 border rounded-3xl dark:bg-transparent bg-neutral-100 border-neutral-200 dark:border-neutral-800 mb-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-white">Code Comparison</h2>
          <p className="text-muted-foreground text-[#e4e4e4]">
            Slide to compare the problem and solution. This interactive comparison helps you understand the differences
            between problematic code and its optimized solution.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
              <span className="font-medium text-[#ccc]">Left: Problem Code</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="font-medium text-[#ccc]">Right: Optimized Solution</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-[#ddd] dark:text-[#444] mt-4">
            Hover or drag to reveal the differences between the two code samples.
          </p>
        </div>
        <div className="flex justify-center">
          <Compare
            firstImage={FirstImage}
            secondImage={SecondImage}
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
            slideMode="hover"
          />
        </div>
      </div>
    </div>
  )
}

export default CompareDemo;