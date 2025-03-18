import React, { FC } from "react";
import Image from "next/image";
import Circle from "@/components/CircleComponent";
import { Carousel } from "flowbite-react";

import Arrow from "@/images/vectors/right-arrow.svg";

const data = [
  { id: 1, num: "01", title: "3D conception & design" },
  { id: 2, num: "02", title: "interaction design" },
  { id: 3, num: "03", title: "VR world user testing" },
  { id: 4, num: "04", title: "realix VR deploy" },
];

const HowBuildSection: FC = () => {
  return (
    <section id="howBuild" className="container my-[60px]">
      <div className="flex flex-col items-center lg:justify-between lg:flex-row lg:items-end">
        <h1 className="text-pearlBlue text-[36px] text-center lg:text-start">
          <span className="font-bold">How we build </span>
          <span className="lg:block">Realix?</span>
        </h1>

        <Image src={Arrow} alt="right-arrow" className="hidden xl:block" />

        <p className="hidden text-[16px] text-pearlBlue w-full max-w-[495px] sm:block md:max-w-[650px]">
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae
        </p>
      </div>
      <div className="hidden lg:flex justify-between mt-[30px]">
        {data.map((item) => (
          <Circle key={item.id} position={item.num} title={item.title} />
        ))}
      </div>

      <div className="h-[200px] max-w-[400px] mt-[20px] m-auto lg:hidden">
        <Carousel slide={false} indicators={false}>
          {data.map((item) => (
            <Circle key={item.id} position={item.num} title={item.title} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default HowBuildSection;
