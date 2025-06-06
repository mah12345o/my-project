import { ArticleCard } from "@/components/pages/ArticleCard";
import ArticleContent from "@/components/pages/ArticleContent";
import CommentsSection from "@/components/pages/Comments";
import Heading from "@/components/pages/common/image/Heading";
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
      <div className="py-8 text-center">
        <p className="text-sm mb-3">
          <span className="text-[#262D4D] font-medium">HOME</span>
          <span className="text-gray-700"> / ARTICLES /</span>
        </p>

        <h1 className="text-3xl text-[##10152E] font-semibold">
          {post?.title}
        </h1>
      </div>

      <div className="w-full h-[60vh] relative mb-5">
        <Image
          src={post.image}
          alt="Image"
          priority
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      <div className="layout_padding">
        <div className="flex gap-10">
          <article className="flex flex-col">
            <ArticleContent
              autherIcon={post?.autherIcon}
              authorName={post?.author}
              content={post?.content}
              date={post?.date}
            />
            <AboutAuthorCarousel />
          </article>
          <div className="w-[22rem]">
            <div>
              <Link className="text-[#10152E] text-xl font-semibold" href="/">
                Explore More
              </Link>
              <div className="mt-9">
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
            <div className="mt-8">
              <Heading title="Tour Guides" />
              <TourGuides />
            </div>
          </div>
        </div>
        <CommentsSection />
      </div>
      <RelatedArticles />
    </main>
  );
}
