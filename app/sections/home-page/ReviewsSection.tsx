import React, { FC } from "react";
import { reviews } from "@/app/data/Reviews";
import ReviewCard from "@/components/ReviewCard";
import { Carousel } from "flowbite-react";

const ReviewsSection: FC = () => {
  return (
    <section
      id="reviews"
      className="container flex flex-col text-pearlBlue items-center"
    >
      <h1 className="text-[36px]">
        <span className="font-bold"> Users like </span>
        Realix
      </h1>
      <p className="max-w-[600px] text-center text-[16px]">
        Realix is a versatile VR watch that enhances daily life
      </p>
      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-[15px] mt-[15px]">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review.review}
            fullName={review.fullName}
            imageSrc={review.image}
          />
        ))}
      </div>

      {/* <div className="h-[300px] max-w-[400px] m-auto lg:hidden">
        <Carousel slide={false} indicators={false}>
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review.review}
              fullName={review.fullName}
              imageSrc={review.image}
            />
          ))}
        </Carousel>
      </div> */}
    </section>
  );
};

export default ReviewsSection;
