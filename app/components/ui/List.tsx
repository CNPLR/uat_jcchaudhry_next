import Para from "./Para";

type ListProps = {
  para: string;
};

export default function List({ para }: ListProps) {
  return (
    <div className="flex items-start">
      <div className="list-disc pl-5">
        <p className="list-item"></p>
      </div>
      <Para para={para} />
    </div>
  );
}
