import Mail from "@/images/vectors/mail.svg";
import Map from "@/images/vectors/map.svg";
import Phone from "@/images/vectors/phone.svg";

interface ContactsProps {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

export const contactData: ContactsProps[] = [
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
