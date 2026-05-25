import "../../styles/common.css";

type SubHeadingProps = {
  subHeading: string;
  style?: string;
  headTag?: string;
};

export default function SubHeading({ subHeading, style, headTag }: SubHeadingProps) {

  switch (headTag) {

    case 'h1':
      return (
        <h1 className={`subHeading font_bold ${style || ""}`}>
          {subHeading}
        </h1>
      );

    case 'h2':
      return (
        <h2 className={`subHeading font_bold ${style || ""}`}>
          {subHeading}
        </h2>
      );

    case 'h3':
      return (
        <h3 className={`subHeading font_bold ${style || ""}`}>
          {subHeading}
        </h3>
      );

    case 'h4':
      return (
        <h4 className={`subHeading font_bold ${style || ""}`}>
          {subHeading}
        </h4>
      );
    default:
      return (
        <h2 className={`subHeading font_bold ${style || ""}`}>
          {subHeading}
        </h2>
      );
  }

}
