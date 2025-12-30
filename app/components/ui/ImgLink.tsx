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

export default function ImgLink({ to, path, path1, path2, path3, style, alt, }: any) {
    return (
        <Link href={to}>
            {path1 ?
                <Image
                    src={path}
                    // srcSet={`${path3} 769w, ${path2} 1200w, ${path1} 1600w`}
                    className={style}
                    alt={alt}
                    loading="lazy"
                    fetchPriority='high'
                    width={1500}
                    height={500}
                />
                :
                <Image
                    src={path}
                    className={style}
                    alt={alt}
                    loading="lazy"
                    fetchPriority='high'
                    width={1500}
                    height={500}
                />
            }

        </Link>
    );
}
