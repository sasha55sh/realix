import React, { FC } from "react";
import Card from "@/components/BenefitCard";

import Image from "next/image";
import Person1 from "@/images/why-use-section/person1.svg";
import Person2 from "@/images/why-use-section/person2.svg";
import Person3 from "@/images/why-use-section/person3.svg";
import Person4 from "@/images/why-use-section/person4.svg";
import Arrow from "@/images/vectors/right-arrow.svg";

const WhyUseSection: FC = () => {
  return (
    <section className="container">
      <div className="flex items-end">
        <h1 className="text-white text-[36px]">
          <span className="font-bold">WHY USE</span>
          <br />
          REALIX?
        </h1>
        <Image src={Arrow} alt="right-arrow" />
        <p className="text-[16px] text-white max-w-[650px]">
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae
        </p>
      </div>

      <div></div>
    </section>
  );
};

export default WhyUseSection;
