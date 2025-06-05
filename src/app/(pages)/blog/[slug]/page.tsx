import { ArticleCard } from "@/components/pages/ArticleCard";
import ArticleContent from "@/components/pages/ArticleContent";
import TourGuides from "@/components/pages/TourGuides";
import { articles } from "@/const";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return articles.map((post) => ({ slug: post.slug }));
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = articles?.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <main>
      <div className="">
        <p className="text-sm text-gray-400">HOME / ARTICLES /</p>
        <h1 className="text-3xl font-bold mt-2 mb-6">
          {/* The Ultimate Guide to Full-Body Workouts */}
          {post?.title}
        </h1>
      </div>
      <div>
        <div className="w-full h-96 relative mb-10">
          <Image
            src={post?.image}
            alt="Image"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>

      <div className="flex">
        <ArticleContent
          authorName={post?.author}
          content={post?.content}
          date={post?.date}
        />

        <div className="bg-amber-500">
          <div>
            <Link href="/">Explore More</Link>
            <div>
              {articles?.map((el) => (
                <ArticleCard
                  image={el?.image}
                  authorName={el?.author}
                  content={el?.content}
                  date={el?.date}
                  slug={el?.slug}
                  key={el?.title}
                />
              ))}
            </div>
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
