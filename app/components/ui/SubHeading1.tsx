import "../../styles/common.css";

type SubHeading1Props = {
  subHeading: string;
  style?: string;
};

export default function SubHeading1({ subHeading, style }: SubHeading1Props) {
  return (
    <h3 className={`subheading1 font_bold ${style || ""}`}>
      {subHeading}
    </h3>
  );
}
