"use client";

import { authors } from "@/const";
import Image from "next/image";
import { useState } from "react";
import { NavBtn } from "./common/NavBtn";

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
    // <div className="sm:border-t border-[#E5E6EA] pt-10 sm:mt-10">
    <div
      className="custom-div"
      style={{ borderColor: "#E5E6EA", paddingTop: "2.5rem" }}
    >
      {/* Author Info */}
      <div className="text-center">
        <h2 style={{ fontSize: "1.25rem", fontWeight: 400, color: "#10152E" }}>
          About {author?.name}
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1.75rem",
            marginBottom: "1.75rem",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "6.25rem",
              height: "6.25rem",
            }}
          >
            <Image
              src={author?.image}
              alt={author?.name}
              fill
              style={{
                borderRadius: "9999px",
                objectFit: "cover",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "1rem",
              }}
            />
          </div>
        </div>

        <p
          style={{
            fontStyle: "italic",
            color: "#4B5563",
            maxWidth: "48rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {author?.bio}
        </p>
      </div>

      {/* Previous/Next Blog Nav */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderColor: "#E5E6EA",
          marginTop: "2.5rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid #E5E6EA",
        }}
      >
        {/* Previous */}
        {/* <div
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
              padding: "0.5rem 1rem",
            }}
          >
            <IoArrowForwardCircleOutline
              style={{ transform: "rotate(180deg)" }}
            />
            Previous
          </p>
          <Link
            href={author?.prev?.href}
            style={{
              color: "#262D4D",
              fontWeight: "400",
              fontSize: "0.875rem",
            }}
          >
            {author?.prev?.title}
          </Link>
        </div> */}
        <NavBtn
          onClick={handlePrev}
          title="Previous"
          isPrevBtn
          href={author?.prev?.href}
        />
        {/* Next */}
        {/* <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textAlign: "right",
            cursor: "pointer",
          }}
          onClick={handleNext}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
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
            <Link
              href={author?.next?.href}
              style={{ color: "#2563EB", fontSize: "0.875rem" }}
            >
              {author?.next?.title}
            </Link>
          </div>
        </div> */}
        <NavBtn onClick={handleNext} title="Next" href={author?.next?.href} />
      </div>
    </div>
  );
}
