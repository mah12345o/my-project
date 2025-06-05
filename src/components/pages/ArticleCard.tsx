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
      <div className="bg-white overflow-hidden">
        <div className="relative w-full">
          <NextFillImage alt="Image" src={image} className="w-[18.5rem] h-40" />
        </div>

        <div className="pb-7 pt-5">
          <div className="flex items-center space-x-2 text-sm mb-2">
            <span className="font-medium text-[0.9rem] text-[#121212]">
              {authorName}
            </span>
            <span className="text-[#757575]">|</span>
            <span>{date}</span>
          </div>

          <p className="text-[#121212] font-normal line-clamp-2 leading-snug">
            {content}
          </p>
        </div>
      </div>
    </Link>
  );
};
