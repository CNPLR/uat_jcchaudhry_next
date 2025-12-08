import "../../styles/common.css";

type SubHeading2Props = {
  subHeading: string;
  style?: string;
};

export default function SubHeading2({ subHeading, style }: SubHeading2Props) {
  return (
    <h4 className={`subheading2 font_bold ${style || ""}`}>
      {subHeading}
    </h4>
  );
}
