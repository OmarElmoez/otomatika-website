"use client"
import { useRef } from "react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// CSS for the infinite scroll animation
const scrollStyles = `
  @keyframes scrollY {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50%);
    }
  }

  .infinite-scroll-content {
    will-change: transform;
  }
`

type Testimonial = {
  quote: string
  name: string
  title: string
  avatar?: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "It helps us achieve what was once thought impossible. The AI's capabilities are groundbreaking and have opened new avenues for us.",
    name: "Kathy Adams",
    title: "Innovation Lead",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "I can't imagine going back to how things were before this AI. It has not only improved my work efficiency but also my daily life.",
    name: "Cathy Lee",
    title: "Product Manager",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The results are always impressive. This AI has helped us to not only meet but exceed our performance targets.",
    name: "Jack Brown",
    title: "Performance Manager",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The best investment we've made in years. It's not just a tool; it's a game-changer that has propelled our business forward.",
    name: "Nathan Hill",
    title: "Investment Analyst",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "A robust solution that fits perfectly into our workflow. It has enhanced our team's capabilities and allowed us to tackle more complex projects.",
    name: "Frank Moore",
    title: "Project Manager",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "A seamless integration into our daily tasks. It has enhanced our productivity and allowed us to focus on more strategic initiatives.",
    name: "Peter White",
    title: "Strategic Planner",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "It's a game-changer for our business. The insights it provides are invaluable and have driven substantial growth for us.",
    name: "Quinn Taylor",
    title: "Growth Manager",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "A must-have tool for any professional. It's revolutionized the way we approach problem-solving and decision-making.",
    name: "Ivy Wilson",
    title: "Business Consultant",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "This AI has transformed the way I work! It's like having a brilliant assistant who knows exactly what I need before I even ask.",
    name: "Alice Johnson",
    title: "Senior Software Engineer",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export const InfiniteTestimonials = ({
                                       className,
                                     }: {
  className?: string
}) => {
  // Split testimonials into three columns
  const third = Math.ceil(testimonials.length / 3)
  const firstColumn = testimonials.slice(0, third)
  const secondColumn = testimonials.slice(third, 2 * third)
  const thirdColumn = testimonials.slice(2 * third)

  return (
    <div className={cn("w-full overflow-hidden py-10", className)}>
      {/* Inject the CSS for the animation */}
      <style dangerouslySetInnerHTML={{ __html: scrollStyles }} />

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InfiniteColumn testimonials={firstColumn} speed={40} />
          <InfiniteColumn testimonials={secondColumn} speed={30} />
          <InfiniteColumn testimonials={thirdColumn} speed={35} />
        </div>
      </div>
    </div>
  )
}

const InfiniteColumn = ({
                          testimonials,
                          speed,
                        }: {
  testimonials: Testimonial[]
  speed: number
}) => {
  const columnRef = useRef<HTMLDivElement>(null)

  // Calculate animation duration from speed
  return (
    <div className="relative overflow-hidden" style={{ height: "600px" }} ref={columnRef}>
      {/* Top shadow overlay */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>

      <div 
        className="absolute top-0 left-0 right-0 infinite-scroll-content" 
        style={{ 
          animation: `scrollY ${speed}s linear infinite`,
        }}
      >
        {/* Original testimonials */}
        <div className="space-y-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={`original-${idx}`} testimonial={testimonial} />
          ))}
        </div>

        {/* Duplicated testimonials for seamless loop */}
        <div className="space-y-8 mt-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={`duplicate-${idx}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Bottom shadow overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
    </div>
  )
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-zinc-900 rounded-lg p-6 shadow-lg">
      <div className="flex items-center mb-4">
        <Avatar className="h-10 w-10 mr-3 border-2 border-zinc-700">
          <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
          <AvatarFallback className="bg-zinc-800 text-zinc-300">{testimonial.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-white">{testimonial.name}</p>
          <p className="text-sm text-zinc-400">{testimonial.title}</p>
        </div>
      </div>
      <p className="text-zinc-300 text-sm leading-relaxed">{testimonial.quote}</p>
    </div>
  )
}

const InfiniteTestimonialsDemo = () => {
  return (
    <div className="py-12 bg-black min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white">What our customers say</h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Don't just take our word for it — hear from some of our amazing customers
          </p>
        </div>
        <InfiniteTestimonials />
      </div>
    </div>
  )
}

export default InfiniteTestimonialsDemo;
