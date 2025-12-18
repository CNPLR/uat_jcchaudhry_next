import Link from "next/link";
import Img from "./Img";
import SubHeading2 from "./SubHeading2";

interface CommonLearnGrowProps {
  path: string;
  subHeading: string;
  link: string;
  alt?: string;
}

export default function CommonLearnGrow({
  path,
  subHeading,
  link,
  alt = "",
}: CommonLearnGrowProps) {
  return (
    <Link href={link}>
      <div className="border border-gray-200 shadow-md p-5 bg-white rounded-lg w-[180px] h-[220px] hover:shadow-2xl transition md:mr-5 mb-5">
        <div className="w-28 h-28 m-auto">
          <Img alt={alt} style="m-auto" path={path  as string} />
        </div>

        <div className="h-[2px] w-full bg-gray-100 my-2"></div>

        <SubHeading2 style="text-center" subHeading={subHeading} />
      </div>
    </Link>
  );
}
