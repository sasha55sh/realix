import React, { FC } from "react";
import Image from "next/image";
import Button from "@/components/ButtonComponent";

interface CardProps {
  className?: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const BenefitCart: FC<CardProps> = ({
  className,
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div
      className={`${className} flex flex-col items-center rounded-xl max-w-[230px] bg-useCardGradient py-[40px] px-[30px] space-y-4 xl:max-w-[310px]`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        className="border border-[12px] border-[#0e0e0e]/30 rounded-full "
      />
      <h2 className="font-bold text-[24px] text-white uppercase">{title}</h2>
      <hr className="w-[155px] border-t border-white/30" />
      <p className="text-white text-[12px]">{description}</p>
      <Button
      tag="a"
        background="violetGradient"
        text="Try it now"
        className="h-[50px]"
        href="#pricing"

      />
    </div>
  );
};

export default BenefitCart;
