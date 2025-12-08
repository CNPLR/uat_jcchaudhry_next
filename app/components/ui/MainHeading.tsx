import "../../styles/common.css";

type MainHeadingProps = {
  mainHeading: string;
  style?: string;
};

export default function MainHeading({ mainHeading, style }: MainHeadingProps) {
  return (
    <h1 className={`heading font_bold ${style || ""}`}>
      {mainHeading}
    </h1>
  );
}
