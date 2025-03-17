import React, { FC } from "react";
import Image from "next/image";

import Arrow from "@/images/vectors/small-arrow.svg";

interface CircleProp {
  className?: string;
  position: string;
  title: string;
}

const Circle: FC<CircleProp> = ({ className, position, title }) => {
  return (
    <div className={`${className} flex flex-col space-y-[30px] items-center`}>
      <div className="bg-circleGradient lg:w-[160px] lg:h-[160px] w-[100px] h-[100px] rounded-full flex items-center justify-center">
        <h2 className="text-[64px] text-deepPurple font-bold">{position}</h2>
      </div>

      <div className="flex items-start space-x-[10px]">
        <Image src={Arrow} alt="Arrow" height={30} width={30} />
        <p className="max-w-[187px] text-[16px] text-white font-bold capitalize xl:text-[24px]">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Circle;
