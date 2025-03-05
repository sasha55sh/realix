import React, { FC } from "react";
import Image from "next/image";

interface ContactsProps {
  className?: string;
  image: string;
  title: string;
  description: string;
}

const ContactsComponent: FC<ContactsProps> = ({
  className,
  image,
  title,
  description,
}) => {
  return (
    <>
      <div className={`${className} text-white flex space-x-[10px]`}>
        <Image src={image} alt="address-elem" />
        <div>
          <h3 className="text-[24px] font-bold">{title}</h3>
          <p className="text-center">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ContactsComponent;
