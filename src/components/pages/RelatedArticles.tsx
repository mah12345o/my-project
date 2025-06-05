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
    <div className="bg-gray-50 py-10 px-4 md:px-8">
      <h2 className="text-3xl font-semibold text-center text-blue-900 mb-10">
        Related articles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {relatedArticles?.map((item) => (
          <div
            key={item?.id}
            className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={item?.image || "/images/default.jpg"}
              alt={item?.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {item?.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{item?.description}</p>
              <p className="text-sm font-semibold text-gray-800">
                By {item?.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
