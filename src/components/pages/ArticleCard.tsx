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
      <div className="max-w-sm bg-white rounded overflow-hidden shadow-sm">
        <div className="relative w-full h-48">
          <NextFillImage
            alt="Image"
            src={image}
            className="w-[300px] h-[200px]"
          />
        </div>

        <div className="px-4 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
            <span className="font-semibold text-gray-800">{authorName}</span>
            <span className="text-gray-300">|</span>
            <span>{date}</span>
          </div>

          <p className="text-gray-800 text-base font-medium leading-snug">
            {content}
          </p>
        </div>
      </div>
    </Link>
  );
};
