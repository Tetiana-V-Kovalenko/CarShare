import Image from "next/image";
import { MouseEventHandler } from "react";

type ButtonProps = {
  title: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  rightIcon?: string;
  leftIcon?: string;
};

const Button = ({
  title,
  className,
  type = "button",
  disabled = false,
  onClick,
  rightIcon,
  leftIcon,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`custom-btn  ${className ? className : "justify-center "} `}
      onClick={onClick}
    >
      {leftIcon && (
        <div>
          <Image
            src={leftIcon}
            alt="left icon"
            fill
            className="object-contain"
          />
        </div>
      )}
      {title}
      {rightIcon && (
        <div className="relative w-6 h-6 flex-end">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default Button;
