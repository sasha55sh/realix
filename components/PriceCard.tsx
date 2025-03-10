import React, { FC } from "react";
import Button from "@/components/ButtonComponent";

interface PriceProps {
  className?: string;
  title: string;
  price: number;
  period: string;
  point: string;
  discount: string;
}

const PriceCard: FC<PriceProps> = ({
  className,
  title,
  price,
  period,
  point,
  discount,
}) => {
  return (
    <div
      className={`${className} flex flex-col items-center rounded-xl py-[30px]  bg-[#2C2D47]/60 text-pearlBlue max-w-[350px]`}
    >
    <p className="text-[20px]">{title}</p>
    <p className="text-[56px] font-medium">${price}</p>
    <p className="text-[16px]">{period}</p>
    <ol>
    <li>{point}</li>
    </ol>
    <Button background="grayGradient" text="Request acess" className="mini:w-[80%]"/>
    <p>{discount}</p>
    </div>
  );
};

export default PriceCard;
