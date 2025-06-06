import React from "react";
import { twMerge } from "tailwind-merge";

interface HeadingProps {
  title: string;
  className?: string;
}

export const InputLabel = ({ title, className }: HeadingProps) => {
  return (
    <div>
      <h2
        className={twMerge(
          "text-lg text-[#3E3232] font-medium mb-3",
          className
        )}
      >
        {title}
      </h2>
    </div>
  );
};
