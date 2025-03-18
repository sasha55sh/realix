"use client";
import React, { FC, useState } from "react";
import PriceCard from "@/components/PriceCardComponent";
import { monthPlan, yearPlan } from "@/app/data/PriceData";
import { Carousel } from "flowbite-react";

const PriceSection: FC = () => {
  const [isActiveButton, setIsActiveButton] = useState<string | null>("year");

  return (
    <section id="pricing" className="my-[60px]">
      <div className="text-pearlBlue flex flex-col items-center">
        <h1 className="text-[36px] font-bold">Pricing</h1>
        <p className="max-w-[495px] text-center">
          You can stay on the $56 plan until you have enough active user to
          justify managing their data or you start settings things
        </p>
        <div className="inline-flex bg-darkGray rounded-2xl p-[5px] border border-[2px] border-grafit/20 mt-[20px]">
          <button
            onClick={() => setIsActiveButton("year")}
            className={
              isActiveButton === "year"
                ? "rounded-full bg-grafit/20 p-[10px] mr-[10px]"
                : ""
            }
          >
            Billed yearly -20%
          </button>
          <button
            onClick={() => setIsActiveButton("month")}
            className={
              isActiveButton === "month"
                ? "rounded-full bg-grafit/20 p-[10px] ml-[10px]"
                : ""
            }
          >
            Billed monthly
          </button>
        </div>
      </div>
      
      <div className="my-[30px]">
        {isActiveButton === "year" ? (
          <>
            <div className="lg:flex justify-evenly hidden">
              {yearPlan.map((plan) => (
                <PriceCard
                  key={plan.id}
                  title={plan.title}
                  price={plan.price}
                  discount={plan.discount}
                  points={plan.points}
                  period={plan.period}
                />
              ))}
            </div>

            <div className="flex h-[500px] justify-evenly max-w-[500px] m-auto lg:hidden">
              <Carousel slide={false} indicators={false}>
                {yearPlan.map((plan) => (
                  <PriceCard
                    key={plan.id}
                    title={plan.title}
                    price={plan.price}
                    discount={plan.discount}
                    points={plan.points}
                    period={plan.period}
                  />
                ))}
              </Carousel>
            </div>
          </>
        ) : (
          <>
            <div className="lg:flex justify-evenly hidden">
              {monthPlan.map((plan) => (
                <PriceCard
                  key={plan.id}
                  title={plan.title}
                  price={plan.price}
                  discount={plan.discount}
                  points={plan.points}
                  period={plan.period}
                />
              ))}
            </div>

            <div className="flex h-[500px] justify-evenly max-w-[500px] m-auto lg:hidden">
              <Carousel slide={false} indicators={false}>
                {monthPlan.map((plan) => (
                  <PriceCard
                    key={plan.id}
                    title={plan.title}
                    price={plan.price}
                    discount={plan.discount}
                    points={plan.points}
                    period={plan.period}
                  />
                ))}
              </Carousel>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default PriceSection;
