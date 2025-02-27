import React, { ChangeEvent, FC, useState } from "react";

interface InputProps {
  className?: string;
  placeholder?: string;
  inputType: "input" | "textarea";
  type?: "text" | "email";
  fullWidth?: boolean;
  error?: string | null;
  required?: boolean;
  disabled?: boolean;
  pattern?: string;
  value?: string;
  name?: string;
  maxLenght?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InputComponent: FC<InputProps> = ({
  className,
  placeholder,
  inputType,
  type = "text",
  fullWidth,
  error,
  required,
  disabled,
  pattern,
  value,
  name,
  maxLenght,
  onChange,
}) => {
  const widthClass = fullWidth ? "w-[100%]" : "";

  const inputContent = () => {
    if (inputType === "input") {
      return (
        <div className={`${className} flex flex-col w-full`}>
          <input
            className={`${className} ${widthClass} py-[16px] px-[30px] bg-transparent text-white rounded-full focus:outline-none border-[2px] border-solid border-white`}
            type={type}
            placeholder={placeholder}
            pattern={pattern}
            value={value}
            required={required}
            name={name}
            disabled={disabled}
            onChange={onChange}
          />

          {error && (
            <p
              className="text-[14px] 
                text-white"
            >
              {error}
            </p>
          )}
        </div>
      );
    } else if (inputType === "textarea") {
      return (
        <>
          <textarea
            placeholder={placeholder}
            required={required}
            value={value}
            disabled={disabled}
            onChange={onChange}
            className={`${className} py-[16px] px-[30px] bg-transparent text-white w-full resize-none h-[210px] rounded-[40px] border-[2px] border-white lg:w-[90%] xl:w-[70%] focus:outline-none`}
          />
          {error && <p className="text-[14px] text-white">{error}</p>}
        </>
      );
    } else {
      return null;
    }
  };
  return <>{inputContent()}</>;
};

export default InputComponent;
