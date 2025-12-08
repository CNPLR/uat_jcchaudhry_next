import "../../common.css";

type SparaProps = {
  para: string;
  style?: string;
};

export default function Spara({ para, style }: SparaProps) {
  return <p className={`spara ${style || ""}`}>{para}</p>;
}
