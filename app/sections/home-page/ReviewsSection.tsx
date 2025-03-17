import React, { FC } from "react";
import Image from "next/image";
import { Reviews } from "@/app/data/Reviews";

const ReviewsSection: FC = () => {
  return (
    <section
      id="reviews"
      className="container flex flex-col text-pearlBlue items-center"
    >
      <h1 className="text-[36px] font-medium lg:text-[56px]">
        Users like Realix
      </h1>
      <p className="max-w-[600px] text-center text-[16px]">
        Realix is a versatile VR watch that enhances daily life
      </p>
      <div className="grid grid-cols-4 grid-rows-2 gap-[15px] mt-[15px]">
        {Reviews.map((review: any, index: number) => (
          <div
            key={index}
            className="bg-[#1B1C36]/60 rounded-xl border border-[#1B1C36] p-[10px] max-w-[290px] grid grid-cols-[56px_1fr]"
          >
            <Image
              src={review.image}
              alt={`Image ${index + 1}`}
              width={56}
              height={56}
              className="col-span pr-[15px]"
            />
            <h2 className="text-[20px] font-medium whitespace-nowrap self-center">
              {review.fullName}
            </h2>
            <p className="col-span-2">{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
