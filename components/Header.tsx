import React, { FC } from "react";
import Logo from "../images/logo.svg";
import Link from "next/link";
import Image from "next/image";
import Button from "./ButtonComponent";

const navData = [
  { link: "/text", text: "Text" },
  { link: "/text", text: "Text" },
  { link: "/text", text: "Text" },
  { link: "/text", text: "Text" },
  { link: "/text", text: "Text" },
];

const Header = () => {
  const HeaderNavigation: FC<{ className?: string }> = ({ className }) => {
    return (
      <div className={`${className} flex flex-row justify-between`}>
        <nav className="hidden flex-row text-white font-bold text-[12px] lg:flex">
          {navData.map((item, index) => (
            <div key={index} className="relative group mx-[15px]">
              <Button
                tag="a"
                background="transparent"
                text={item.text}
                href={item.link}
                className="group-hover:text-lavenderBlue transition-all duration-300 transform"
              />
            </div>
          ))}
        </nav>

        <div className="whitespace-nowrap flex gap-[15px] justify-end">
          <Button text="CONTACT US" bordered className="hidden mini:block"/>
          <Button text="JOIN REALIX" background="violetGradient" />
        </div>
      </div>
    );
  };

  const HeaderLogo = () => {
    return (
      <Link href="/">
        <Image src={Logo} alt="Logo"/>
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-10">
      <div className="flex items-center justify-between p-[15px] bg-[#050520]/60">
        <HeaderLogo />
        <HeaderNavigation />
      </div>
    </header>
  );
};

export default Header;
