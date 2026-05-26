"use client";
import Image from "next/image";

type BannerProps = {
  alttag: string;
  path: string;
  path1?: string; // 1600w
  path2?: string; // 1200w
  path3?: string; // 769w
  w?: number;
  h?: number;
};

export default function Banner({ alttag, path, path1, path2, path3,w,h }: BannerProps) {
  return (
    <div className="w-full">
      <Image
        title={alttag}
        src={path}
        alt={alttag}
        width={w || 1200}
        height={h || 560}
        priority
        fetchPriority="high"
        quality={65}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
        className="w-full h-auto object-contain"
      />
    </div>
  );
}
