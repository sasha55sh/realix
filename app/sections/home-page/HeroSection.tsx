import React, { FC } from "react";
import Button from "@/components/ButtonComponent";

import Image from "next/image";
import PersonImage from "@/images/hero-section/person-in-watch.svg";
import Background from "@/images/hero-section/background.svg";
import Mail from "@/images/vectors/mail.svg";
import Map from "@/images/vectors/map.svg";
import Phone from "@/images/vectors/phone.svg";

const ContactData = [
  { imageSrc: Mail, imageAlt: "Mail" },
  { imageSrc: Map, imageAlt: "Map" },
  { imageSrc: Phone, imageAlt: "Phone" },
];
const HeroSection: FC = () => {
  return (
    <>
      <section className="relative">
        {/* <div className="container flex">
          <div>
            <h1>
              Dive into VR world <br /> with us
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
              Lectus mauris eros in vitae
            </p>
          </div>
          <Image src={PersonImage} alt="Person" />
        </div> */}

        <div className="container w-full h-auto bg-heroGradient rounded-full"></div>

        {/* <Image
          src={Background}
          alt="background"
          className="flex top-0 absolute -z-10 justify-center"
        /> */}
      </section>
    </>
  );
};

export default HeroSection;
