import React, { FC } from "react";
import Image from "next/image";
import Button from "@/components/ButtonComponent";

import PersonInWatch from "@/images/about-section/person-about.svg";

const AboutSection: FC = () => {
  return (
    <>
      <section
        id="about"
        className="container text-pearlBlue flex flex-col space-y-[15px] items-center justify-between my-[60px] md:flex-row md:space-x-[60px]"
      >
        <h1 className="font-light text-[36px] md:hidden">
          <span className="font-bold">About </span>
          Realix VR
        </h1>
        <Image src={PersonInWatch} alt="Person" width={325} height={355} />

        <div className="flex flex-col items-center justify-center space-y-[20px] md:items-start">
          <h1 className="font-light hidden text-[36px] md:block">
            <span className="font-bold">About</span>
            <br />
            Realix VR
          </h1>
          <p className="max-w-[495px] text-[12px] mini:text-[16px] md:max-w-[630px]">
            Realix VR Glasses redefine how people experience the world. Designed
            for innovation and comfort, they open doors to endless possibilities
            in education, entertainment, and productivity. With immersive
            visuals and cutting-edge technology, users can explore new skills,
            train efficiently, and enhance creativity. Whether it’s virtual
            travel, interactive learning, or remote collaboration, Realix VR
            transforms daily life
          </p>
          <Button
          tag="a"
            text="Let's get in touch"
            className="w-[70%] pearlBluespace-nowrap lg:w-[40%]"
            href={"#join"}
          />
        </div>
      </section>
    </>
  );
};

export default AboutSection;
