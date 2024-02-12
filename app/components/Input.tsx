import React from "react";

type Props = {
  label?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  styles?: string;
  disabled?: boolean;
  error?: string | null | boolean;
  onFocus?: VoidFunction;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

//  value={typeof value === "string" ? value : value instanceof Date ? value.toISOString() : ""}

export default function Input({ label, type, name, placeholder, value, onChange, iconRight, iconLeft, styles, disabled, error, onFocus, onKeyDown }: Props) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className={`block mb-2 text-[13px]  text-gray-900`}>{label}</label>
      </div>
      <div className="flex flex-col">
        <div className={`flex items-center ${styles} ${error ? "border-findit_red" : "border-stroke"}`}>
          {iconLeft && iconLeft}
          <input
            type={type}
            name={name}
            onKeyDown={onKeyDown}
            value={value}
            onFocus={onFocus}
            className={`h-full outline-none rounded text-gray-900 text-sm py-4.5 px-3 ${iconLeft ? "ml-4" : "mr-4"}  block w-full `}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChange}
          />
          {iconRight && iconRight}
        </div>
        {error && <p className="text-findit_red text-xs">{error}</p>}
      </div>
    </div>
  );
}
