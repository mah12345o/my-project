import Link from "next/link";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

interface NavBtnProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  href: string;
  title: string;
  isPrevBtn?: boolean;
}

export const NavBtn: React.FC<NavBtnProps> = ({
  onClick,
  href,
  title,
  isPrevBtn,
}) => {
  return (
    <div
      className="flex flex-col items-start gap-2 cursor-pointer"
      onClick={onClick}
    >
      <p className="text-sm flex items-center gap-2 border rounded-[2px] border-[#05091C] text-[#05091C] px-4 py-2">
        {isPrevBtn && <IoArrowForwardCircleOutline className="rotate-180" />}
        {title}
        {!isPrevBtn && <IoArrowForwardCircleOutline />}
      </p>
      <Link
        href={href}
        className="text-[#262D4D] font-normal text-sm hover:underline"
      >
        {title}
      </Link>
    </div>
  );
};
