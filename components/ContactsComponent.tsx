import React, { FC } from "react";
import Image from "next/image";

interface ContactsProps {
  className?: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const ContactsComponent: FC<ContactsProps> = ({
  className,
  src,
  alt,
  title,
  description,
}) => {
  return (
    <li className={`${className} text-white flex space-x-[10px] items-center`}>
      <Image src={src} alt={alt} className="h-[40px] w-[40px]" />
      <div>
        <h3 className="text-[18px] font-bold xl:text-[24px]">{title}</h3>
        <p className="text-center">{description}</p>
      </div>
    </li>
  );
};

export default ContactsComponent;
