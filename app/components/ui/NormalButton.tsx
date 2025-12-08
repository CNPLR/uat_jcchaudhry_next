"use client";

type NormalButtonProps = {
  text: string;
  onClick?: () => void;
  style?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function NormalButton({
  text,
  onClick,
  style = "",
  type = "button",
  disabled = false
}: NormalButtonProps) {
  return (
    <div
      onClick={onClick}
      className={`${style} transition buttonHover buttonBackground p-2 shadow-2xl font-semibold h-10 rounded-md flex justify-center items-center cursor-pointer`}
    >
      <button type={type} disabled={disabled} className="text-white pointer-events-none">
        {text}
      </button>
    </div>
  );
}
