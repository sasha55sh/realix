import React, { FC } from "react";
import Image from "next/image";
import Button from "@/components/ButtonComponent";

import PersonInWatch from "@/images/about-section/person-about.svg";

const AboutSection: FC = () => {
  return (
    <>
      <section className="container text-white flex flex-col space-y-[15px] items-center justify-between my-[60px] md:flex-row md:space-x-[60px]">
        <h1 className="font-light uppercase md:hidden text-[36px]">
          <span className="font-bold">about </span>
          realix vr
        </h1>
        <Image src={PersonInWatch} alt="Person" width={325} height={355} />

        <div className="flex flex-col items-center justify-center space-y-[20px] md:items-start">
          <h1 className="font-light uppercase hidden text-[36px md:block]">
            <span className="font-bold">about</span>
            <br />
            realix vr
          </h1>
          <p className="max-w-[500px] text-[12px] mini:text-[16px] md:max-w-[630px]">
            Realix VR Glasses redefine how people experience the world. Designed
            for innovation and comfort, they open doors to endless possibilities
            in education, entertainment, and productivity. With immersive
            visuals and cutting-edge technology, users can explore new skills,
            train efficiently, and enhance creativity. Whether it’s virtual
            travel, interactive learning, or remote collaboration, Realix VR
            transforms daily life
          </p>
          <Button
            text="LET'S GET IN TOUCH"
            className="w-[70%] whitespace-nowrap lg:w-[40%]"
          />
        </div>
      </section>
    </>
  );
};

export default AboutSection;
