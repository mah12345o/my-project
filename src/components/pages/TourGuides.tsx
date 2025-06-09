"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const guides = [
  {
    id: 1,
    name: "Miranda Rachel",
    location: "Jombang, Jawa timur",
    rating: 4.0,
    image: "/icon/icon1.png",
  },
  {
    id: 2,
    name: "Danielle Marsh",
    location: "Wonosobo, Jawa tengah",
    rating: 4.0,
    image: "/icon/icon2.png",
  },
  {
    id: 3,
    name: "Kang Haerin",
    location: "Bandung, Jawa barat",
    rating: 5.0,
    image: "/icon/icon3.png",
  },
];

export default function TourGuides() {
  return (
    <div
      style={{
        maxWidth: "28rem",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {guides?.map((guide) => (
          <div key={guide.id}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  height: "40px",
                  width: "40px",
                  position: "relative",
                }}
              >
                <Image
                  src={guide.image}
                  alt={guide.name}
                  fill
                  style={{
                    borderRadius: "9999px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div>
                <p
                  style={{ fontWeight: 400, fontSize: "1rem", color: "black" }}
                >
                  {guide.name}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 400,
                    color: "#6B7280",
                    fontSize: "0.875rem",
                  }}
                >
                  <MdLocationOn style={{ marginRight: "0.25rem" }} />
                  <span
                    style={{
                      maxWidth: "180px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      display: "inline-block",
                    }}
                  >
                    {guide.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Stars */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                marginTop: "0.5rem",
              }}
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar
                  key={index}
                  style={{
                    color:
                      index < Math.round(guide.rating) ? "#FBBF24" : "#D1D5DB",
                  }}
                />
              ))}
              <span
                style={{
                  color: "#374151",
                  marginLeft: "0.25rem",
                  fontSize: "0.875rem",
                }}
              >
                ({guide.rating.toFixed(1)})
              </span>
            </div>

            <hr
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
                height: "1px",
                border: "none",
                backgroundColor: "#DEDEDE",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
