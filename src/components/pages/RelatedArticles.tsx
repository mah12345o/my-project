"use client";

import Image from "next/image";

const relatedArticles = [
  {
    id: 1,
    title: "The Ultimate Guide To Full-Body Workouts",
    description:
      "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for...",
    author: "Alex Carter",
    image: "/images/blog1.png",
  },
  {
    id: 2,
    title: "5 Tips For Better Cardio Sessions",
    description:
      "Improve your cardio performance with these simple yet effective techniques to maximize sta...",
    author: "Maya Lee",
    image: "/images/blog2.png",
  },
  {
    id: 3,
    title: "Meal Prep Basics For Gym Enthusiasts",
    description:
      "Fuel your workouts with balanced, easy-to-prepare meals. A guide on planning, prepping, and staying consi...",
    author: "Jordan Smith",
    image: "/images/blog3.png",
  },
  {
    id: 4,
    title: "Building Core Strength: Exercises And Benefits",
    description:
      "A strong core is essential for stability and injury prevention. Learn the best exercises to enhance your...",
    author: "Emma Rodriguez",
    image: "/images/blog4.png",
  },
];

export default function RelatedArticles() {
  return (
    <div className="layout_padding">
      <h2 className="related-title">Related articles Related articles</h2>
      <div className="related-grid">
        {relatedArticles?.map((item) => (
          <div key={item?.id} className="card">
            <div
              style={{ position: "relative", width: "100%", height: "14rem" }}
            >
              <Image
                src={item?.image || "/images/default.jpg"}
                alt={item?.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "1rem" }}>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "#1a202c",
                  marginBottom: "0.25rem",
                }}
              >
                {item?.title}
              </h3>
              <p
                style={{
                  color: "#4B5563",
                  fontSize: "0.875rem",
                  marginBottom: "0.75rem",
                }}
              >
                {item?.description}
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#1F2937",
                }}
              >
                By {item?.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
