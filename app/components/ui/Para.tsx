import "../../styles/common.css";

type ParaProps = {
  para: string;
  style?: string;
};

export default function Para({ para, style }: ParaProps) {
  return <p className={`para ${style || ""}`}>{para}</p>;
}
