import React, { FC } from "react";
import { Carousel } from "flowbite-react";
import Card from "@/components/BenefitCard";

import Image from "next/image";
import Person1 from "@/images/why-use-section/person1.svg";
import Person2 from "@/images/why-use-section/person2.svg";
import Person3 from "@/images/why-use-section/person3.svg";
import Person4 from "@/images/why-use-section/person4.svg";
import Arrow from "@/images/vectors/right-arrow.svg";

const data = [
  {
    id: 1,
    src: Person1,
    alt: "Person",
    title: "simulation",
    description:
      "An advanced simulation that transports you into virtual reality with incredible precision",
  },
  {
    id: 2,
    src: Person2,
    alt: "Person",
    title: "education",
    description:
      "Improve your skills with our education mode, which will help you learn new things faster",
  },
  {
    id: 3,
    src: Person3,
    alt: "Person",
    title: "self-care",
    description:
      "Spend time in silence, connect with your mind and soul and feel at rest with every cell of body",
  },
  {
    id: 4,
    src: Person4,
    alt: "Person",
    title: "outdoor",
    description:
      "The open sky, the rustling leaves, and the warmth of the sun and technology meets nature",
  },
];

const WhyUseSection: FC = () => {
  return (
    <section className="container">
      <div className="flex flex-col items-center lg:justify-between lg:flex-row lg:items-end">
        <h1 className="text-white text-[36px] uppercase">
          <span className="font-bold">why use </span>
          <span className="lg:block">realix?</span>
        </h1>
        <Image src={Arrow} alt="right-arrow" className="hidden xl:block" />
        <p className="hidden text-[16px] text-white w-full sm:block lg:max-w-[650px]">
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
