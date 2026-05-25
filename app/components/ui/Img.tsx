import Image from "next/image";

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
  return (
    <Image
      title={alt || ""}
      src={path}
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
