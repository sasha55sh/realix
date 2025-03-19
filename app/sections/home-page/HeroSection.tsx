import React, { FC } from "react";
import Button from "@/components/ButtonComponent";
import ContactsComponent from "@/components/ContactsComponent";
import { Carousel } from "flowbite-react";
import { contactData } from "@/app/data/ContactsData";

import Image from "next/image";
import PersonImage from "@/images/hero-section/person-in-watch.svg";
import Background from "@/images/hero-section/background.svg";

const HeroSection: FC = () => {
  return (
    <section className="container mt-[10px] relative md:mt-[70px]">
      <div className="text-pearlBlue flex flex-col justify-between items-center md:flex-row">
        <div className="flex flex-col items-center space-y-[30px] order-2 md:order-1 md:items-start">
          <h1
            className="text-[56px] text-center font-semibold bg-clip-text text-transparent leading-none md:text-[72px] md:text-left"
            style={{
              backgroundImage:
                "linear-gradient(35deg, #B67EFD 32%,rgb(136, 240, 238) 61%",
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
          <Button
            tag="a"
            text="Choose your plan"
            background="darkGradient"
            href={"#pricing"}
          />
        </div>
        <Image
          src={PersonImage}
          alt="Person"
          className="h-[325px] w-[350px] order-1 md:order-2 lg:w-[400px] lg:h-[425px]"
          loading="lazy"
        />
      </div>

      <ul
        id="contacts"
        className="w-full justify-around my-[30px] bg-heroGradient p-[20px] rounded-full hidden scroll-my-[100px] lg:flex"
      >
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

      <div
        id="contacts"
        className="h-[100px] max-w-[500px] m-auto bg-heroGradient rounded-full mt-[30px] scroll-mt-[100px] lg:hidden"
      >
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
