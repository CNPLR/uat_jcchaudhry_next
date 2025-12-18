import Para from "./Para";
import Img from "./Img";
import Link from "next/link";

interface CommonNumberSolutionsProps {
  para: string;
  num: string | number;
  href?: string;
  classes?: string
}

export default function CommonNumberSolutions({
  para,
  num,
  href = "#",
  classes = '',
}: CommonNumberSolutionsProps) {
  return (
    <Link href={href}>
      <div className="w-36 md:mr-5 mb-5 cursor-pointer">
        <div className="w-20 h-20 m-auto bg-white rounded-full flex justify-center items-center hover:scale-[1.1] transition">
          <span className={classes + " text-[#ffa800] text-4xl font-semibold"}>{num}</span>
        </div>
        <Para style="text-center mt-4" para={para} />
      </div>
    </Link>
  );
}

interface CommonNumberSolutionsIconProps {
  para: string;
  path: string;
  alt?: string;
}

export function CommonNumberSolutionsIcon({
  para,
  path,
  alt = "",
}: CommonNumberSolutionsIconProps) {
  return (
    <div className="w-36 md:mr-5 mb-5">
      <div className="flex justify-center items-center hover:scale-[1.1] transition">
        <Img alt={alt as string} path={path  as string} />
      </div>
      <Para style="text-center mt-4" para={para} />
    </div>
  );
}
