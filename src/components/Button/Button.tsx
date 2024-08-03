import { MouseEventHandler } from "react";

type ButtonProps = {
  title: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  title,
  className,
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`custom-btn  ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
