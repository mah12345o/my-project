import React from "react";
import { NextFillImage } from "./common/image/NextFillImage";

export const ArticleCard = () => {
  return (
    <div className="max-w-sm bg-white rounded overflow-hidden shadow-sm">
      <div className="relative w-full h-48">
        <NextFillImage
          alt="ddqwe"
          src="/images/blog2.png"
          className="w-[300px] h-[200px]"
        />
      </div>

      <div className="px-4 py-3">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
          <span className="font-semibold text-gray-800">Culinary</span>
          <span className="text-gray-300">|</span>
          <span>13 Jun 2022</span>
        </div>

        <p className="text-gray-800 text-base font-medium leading-snug">
          Two women in local stand are chatting during morning..
        </p>
      </div>
    </div>
  );
};
