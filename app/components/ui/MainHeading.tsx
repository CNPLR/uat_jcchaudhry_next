import "../../styles/common.css";

type MainHeadingProps = {
  mainHeading: string;
  style?: string;
  headTag?: string
};

export default function MainHeading({ mainHeading, style, headTag }: MainHeadingProps) {

  switch (headTag) {
    case 'h1':
      return (
        <h1 className={`heading font_bold ${style || ""}`}>
          {mainHeading}
        </h1>
      )
    case 'h2':
      return (
        <h2 className={`heading font_bold ${style || ""}`}>
          {mainHeading}
        </h2>
      )
    case 'h3':
      return (
        <h3 className={`heading font_bold ${style || ""}`}>
          {mainHeading}
        </h3>
      )
    case 'h4':
      return (
        <h1 className={`heading font_bold ${style || ""}`}>
          {mainHeading}
        </h1>
      );
  }

}
