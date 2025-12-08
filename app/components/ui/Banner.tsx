import Image from "next/image";

type BannerProps = {
  alttag: string;
  path: string;
  path1?: string; // 1600w
  path2?: string; // 1200w
  path3?: string; // 769w
};

export default function Banner({ alttag, path, path1, path2, path3 }: BannerProps) {
  return (
    <div className="w-full">
      <Image
        src={path}
        alt={alttag}
        className="w-full object-contain"
        priority
        width={1000}
        height={500}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1600px"
      />
    </div>
  );
}
