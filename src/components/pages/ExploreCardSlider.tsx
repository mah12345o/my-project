"use client";

import { authors, exploreMoreArticles } from "@/const";
import { useState } from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { ArticleCard } from "./ArticleCard";

export default function ExploreCardSlider() {
  const [index, setIndex] = useState(0);

  const el = exploreMoreArticles[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % authors?.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + authors?.length) % authors?.length);
  };

  return (
    <div
      style={{
        borderTop: "1px solid #E5E6EA",
        paddingTop: "2.5rem",
        marginTop: "2.5rem",
      }}
    >
      <ArticleCard
        image={el?.image}
        authorName={el?.author}
        content={el?.content}
        date={el?.date}
        slug={el?.slug}
        key={el?.title}
      />
      {/* Previous/Next Blog Nav */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #E5E6EA",
          marginTop: "2.5rem",
          paddingTop: "1.5rem",
        }}
      >
        {/* Previous */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.5rem",
            cursor: "pointer",
          }}
          onClick={handlePrev}
        >
          <p
            style={{
              fontSize: "0.875rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              border: "1px solid #05091C",
              borderRadius: "2px",
              color: "#05091C",
              padding: "0.5rem",
            }}
          >
            <IoArrowForwardCircleOutline className="rotate-180" /> Previous
          </p>
        </div>

        {/* Next */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textAlign: "right",
            cursor: "pointer",
          }}
          onClick={handleNext}
        >
          <div className="flex flex-col items-end">
            <p
              style={{
                fontSize: "0.875rem",
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                border: "1px solid #05091C",
                width: "fit-content",
                borderRadius: "2px",
                color: "#05091C",
                padding: "0.5rem",
              }}
            >
              Next
              <IoArrowForwardCircleOutline />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
