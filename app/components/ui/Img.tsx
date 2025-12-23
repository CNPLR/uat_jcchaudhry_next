import Image from "next/image";

type ImgProps = {
  alt: string;
  style?: string;
  path: string;
  width?: number;
  height?: number;
};

export default function Img({ alt, style, path, width, height }: ImgProps) {
  if(!path){
    // console.log(path);
  }
  return (
    <Image
      src={path}
      alt={alt}
      className={style}
      width={700}
      height={700}
      // priority={false}
    />
  );
}
