import React, { FC } from "react";

interface ButtonProps {
  className?: string;
  text?: string;
  type?: "button" | "submit";
  background?: "violetGradient" | "grayGradient" | "transparent";
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  bordered?: boolean;
  href?: string;
  tag?: "a" | "button"
}

const Button: FC<ButtonProps> = ({
  className,
  text,
  type = "button",
  background = "violetGradient",
  fullWidth = false,
  disabled,
  onClick,
  bordered = false,
  href,
  tag = "button",
}) => {
  const Tag = tag;
  const finalBackground = bordered ? "transparent" : background;
  const backgroundClass =
    finalBackground === "violetGradient"
      ? "bg-violetGradient"
      : finalBackground === "grayGradient"
      ? "bg-grayGradient"
      : "bg-transparent";
  const disabledBg =
    "disabled:bg-violetGradient disabled:bg-opacity-70 disabled:text-white";
  const textClass =
    finalBackground === "grayGradient"
      ? "text-white"
      : finalBackground === "violetGradient"
      ? "text-deepPurple"
      : bordered
      ? "text-white"
      : "";
  const borderClass = bordered ? "border border-white border-solid" : "";
  const widthClass = fullWidth ? "w-[100%]" : "";
  const hoverClass =
    finalBackground === "violetGradient"
      ? "hover:bg-darkVioletGradient hover:text-white transition-colors duration-300"
      : bordered
      ? "hover:bg-violetGradient hover:text-deepPurple hover:border-0 transition-colors duration-300"
      : "";
  return (
    <Tag
      className={`${className} ${disabledBg} ${backgroundClass} ${borderClass} ${textClass} ${widthClass} ${hoverClass} py-[16px] px-[24px] rounded-[40px] flex items-center justify-center disabled:cursor-not-allowed group`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      href={href}
    >
      {text}
    </Tag>
  );
};

export default Button;
