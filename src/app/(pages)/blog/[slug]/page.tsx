import { ArticleCard } from "@/components/pages/ArticleCard";
import ArticleContent from "@/components/pages/ArticleContent";
import CommentsSection from "@/components/pages/Comments";
import RelatedArticles from "@/components/pages/RelatedArticles";
import AboutAuthorCarousel from "@/components/pages/Slider";
import TourGuides from "@/components/pages/TourGuides";
import { exploreMoreArticles } from "@/const";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return exploreMoreArticles?.map((post) => ({ slug: post?.slug }));
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = exploreMoreArticles?.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <main>
      <div className="">
        <p className="text-sm text-gray-400">HOME / ARTICLES /</p>
        <h1 className="text-3xl font-bold mt-2 mb-6">{post?.title}</h1>
      </div>

      <div className="w-full h-96 relative mb-10">
        <Image
          src={post.image}
          alt="Image"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      <div className="flex w-full">
        <article className="flex flex-col w-full">
          <ArticleContent
            authorName={post?.author}
            content={post?.content}
            date={post?.date}
          />
          <AboutAuthorCarousel />
        </article>
        <div>
          <div>
            <Link href="/">Explore More</Link>
            <div>
              {exploreMoreArticles?.map((el) => (
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
            <div>
              <TourGuides />
            </div>
          </div>
        </div>
      </div>

      <CommentsSection />
      <RelatedArticles />
    </main>
  );
}
