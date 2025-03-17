import React, { FC } from "react";
import Button from "@/components/ButtonComponent";
import Image from "next/image";

interface PriceProps {
  className?: string;
  title: string;
  price: number;
  period: string;
  points: { imageSrc: string; text: string }[];
  discount?: string;
}

const PriceCard: FC<PriceProps> = ({
  className,
  title,
  price,
  period,
  points,
  discount,
}) => {
  return (
    <div
      className={`${className} flex flex-col items-center rounded-xl p-[30px]  bg-[#2C2D47]/60 text-pearlBlue max-w-[350px]`}
    >
      <p className="text-[20px]">{title}</p>
      <p className="text-[56px] font-medium">${price}</p>
      <p className="text-[16px]">{period}</p>
      <ol className="space-y-[10px] my-[15px]" >
        {points.map((item, index) => (
          <li key={index} className="flex">
            <Image src={item.imageSrc} alt="checkmark" className="mr-[8px]"/> {item.text}
          </li>
        ))}
      </ol>
      <Button
      tag="a"
        background="grayGradient"
        text="Request acess"
        className="mini:w-[80%] mb-[5px]"
        href={"#join"}
      />
      <p>{discount}</p>
    </div>
  );
};

export default PriceCard;
