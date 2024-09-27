// import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import React, { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface ImageWrapperProps {
  src: string | undefined;
  alt: string;
  width?: number;
  height?: number;
  layout?: "fixed" | "intrinsic" | "responsive" | "fill";
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  className?: string;
  addElement?: ReactNode;
  extensionURL?: string;
  type?: string;
  onClick?: () => void;
}

export const ImageWrapper: React.FC<ImageWrapperProps> = ({
  src = "default",
  alt,
  width,
  height,
  layout = "fill",
  objectFit = "cover",
  className,
  addElement = <></>,
  onClick,
  type,
  extensionURL = "",
}) => {
  return (
    <div
      className={cn(
        "ImageWrapper min-h-full min-w-full overflow-hidden relative flex",
        className,
      )}
    >
      {src ? (
        type !== "video" ? (
          <Image
            onClick={onClick}
            src={`https://ucarecdn.com/${src}/${extensionURL}`}
            alt={alt}
            width={width || 0}
            height={height || 0}
            layout={layout}
            objectFit={objectFit}
            // layout="responsive"
            className="max-w-full max-h-full m-auto"
          />
        ) : (
          <iframe
            onClick={onClick}
            width={width || 0}
            height={height || 0}
            src={src}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full max-w-full max-h-full m-auto"
          ></iframe>
        )
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          <ImageIcon className="h-[30%] text-gray-500" />
        </div>
      )}
      {addElement}
    </div>
  );
};
