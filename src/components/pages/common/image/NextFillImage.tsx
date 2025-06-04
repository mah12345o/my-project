import Image from "next/image";
import { twMerge } from "tailwind-merge";

// Define the prop types for better TypeScript support
interface NextFillImageProps {
  src: string;
  alt: string;
  className?: string; // For additional custom classes on the parent div
  imageClassName?: string; // For custom classes on the Image component
  priority?: boolean; // To prioritize image loading
  quality?: number; // To control image quality
  children?: React.ReactNode; // For overlay content when used as a background image
}

export const NextFillImage = ({
  src,
  alt,
  className = "",
  imageClassName = "",
  priority = false,
  quality = 75,
  children,
}: NextFillImageProps) => {
  return (
    <div className={twMerge("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={twMerge("object-cover", imageClassName)}
        quality={quality}
      />
      {children}
    </div>
  );
};
