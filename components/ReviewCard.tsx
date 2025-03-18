import React, { FC } from "react";
import Image from "next/image";

interface reviewProps {
  className?: string;
  imageSrc: string;
  fullName: string;
  review: string;
}

const ReviewComponent: FC<reviewProps> = ({
  className,
  imageSrc,
  fullName,
  review,
}) => {
  return (
    <div
      className={`${className} bg-[#1B1C36]/60 rounded-xl border border-[#1B1C36] p-[10px] max-w-[290px] grid grid-cols-[56px_1fr]`}
    >
      <Image
        src={imageSrc}
        alt="Image"
        width={56}
        height={56}
        className="col-span pr-[15px]"
      />
      <h2 className="text-[20px] font-medium pearlBluespace-nowrap self-center">
        {fullName}
      </h2>
      <p className="col-span-2">{review}</p>
    </div>
  );
};

export default ReviewComponent;
