import React from "react";
import { NextFillImage } from "./common/image/NextFillImage";
import Link from "next/link";

export const ArticleCard = ({
  authorName,
  content,
  date,
  slug,
  image,
}: {
  authorName: string;
  content: string;
  date: string;
  slug: string;
  image: string;
}) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div style={{ backgroundColor: "#FFFFFF", overflow: "hidden" }}>
        <div style={{ position: "relative", width: "100%" }}>
          <NextFillImage
            alt="Image"
            src={image}
            className="article-card-image"
          />
        </div>

        <div style={{ paddingBottom: "1.75rem", paddingTop: "1.25rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.875rem",
              marginBottom: "0.5rem",
            }}
          >
            <span
              style={{ fontWeight: 500, fontSize: "0.9rem", color: "black" }}
            >
              {authorName}
            </span>
            <div
              style={{
                color: "#757575",

                fontWeight: 400,
                fontSize: "0.9rem",
              }}
            >
              <span>| </span>
              <span>{date}</span>
            </div>
          </div>

          <p
            style={{
              fontSize: "1rem",
              color: "#121212",
              fontWeight: 400,
              lineHeight: "1.375",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {content}
          </p>
        </div>
      </div>
    </Link>
  );
};
