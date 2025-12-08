import Link from "next/link";
import Image from "next/image";

type ImgLinkProps = {
  to: string;
  path: string;
  path1?: string; // 1600w
  path2?: string; // 1200w
  path3?: string; // 769w
  style?: string;
  alt: string;
};

export default function ImgLink({
  to,
  path,
  path1,
  path2,
  path3,
  style,
  alt,
}: ImgLinkProps) {
  return (
    <Link href={to}>
      <Image
        src={path}
        alt={alt}
        className={style}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1600px"
        width={700}
        height={700}
      />
    </Link>
  );
}
