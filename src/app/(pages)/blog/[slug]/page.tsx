import React from "react";
import Image from "next/image";

export default async function BlogPage() {
  return (
    <main>
      <div className="max_section">
        <p className="text-sm text-gray-400">HOME / ARTICLES /</p>
        <h1 className="text-3xl font-bold mt-2 mb-6">
          The Ultimate Guide to Full-Body Workouts
        </h1>
      </div>
      <div>
        <div className="w-full h-96 relative mb-10">
          <Image
            src="/images/blog2.png"
            alt="Workout Hero"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>

      <div className="flex w-full max_section">
        <div className="flex justify-between w-full bg-red-200 items-center mb-6">
          <div className="flex items-center space-x-2">
            <Image
              src="/avatar.jpg"
              alt="Alex Carter"
              width={32}
              height={32}
              className="rounded-full"
            />
            <p className="text-sm font-medium">Alex Carter</p>
          </div>
          <p className="text-sm text-gray-500">23 JANUARY 2025</p>
        </div>

        <div className="bg-amber-500 w-[40rem]">2</div>
      </div>
    </main>
  );
}
