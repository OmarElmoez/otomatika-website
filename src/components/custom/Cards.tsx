import { FollowerPointerCard } from "@/components/ui/following-pointer.tsx"
import WebnwellImg from '@/assets/webnwell-hero-img.png'

const Cards = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-center text-white">Related Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <FollowerPointerCard key={index} title={<TitleComponent title={post.author} avatar={post.authorAvatar} />}>
            <div className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="h-full w-full transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
                />
              </div>
              <div className="p-4 flex flex-col flex-1 justify-between">
                <h2 className="my-4 text-lg font-bold text-zinc-700">{post.title}</h2>
                <h2 className="my-4 text-sm font-normal text-zinc-500 flex-1">{post.description}</h2>
                <div className="mt-auto flex flex-row items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <div className="relative z-10 block rounded-xl bg-black px-6 py-2 text-xs font-bold text-white">
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </FollowerPointerCard>
        ))}
      </div>
    </div>
  )
}

export default Cards;

const blogPosts = [
  {
    slug: "tailwindcss-grid-layouts",
    author: "webnwell",
    date: "28th March, 2023",
    title: "WebnWell project",
    description:
      "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
    image: WebnwellImg,
    authorAvatar: WebnwellImg,
  },
  {
    slug: "react-server-components",
    author: "Sarah Johnson",
    date: "15th April, 2023",
    title: "Cliq",
    description:
      "React Server Components are a new way to build React applications. Learn how they work and how to use them in your Next.js projects.",
    image: "/placeholder.svg?height=400&width=600",
    authorAvatar: "/placeholder.svg?height=40&width=40",
  },
  {
    slug: "nextjs-app-router",
    author: "David Chen",
    date: "2nd May, 2023",
    title: "Migrating to Next.js App Router",
    description:
      "The Next.js App Router brings new features and improvements. This guide will help you migrate your existing Next.js application to the new App Router.",
    image: "/placeholder.svg?height=400&width=600",
    authorAvatar: "/placeholder.svg?height=40&width=40",
  },
]

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string
  avatar: string
}) => (
  <div className="flex items-center space-x-2">
    <img
      src={avatar || "/placeholder.svg"}
      height="20"
      width="20"
      alt="avatar"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
)
