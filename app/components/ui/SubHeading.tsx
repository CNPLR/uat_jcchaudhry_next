import "../../styles/common.css";

type SubHeadingProps = {
  subHeading: string;
  style?: string;
};

export default function SubHeading({ subHeading, style }: SubHeadingProps) {
  return (
    <h2 className={`subHeading font_bold ${style || ""}`}>
      {subHeading}
    </h2>
  );
}
