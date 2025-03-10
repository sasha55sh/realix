import React, { FC } from "react";

interface ButtonProps {
  className?: string;
  text?: string;
  type?: "button" | "submit";
  background?:
    | "violetGradient"
    | "grayGradient"
    | "darkGradient"
    | "transparent";
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  bordered?: boolean;
  href?: string;
  tag?: "a" | "button";
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
      : finalBackground === "darkGradient"
      ? "bg-darkGradient"
      : "bg-transparent";
  const disabledBg =
    "disabled:bg-violetGradient disabled:bg-opacity-70 disabled:text-white";
  const textClass =
    finalBackground === "grayGradient"
      ? "text-white"
      : finalBackground === "violetGradient"
      ? "text-deepPurple"
      : bordered
      ? "text-pearlBlue"
      : finalBackground === "darkGradient"
      ? "bg-clip-text text-transparent"
      : "";

  const gradientStyle =
    finalBackground === "darkGradient"
      ? {
          backgroundImage:
            "linear-gradient(90deg, #B67EFD 32%, #F088D2 61%, #FFAD8B 10%)",
        }
      : {};

  const borderClass = bordered
    ? "border border-pearlBlue border-solid"
    : finalBackground === "grayGradient"
    ? " border border-[#2C2D47] border-solid"
    : finalBackground === "darkGradient"
    ? "border border-pearlBlue/60 border-solid"
    : "";
  const widthClass = fullWidth ? "w-[100%]" : "";
  const hoverClass =
    finalBackground === "violetGradient"
      ? "hover:bg-darkVioletGradient hover:text-pearlBlue transition-colors duration-300"
      : bordered
      ? "hover:bg-violetGradient hover:text-deepPurple hover:border-transparent transition-colors duration-300"
      : finalBackground === "darkGradient"
      ? "hover:text-white hover:border-pearlBlue"
      : "";
  return (
    <Tag
      className={`${className} ${disabledBg} ${backgroundClass} ${borderClass} ${textClass} ${widthClass} ${hoverClass} py-[12px] px-[24px] rounded-[40px] flex items-center justify-center disabled:cursor-not-allowed group`}
      style={gradientStyle}
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
