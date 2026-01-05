import "../../styles/common.css";

type SmallButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  style?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
};

export default function SmallButton({
  text,
  type = "button",
  style,
  onClick,
  isDisabled = false,
}: SmallButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`${style || ""} cursor-pointer transition buttonHover buttonBackground shadow-2xl font-semibold h-10 rounded-md w-28 flex justify-center items-center text-white`}
    >
      {text}
    </button>
  );
}
