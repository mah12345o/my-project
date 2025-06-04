import Image from "next/image";
import { FaStar, FaRegStar, FaMapMarkerAlt } from "react-icons/fa";

export default function TourGuides() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="space-y-6">
        <div className="flex space-x-4 items-center border-b pb-4">
          <Image
            src="/images/miranda.jpg"
            alt="Miranda Rachel"
            width={56}
            height={56}
            className="rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">Miranda Rachel</h3>
            <p className="text-sm text-gray-500 flex items-center">
              <FaMapMarkerAlt className="mr-1 text-black/60" />
              Jombang, Jawa timur
            </p>
            <div className="flex items-center text-yellow-500 mt-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <span className="ml-2 text-sm text-gray-800">(4.0)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
