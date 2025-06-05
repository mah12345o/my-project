"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { authors } from "@/const";

export default function AboutAuthorCarousel() {
  const [index, setIndex] = useState(0);
  const author = authors[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % authors?.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + authors?.length) % authors?.length);
  };

  return (
    <div className="border-t pt-10 mt-10">
      {/* Author Info */}
      <div className="text-center transition-all duration-300">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          About {author?.name}
        </h2>
        <Image
          src={author?.image}
          alt={author?.name}
          width={80}
          height={80}
          className="rounded-full mx-auto mb-4"
        />
        <p className="italic text-gray-600 max-w-3xl mx-auto">{author?.bio}</p>
      </div>

      {/* Previous/Next Blog Nav */}
      <div className="flex justify-between items-center mt-10 pt-6 border-t">
        {/* Previous */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handlePrev}
        >
          <FaArrowLeft />
          <div>
            <p className="text-sm text-gray-400">Previous</p>
            <Link
              href={author?.prev?.href}
              className="text-blue-600 hover:underline text-sm"
            >
              {author?.prev?.title}
            </Link>
          </div>
        </div>

        {/* Next */}
        <div
          className="flex items-center gap-2 text-right cursor-pointer"
          onClick={handleNext}
        >
          <div>
            <p className="text-sm text-gray-400">Next</p>
            <Link
              href={author?.next?.href}
              className="text-blue-600 hover:underline text-sm"
            >
              {author?.next?.title}
            </Link>
          </div>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}
