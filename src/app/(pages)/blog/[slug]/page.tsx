import { ArticleCard } from "@/components/pages/ArticleCard";
import ArticleContent from "@/components/pages/ArticleContent";
import TourGuides from "@/components/pages/TourGuides";
import { articles } from "@/const";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPage() {
  return (
    <main>
      <div className="">
        <p className="text-sm text-gray-400">HOME / ARTICLES /</p>
        <h1 className="text-3xl font-bold mt-2 mb-6">
          The Ultimate Guide to Full-Body Workouts
        </h1>
      </div>
      <div>
        <div className="w-full h-96 relative mb-10">
          <Image
            src="/images/blog2.png"
            alt="Workout Hero"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>

      <div className="flex">
        <ArticleContent />

        <div className="bg-amber-500">
          <div>
            <Link href="/">Explore More</Link>
            <div>{articles?.map((el) => <ArticleCard key={el?.title} />)}</div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Tour Guides
            </h2>
            <div>{articles?.map((el) => <TourGuides key={el?.title} />)}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
