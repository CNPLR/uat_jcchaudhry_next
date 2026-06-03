"use client";
import Image from "next/image";
import { useMemo } from "react";

type ImgProps = {
  alt: string;
  style?: string;
  path: string;
  width?: number;
  height?: number;
  priority?: boolean;  
};

export default function Img({ alt, style, path, width, height, priority= false }: ImgProps) {
  if(!path){
    // console.log(path);
  }
  const cacheBuster = useMemo(() => Date.now(), []);
  const imageSrc = path.startsWith("http")
  ? `${path}?v=${cacheBuster}`
  : path;
  return (
    <Image
      title={alt || ""}
      src={imageSrc || ""}
      alt={alt || ""}
      width={width ?? 1200}
      height={ height ?? 560}
      priority={priority}
      fetchPriority={priority ? "high" : "auto"}
      loading={priority ? "eager" : "lazy"}      
      className={style}
    />
  );
}
