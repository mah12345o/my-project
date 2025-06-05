// import Image from "next/image";
// import { FaStar, FaRegStar, FaMapMarkerAlt } from "react-icons/fa";

// export default function TourGuides() {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-sm card">
//       <div className="space-y-6">
//         <div className="flex space-x-4 items-center border-b pb-4">
//           <Image
//             src="/images/miranda.jpg"
//             alt="Miranda Rachel"
//             width={56}
//             height={56}
//             className="rounded-full object-cover"
//           />
//           <div className="flex-1">
//             <h3 className="font-semibold text-gray-900">Miranda Rachel</h3>
//             <p className="text-sm text-gray-500 flex items-center">
//               <FaMapMarkerAlt className="mr-1 text-black/60" />
//               Jombang, Jawa timur
//             </p>
//             <div className="flex items-center text-yellow-500 mt-1">
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaRegStar />
//               <span className="ml-2 text-sm text-gray-800">(4.0)</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

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
    <div className="bg-gray-50 max-w-md mx-auto p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold text-blue-900 mb-6">Tour Guides</h2>

      <div className="space-y-6">
        {guides?.map((guide) => (
          <div key={guide.id}>
            <div className="flex items-center gap-4">
              <div className="size-12 relative">
                <Image
                  src={guide.image}
                  alt={guide.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-gray-900">{guide.name}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <HiLocationMarker className="mr-1" />
                  <span className="truncate max-w-[180px]">
                    {guide.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mt-2 ml-16">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar
                  key={index}
                  className={
                    index < Math.round(guide.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
              <span className="text-gray-700 ml-1 text-sm">
                ({guide.rating.toFixed(1)})
              </span>
            </div>

            <hr className="my-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
