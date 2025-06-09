"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import { Comment } from "@/Interface";
import Image from "next/image";

interface CommentListProps {
  comments: Comment[];
}
export const CommentList = ({ comments }: CommentListProps) => {
  return (
    <>
      {comments?.map((el) => (
        <div
          key={el?.id}
          className="border-b w-full border-[#DEDEDE] pb-6 mb-4 flex justify-between items-start"
        >
          <div className="flex items-start w-full gap-4">
            <div className="min-h-14 min-w-14 relative">
              <Image
                src="/icon/icon2.png"
                alt={el?.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="w-full">
              <div className="flex sm:justify-between sm:flex-row flex-col">
                <div>
                  <p className="font-medium">{el?.name}</p>
                  <div className="flex items-center gap-1 text-[#FFBB00] text-sm">
                    {Array?.from({ length: 5 })?.map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < el?.rating ? "text-[#FFBB00]" : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="text-gray-700 ml-1">
                      ({el?.rating.toFixed(1)})
                    </span>
                  </div>
                </div>
                <p className="text-sm font-medium text-[#757575]">{el?.date}</p>
              </div>
              <p className="text-gray-600 text-sm mt-1">{el?.comment}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1 text-right">
            {/* <button
                  onClick={() => handleDelete(el?.id)}
                  className="text-red-500 text-sm"
                  title="Delete"
                >
                  <BsTrash />
                </button> */}
          </div>
        </div>
      ))}
    </>
  );
};
