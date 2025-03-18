import Person1 from "@/images/why-use-section/person1.svg";
import Person2 from "@/images/why-use-section/person2.svg";
import Person3 from "@/images/why-use-section/person3.svg";
import Person4 from "@/images/why-use-section/person4.svg";

interface cardProps {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

export const data: cardProps[] = [
  {
    id: 1,
    src: Person1,
    alt: "Person",
    title: "Simulation",
    description:
      "An advanced simulation that transports you into virtual reality with incredible precision",
  },
  {
    id: 2,
    src: Person2,
    alt: "Person",
    title: "Education",
    description:
      "Improve your skills with our education mode, which will help you learn new things faster",
  },
  {
    id: 3,
    src: Person3,
    alt: "Person",
    title: "Self-care",
    description:
      "Spend time in silence, connect with your mind and soul and feel at rest with every cell of body",
  },
  {
    id: 4,
    src: Person4,
    alt: "Person",
    title: "Outdoor",
    description:
      "The open sky, the rustling leaves, and the warmth of the sun and technology meets nature",
  },
];
