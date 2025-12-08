import "../../styles/common.css";

type LinkTextProps = {
  para: string;
  style?: string;
  onClick?: React.MouseEventHandler<HTMLParagraphElement>;
};

export default function LinkText({ para, style, onClick }: LinkTextProps) {
  return (
    <p
      onClick={onClick}
      className={`${style || ""} cursor-pointer font_family para text_black font_bold hover:underline`}
    >
      {para}
    </p>
  );
}

