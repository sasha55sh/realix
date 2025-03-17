"use client";
import React, { FC, useState } from "react";
import PriceCard from "@/components/PriceCardComponent";
import greenCheckmark from "@/images/vectors/green-checkmark.svg";
import grayCheckmark from "@/images/vectors/gray-checkmark.svg";
import { text } from "stream/consumers";

const incompleteData = [
  { id: 1, imageSrc: greenCheckmark, text: "Type of threat" },
  { id: 2, imageSrc: greenCheckmark, text: "Online presence" },
  { id: 3, imageSrc: greenCheckmark, text: "Acess to all modules" },
  { id: 4, imageSrc: grayCheckmark, text: "Notability" },
  { id: 5, imageSrc: grayCheckmark, text: "Optimize existing websites" },
  { id: 6, imageSrc: grayCheckmark, text: "Search autocomplete" },
];

const completeData = [
  { id: 1, imageSrc: greenCheckmark, text: "Type of threat" },
  { id: 2, imageSrc: greenCheckmark, text: "Online presence" },
  { id: 3, imageSrc: greenCheckmark, text: "Acess to all modules" },
  { id: 4, imageSrc: greenCheckmark, text: "Notability" },
  { id: 5, imageSrc: greenCheckmark, text: "Optimize existing websites" },
  { id: 6, imageSrc: greenCheckmark, text: "Search autocomplete" },
];

const PriceSection: FC = () => {
  const [isActiveButton, setIsActiveButton] = useState<string | null>("year");

  return (
    <section>
      <div className="text-pearlBlue flex flex-col items-center">
        <h1 className="text-[56px] font-bold">Pricing</h1>
        <p className="w-[500px] text-center">
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
          <div className="flex justify-evenly">
            <PriceCard
              title="Start here"
              price={0}
              period="Per month"
              discount="It's free so why not"
              points={incompleteData}
            />

            <PriceCard
              title="Single"
              price={56}
              period="Per month"
              discount="Save $23 per year"
              points={completeData}
            />
            <PriceCard
              title="Family"
              price={124}
              period="Per month"
              discount="Save $23 per year"
              points={completeData}
            />
          </div>
        ) : (
          <div className="flex justify-evenly">
            <PriceCard
              title="Start here"
              price={0}
              period="Per month"
              points={incompleteData}
            />

            <PriceCard
              title="Single"
              price={60}
              period="Per month"
              points={completeData}
            />
            <PriceCard
              title="Family"
              price={130}
              period="Per month"
              points={completeData}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default PriceSection;
