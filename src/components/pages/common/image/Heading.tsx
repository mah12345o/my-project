import React from "react";
import { twMerge } from "tailwind-merge";

interface HeadingProps {
  title: string;
  className?: string;
}

const Heading = ({ title, className }: HeadingProps) => {
  return (
    <div>
      <h2 className={twMerge("text-xl font-semibold mt-10 mb-5", className)}>
        {title}
      </h2>
    </div>
  );
};

export default Heading;
