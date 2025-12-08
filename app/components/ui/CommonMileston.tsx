import Img from "./Img";
import Para from "./Para";
import SubHeading2 from "./SubHeading2";

interface DesktopProps {
  style?: string;
  side?: string;
  year?: string;
  img?: string;
  years: string;
  inDesktop: string;
  path: string;
}

export function Desktop({
  style = "",
  side = "",
  year = "",
  img = "",
  years,
  inDesktop,
  path,
}: DesktopProps) {
  return (
    <div className={`${style} flex w-[532px]`}>
      <div className="w-[400px] p-2 border rounded-md shadow-md relative">
        <SubHeading2 style={`${year} text-[#490099]`} subHeading={years} />
        <Para para={inDesktop} />
      </div>

      <div className="relative">
        <Img style={`${img} w-28`} path={path  as string} alt={"Dr. J C Chaudhry" + years + " journy"}/>
        <span className={side}></span>
      </div>
    </div>
  );
}

interface PhoneProps {
  style?: string;
  side?: string;
  inPhone: string;
  years: string;
  path: string;
}

export function Phone({
  style = "",
  side = "",
  inPhone,
  years,
  path,
}: PhoneProps) {
  return (
    <div className={`${style} w-[250px] p-2 border rounded-md bg-gray-100 shadow-md relative`}>
      <div className="flex items-center">
        <Img style="w-16" path={path  as string} alt={"Dr. J C Chaudhry" + years + " journy"} />
        <Para
          style="text-center ml-5 text-[#490099] font-semibold"
          para={years}
        />
      </div>

      <p className="text-xs text-justify">{inPhone}</p>
      <span className={side}></span>
    </div>
  );
}
