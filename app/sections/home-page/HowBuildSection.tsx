import React, { FC } from "react";
import Image from "next/image";
import Circle from "@/components/CircleComponent";

import Arrow from "@/images/vectors/right-arrow.svg";

const data = [
  { id: 1, num: "01", title: "3D conception & design" },
  { id: 2, num: "02", title: "interaction design" },
  { id: 3, num: "03", title: "VR world user testing" },
  { id: 4, num: "04", title: "realix VR deploy" },
];

const HowBuildSection: FC = () => {
  return (
    <section className="container">
      <div className="flex flex-col items-center lg:justify-between lg:flex-row lg:items-end">
        <h1 className="text-white text-[36px] uppercase">
          <span className="font-bold">how we build </span>
          <span className="lg:block">realix vr?</span>
        </h1>

        <Image src={Arrow} alt="right-arrow" className="hidden xl:block" />

        <p className="hidden text-[16px] text-white w-full sm:block max-w-[550px] xl:max-w-[650px]">
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
      </div>
      <div className="flex justify-between mt-[30px]">
        {data.map((item) => (
          <Circle key={item.id} position={item.num} title={item.title} />
        ))}
      </div>
    </section>
  );
};

export default HowBuildSection;
