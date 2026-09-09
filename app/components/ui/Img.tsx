"use client";
import Image from "next/image";

type ImgProps = {
  alt: string;
  style?: string;
  path: string;
  width?: number;
  height?: number;
  priority?: boolean;  
  fill? : boolean;
  title?: string;
};

export default function Img({title, alt, style, path, width=1200, height=560, priority= false, fill = false }: ImgProps) {
  if(!path){
    // console.log(path);
  }
  return (
    <Image
      title={title || alt || ""}
      src={path || ""}
      alt={alt || ""}
      {...(fill ? { fill: true } : { width, height })}
      priority={priority}
      fetchPriority={priority ? "high" : "auto"}
      loading={priority ? "eager" : "lazy"}      
      className={style}
    />
  );
}