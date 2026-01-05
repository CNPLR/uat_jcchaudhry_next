import Image from "next/image";

type ImgProps = {
  alt: string;
  style?: string;
  path: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
};

export default function Img({ alt, style, path, width, height, loading }: ImgProps) {
  if(!path){
    // console.log(path);
  }
  return (
    <Image
      src={path}
      alt={alt || ""}
      className={style}
      width={1200}
      height={560}
      loading={loading || "lazy"}
      // priority={false}
    />
  );
}
