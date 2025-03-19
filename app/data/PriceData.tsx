import greenCheckmark from "@/images/vectors/green-checkmark.svg";
import grayCheckmark from "@/images/vectors/gray-checkmark.svg";

interface priceProps {
  id: number;
  imageSrc: string;
  text: string;
}

interface planProps {
  id: number;
  title: string;
  price: number;
  period: string;
  discount?: string;
  points: priceProps[];
}

export const incompleteData: priceProps[] = [
  { id: 1, imageSrc: greenCheckmark, text: "Type of threat" },
  { id: 2, imageSrc: greenCheckmark, text: "Online presence" },
  { id: 3, imageSrc: greenCheckmark, text: "Acess to all modules" },
  { id: 4, imageSrc: grayCheckmark, text: "Notability" },
  { id: 5, imageSrc: grayCheckmark, text: "Optimize existing websites" },
  { id: 6, imageSrc: grayCheckmark, text: "Search autocomplete" },
];

export const completeData: priceProps[] = [
  { id: 1, imageSrc: greenCheckmark, text: "Type of threat" },
  { id: 2, imageSrc: greenCheckmark, text: "Online presence" },
  { id: 3, imageSrc: greenCheckmark, text: "Acess to all modules" },
  { id: 4, imageSrc: greenCheckmark, text: "Notability" },
  { id: 5, imageSrc: greenCheckmark, text: "Optimize existing websites" },
  { id: 6, imageSrc: greenCheckmark, text: "Search autocomplete" },
];

export const yearPlan: planProps[] = [
  {
    id: 1,
    title: "Start here",
    price: 0,
    period: "Per month",
    discount: "It's free so why not",
    points: incompleteData,
  },
  {
    id: 2,
    title: "Single",
    price: 56,
    period: "Per month",
    discount: "Save $23 per year",
    points: completeData,
  },
  {
    id: 3,
    title: "Family",
    price: 124,
    period: "Per month",
    discount: "Save $23 per year",
    points: completeData,
  },
];

export const monthPlan: planProps[] = [
  {
    id: 1,
    title: "Start here",
    price: 0,
    period: "Per month",
    points: incompleteData,
  },
  {
    id: 2,
    title: "Single",
    price: 60,
    period: "Per month",
    points: completeData,
  },
  {
    id: 3,
    title: "Family",
    price: 130,
    period: "Per month",
    points: completeData,
  },
];
