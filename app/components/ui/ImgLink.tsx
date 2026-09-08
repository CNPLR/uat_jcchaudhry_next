import Link from "next/link";
import Image from "next/image";

type ImgLinkProps = {
  title?: string;
  to: string;
  path: string;
  path1?: string; // 1600w
  path2?: string; // 1200w
  path3?: string; // 769w
  style?: string;
  alt: string;
  loading?: "lazy" | "eager";
  width?: number;
  height?: number;
};

export default function ImgLink({ to, path, path1, path2, path3, style, alt, loading = 'lazy', width, height, title }: ImgLinkProps) {
    return (
        <Link href={to} target="blank">
            {path1 ?
                <Image
                    src={path}
                    // srcSet={`${path3} 769w, ${path2} 1200w, ${path1} 1600w`}
                    className={style}
                    title={title}
                    alt={alt}
                    loading={loading}
                    fetchPriority='high'
                    width={width || 1500}
                    height={ height || 500}
                />
                :
                <Image
                    src={path}
                    className={style}
                    alt={alt}
                    loading={loading}
                    fetchPriority='high'
                    width={width || 1500}
                    height={height || 500}
                />
            }

        </Link>
    );
}
