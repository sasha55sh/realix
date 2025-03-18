import React, { FC } from "react";
import { Carousel } from "flowbite-react";
import { data } from "@/app/data/cardData";
import Card from "@/components/BenefitCard";
import Image from "next/image";
import Arrow from "@/images/vectors/right-arrow.svg";

const WhyUseSection: FC = () => {
  return (
    <section id="whyUse" className="container">
      <div className="flex flex-col items-center lg:justify-between lg:flex-row lg:items-end">
        <h1 className="text-pearlBlue text-[36px]">
          <span className="font-bold">Why use </span>
          <span className="lg:block">Realix VR?</span>
        </h1>
        <Image src={Arrow} alt="right-arrow" className="hidden xl:block" />
        <p className="hidden max-w-[495px] text-[16px] text-pearlBlue w-full sm:block md:max-w-[650px]">
          An advanced simulation that transports you into virtual reality with
          incredible precision. Improve your skills with our education mode,
          which will help you learn new things faster. Spend time in silence,
          connect with your mind and soul and feel at rest with every cell of
          body
        </p>
      </div>

      <div className="hidden justify-between mt-[50px] lg:flex">
        {data.map((item) => (
          <Card
            key={item.id}
            imageSrc={item.src}
            imageAlt={item.alt}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <div className="h-[500px] max-w-[400px] mt-[20px] m-auto lg:hidden">
        <Carousel slide={false} indicators={false}>
          {data.map((item) => (
            <Card
              key={item.id}
              imageSrc={item.src}
              imageAlt={item.alt}
              title={item.title}
              description={item.description}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default WhyUseSection;
