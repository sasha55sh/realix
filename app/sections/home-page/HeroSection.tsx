import React, { FC } from "react";
import Button from "@/components/ButtonComponent";
import ContactsComponent from "@/components/ContactsComponent";
import { Carousel } from "flowbite-react";

import Image from "next/image";
import PersonImage from "@/images/hero-section/person-in-watch.svg";
import Background from "@/images/hero-section/background.svg";
import Mail from "@/images/vectors/mail.svg";
import Map from "@/images/vectors/map.svg";
import Phone from "@/images/vectors/phone.svg";

const contactData = [
  {
    id: 1,
    src: Map,
    alt: "map",
    title: "Pay Us a Visit",
    description: "Khreshchatyk St, Kyiv, 01001, Ukraine",
  },
  {
    id: 2,
    src: Phone,
    alt: "phone",
    title: "Give Us a Call",
    description: "+380 (44) 123-45-67",
  },
  {
    id: 3,
    src: Mail,
    alt: "mail",
    title: "Send Us a Message",
    description: "realix@gmail.com",
  },
];
const HeroSection: FC = () => {
  return (
    <section className="container mt-[10px] relative md:mt-[70px]">
      <div className="text-pearlBlue flex flex-col justify-between items-center md:flex-row">
        <div className="flex flex-col items-center space-y-[30px] order-2 md:order-1 md:items-start">
          <h1
            className="text-[60px] text-center font-semibold bg-clip-text text-transparent leading-none md:text-[72px] md:text-left"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #B67EFD 32%, #F088D2 61%, #FFAD8B 10%)",
            }}
          >
            Improve your <br />
            <span className="text-pearlBlue">lifestyle</span>
          </h1>
          <p className="text-center max-w-[495px] md:text-left">
            With immersive visuals and cutting-edge technology, users can
            explore new skills, train efficiently, and enhance creativity.
            <span className="hidden md:block">
              Whether it’s virtual travel, interactive learning, or remote
              collaboration, Realix VR transforms daily life
            </span>
          </p>
          <Button text="Choose your plan" background="darkGradient" />
        </div>
        <Image
          src={PersonImage}
          alt="Person"
          className="h-[325px] w-[350px] order-1 md:order-2 lg:w-[400px] lg:h-[425px]"
          loading="lazy"
        />
      </div>

      <ul className="w-full justify-around my-[30px] bg-heroGradient p-[20px] rounded-full hidden lg:flex">
        {contactData.map((item) => (
          <ContactsComponent
            key={item.id}
            src={item.src}
            alt={item.alt}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>

      <div className="h-[100px] max-w-[500px] m-auto bg-heroGradient rounded-full mt-[30px] lg:hidden">
        <Carousel slide={false} indicators={false}>
          {contactData.map((item) => (
            <ContactsComponent
              key={item.id}
              src={item.src}
              alt={item.alt}
              title={item.title}
              description={item.description}
              className="justify-center"
            />
          ))}
        </Carousel>
      </div>
      <Image
        src={Background}
        alt="Background"
        className="absolute -top-[50px] -z-10 object-cover hidden md:block"
        height={300}
        width={1400}
      />
    </section>
  );
};

export default HeroSection;
