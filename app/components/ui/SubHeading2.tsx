import "../../styles/common.css";

type SubHeading2Props = {
  subHeading: string;
  style?: string;
  headTag?: string
};

export default function SubHeading2({ subHeading, style, headTag }: SubHeading2Props) {

  switch (headTag) {
    case 'h1':
      return (
        <h1 className={`subheading2 font_bold ${style || ""}`}>
          {subHeading}
        </h1>
      )
    case 'h2':
      return (
        <h2 className={`subheading2 font_bold ${style || ""}`}>
          {subHeading}
        </h2>
      )
    case 'h3':
      return (
        <h3 className={`subheading2 font_bold ${style || ""}`}>
          {subHeading}
        </h3>
      )
    default:
      return (
        <h4 className={`subheading2 font_bold ${style || ""}`}>
          {subHeading}
        </h4>
      );
  }

}
