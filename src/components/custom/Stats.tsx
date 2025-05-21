import { cn } from "@/lib/utils"

const Stats = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-50">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Over the years, we've achieved remarkable results for our clients. Here's a snapshot of our success story
            through key metrics and achievements.
          </p>
        </div>
        <StatsGrid />
      </div>
    </section>
  )
}

export default Stats;

function StatsGrid() {
  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered to satisfied clients worldwide.",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Our clients rate their experience as excellent.",
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock assistance for all your needs.",
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "Bringing expertise and knowledge to every project.",
    },
    {
      number: "50+",
      label: "Team Members",
      description: "Dedicated professionals working on your projects.",
    },
    {
      number: "30+",
      label: "Countries Served",
      description: "Global reach with local understanding.",
    },
    {
      number: "200+",
      label: "Active Clients",
      description: "Ongoing partnerships with businesses of all sizes.",
    },
    {
      number: "1000+",
      label: "Positive Reviews",
      description: "Testimonials that speak to our quality and service.",
    },
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10">
      {stats.map((stat, index) => (
        <Stat key={stat.label} {...stat} index={index} />
      ))}
    </div>
  )
}

const Stat = ({
                number,
                label,
                description,
                index,
              }: {
  number: string
  label: string
  description: string
  index: number
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/stat dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800",
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/stat:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/stat:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="text-4xl font-bold mb-2 relative z-10 px-10 text-blue-600 dark:text-blue-400">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/stat:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/stat:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/stat:translate-x-2 transition duration-200 inline-block">{number}</span>
      </div>
      <div className="text-lg font-medium mb-1 relative z-10 px-10 text-neutral-800 dark:text-neutral-100">{label}</div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">{description}</p>
    </div>
  )
}
