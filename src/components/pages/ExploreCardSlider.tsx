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
    <div className="border-t border-[#E5E6EA] pt-10 mt-10">
      <ArticleCard
        image={el?.image}
        authorName={el?.author}
        content={el?.content}
        date={el?.date}
        slug={el?.slug}
        key={el?.title}
      />
      {/* Previous/Next Blog Nav */}
      <div className="flex justify-between items-center border-[#E5E6EA] mt-10 pt-6 border-t">
        {/* Previous */}
        <div
          className="flex flex-col items-start gap-2 cursor-pointer"
          onClick={handlePrev}
        >
          <p className="text-sm flex items-center  gap-2 border rounded-[2px] border-[#05091C] text-[#05091C] p-2">
            <IoArrowForwardCircleOutline className="rotate-180" /> Previous
          </p>
        </div>

        {/* Next */}
        <div
          className="flex items-center gap-2 text-right cursor-pointer"
          onClick={handleNext}
        >
          <div className="flex flex-col items-end">
            <p className="text-sm flex gap-2 items-center border w-fit rounded-[2px] border-[#05091C] text-[#05091C] p-2">
              Next
              <IoArrowForwardCircleOutline />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
