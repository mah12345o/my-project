import { ArticleCard } from "@/components/pages/ArticleCard";
import ArticleContent from "@/components/pages/ArticleContent";
import CommentsSection from "@/components/pages/Comments";
import Heading from "@/components/pages/common/image/Heading";
import ExploreCardSlider from "@/components/pages/ExploreCardSlider";
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
      <div style={{ padding: "2rem 0", textAlign: "center" }}>
        {/* heading */}
        <h1 style={{ fontSize: "0.875rem", marginBottom: "0.25rem" }}>
          <span style={{ color: "#262D4D", fontWeight: 700, fontSize: "14px" }}>
            HOME
          </span>
          <span style={{ color: "#262D4D", fontWeight: 400 }}>
            / ARTICLES /
          </span>
        </h1>

        <h1 style={{ fontSize: "1.875rem", color: "#10152E", fontWeight: 600 }}>
          {post?.title}
        </h1>
      </div>
      {/* banner section */}
      <div
        className="banner-img"
        style={{
          margin: "0 auto",
          position: "relative",
          marginBottom: "1.25rem",
        }}
      >
        <Image
          src={post?.image}
          alt="Image"
          priority
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        className="layout_padding"
        style={{
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2.5rem",
          }}
          className="sm-flex-row blog-content"
        >
          {/* blog content */}
          <article style={{ display: "flex", flexDirection: "column" }}>
            <ArticleContent
              autherIcon={post?.autherIcon}
              authorName={post?.author}
              content={post?.content}
              date={post?.date}
            />
            <div className="lg-block" style={{ display: "block" }}>
              <AboutAuthorCarousel />
            </div>
          </article>
          {/* Explore More  */}
          <div className="explore-section">
            <div style={{ width: "100%" }}>
              <Link
                href="/"
                style={{
                  color: "#10152E",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                }}
              >
                Explore More
              </Link>
              <div
                style={{ marginTop: "2.5rem" }}
                className="articles-container"
              >
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
              <div
                style={{ marginTop: "2.25rem" }}
                className="slider-container"
              >
                <ExploreCardSlider />
              </div>
            </div>
            <div style={{ marginTop: "2rem" }}>
              <Heading title="Tour Guides" />
              <TourGuides />
            </div>
          </div>
        </div>
        <div style={{ display: "none" }} className="lg-hidden">
          <AboutAuthorCarousel />
        </div>
        <CommentsSection />
      </div>
      <div className="related-container">
        <RelatedArticles />
      </div>
    </main>
  );
}
