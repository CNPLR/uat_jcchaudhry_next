"use client";
import Image from "next/image";
import { useMemo } from "react";

type BannerProps = {
  alttag: string;
  path: string;
  path1?: string; // 1600w
  path2?: string; // 1200w
  path3?: string; // 769w
  w?: number;
  h?: number;
  priority?: boolean;
};

export default function Banner({ alttag, path, path1, path2, path3,w,h, priority= false }: BannerProps) {
  
  const cacheBuster = useMemo(() => Date.now(), []);
  const imageSrc = path.startsWith("http")
  ? `${path}?v=${cacheBuster}`
  : path;
  return (
    <div className="w-full">
      <Image
        title={alttag}
        src={imageSrc}
        alt={alttag}
        width={w || 1200}
        height={h || 560}
        priority={priority}
        fetchPriority={priority ? "high" : "auto"}
        quality={85}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
        className="w-full h-auto object-contain"
      />
    </div>
  );
}
