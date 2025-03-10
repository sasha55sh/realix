import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../images/logo.svg";
import Instagram from "../images/footer/instagram.svg";
import Pinterest from "../images/footer/pinterest.svg";
import Facebook from "../images/footer/facebook.svg";
import Youtube from "../images/footer/youtube.svg";

const socialObject = [
  { href: "https://www.instagram.com/", title: "Instagram", image: Instagram },
  { href: "https://www.pinterest.com/", title: "Pinterest", image: Pinterest },
  { href: "https://www.facebook.com/", title: "Facebook", image: Facebook },
  { href: "https://www.youtube.com/", title: "Youtube", image: Youtube },
];

const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/services", text: "Services" },
  { href: "/contact", text: "Contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="container text-white font-bold text-default flex flex-col pt-[40px]">
      <div className="flex flex-col w-full items-center justify-evenly mini:flex-row">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            className="transition delay-150 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"
          />
        </Link>

        <hr className="hidden bg-violetGradient h-[110px] w-[3px] border-0 md:block" />
        <ul className="hidden space-y-2 md:block">
          {links.map(({ href, text }, index) => (
            <li
              key={index}
              className="transition-transform duration-300 hover:scale-105 hover:text-lavenderBlue"
            >
              <Link href={href}>{text}</Link>
            </li>
          ))}
        </ul>
        <hr className="hidden bg-violetGradient h-[110px] w-[3px] border-0 mini:block" />
        <ul className="hidden space-y-2 mini:block">
          {links.map(({ href, text }, index) => (
            <li
              key={index}
              className="transition-transform duration-300 hover:scale-105 hover:text-lavenderBlue"
            >
              <Link href={href}>{text}</Link>
            </li>
          ))}
        </ul>
        <hr className="hidden bg-violetGradient h-[110px] w-[3px] border-0 mini:block" />
        <div className="mt-[10px] mini:mt-0">
          <p>SOCIALIZE WITH REALIX</p>
          <div className="flex gap-[10px] justify-center mt-[10px]">
            {socialObject.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  height={12}
                  className="h-[25px] w-[25px] transition delay-150 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <hr className="bg-violetGradient h-[1px] w-full border-0 my-[25px]" />
      <p className="text-center">
        {currentYear} © REALIX - BY OLEKSANDRA SHAPOVALIUK - ALL RIGHTS RESERVED
      </p>
    </div>
  );
};

export default Footer;
