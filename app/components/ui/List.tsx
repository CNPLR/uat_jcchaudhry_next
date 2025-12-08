import Para from "./Para";

type ListProps = {
  para: string;
};

export default function List({ para }: ListProps) {
  return (
    <div className="flex items-start">
      <li />
      <Para para={para} />
    </div>
  );
}
