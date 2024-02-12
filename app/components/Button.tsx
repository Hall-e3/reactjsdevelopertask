import React from "react";

type Props = {
  text: string | React.ReactNode;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick: VoidFunction;
  buttonStyle?: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  leftIcon?: React.ReactElement;
};

export default function Button({ text, buttonStyle, onClick, icon, type, disabled, outline, small, leftIcon }: Props) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`${buttonStyle} text-[13px] disabled:opacity-70 disabled:cursor-not-allowed ${
        outline ? "bg-white border-black " : "bg-rose-500 border-rose-500 "
      } ${small ? "py-1 text-sm font-light border-[1px]" : " text-md font-semibold"}`}
      onClick={onClick}>
      <div className="flex items-center space-x-4 justify-center">
        {leftIcon && <div>{leftIcon}</div>}
        {text && <div>{text}</div>}
        {icon && <div>{icon}</div>}
      </div>
    </button>
  );
}
