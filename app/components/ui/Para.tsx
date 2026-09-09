import "../../styles/common.css";

type ParaProps = {
  para: string | React.ReactNode;
  style?: string;
};

export default function Para({ para, style }: ParaProps) {
  return <p className={`para ${style || ""}`}>{para}</p>;
}
