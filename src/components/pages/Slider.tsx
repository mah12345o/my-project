"use client";

import { authors } from "@/const";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

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
    <div className="border-t border-[#E5E6EA] pt-10 mt-10">
      {/* Author Info */}
      <div className="text-center transition-all duration-300">
        <h2 className="text-xl font-semibold text-gray-900">
          About {author?.name}
        </h2>
        <div className="flex justify-center my-7">
          <div className="relative size-[6.25rem]">
            <Image
              src={author?.image}
              alt={author?.name}
              fill
              className="rounded-full object-cover mx-auto mb-4"
            />
          </div>
        </div>

        <p className="italic text-gray-600 max-w-3xl mx-auto">{author?.bio}</p>
      </div>

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
          <Link
            href={author?.prev?.href}
            className="text-blue-600 hover:underline text-sm"
          >
            {author?.prev?.title}
          </Link>
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
            <Link
              href={author?.next?.href}
              className="text-blue-600 hover:underline text-sm"
            >
              {author?.next?.title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
