import Person1 from "@/images/why-use-section/person1.svg";
import Person2 from "@/images/why-use-section/person2.svg";
import Person3 from "@/images/why-use-section/person3.svg";
import Person4 from "@/images/why-use-section/person4.svg";

interface ReviewProps {
  id: number;
  image: string;
  fullName: string;
  review: string;
}

export const reviews: ReviewProps[] = [
  {
    id: 1,
    image: Person1,
    fullName: "Alice Johnson",
    review:
      "The VR watch completely changed the way I approach fitness. The interactive workouts are engaging and fun!",
  },
  {
    id: 2,
    image: Person2,
    fullName: "Bob Smith",
    review:
      "Using my VR watch for studying has been a game-changer. Virtual lessons feel like real-life experiences.",
  },
  {
    id: 3,
    image: Person3,
    fullName: "Charlie Davis",
    review:
      "I never thought watching movies on a tiny screen could feel this immersive. The VR display is stunning!",
  },
  {
    id: 4,
    image: Person4,
    fullName: "Diana Lee",
    review:
      "Gaming on a VR watch is an experience like no other. It feels like I’m inside the game world!",
  },
  {
    id: 5, 
    image: Person2,
    fullName: "Ethan Wilson",
    review:
      "I love how easy it is to attend virtual meetings using my VR watch. It makes remote work so much smoother.",
  },
  {
    id: 6,
    image: Person4,
    fullName: "Fiona Green",
    review:
      "Exploring new places through VR travel apps on my watch is mind-blowing. It’s like teleportation!",
  },
  {
    id: 7,
    image: Person1,
    fullName: "George Adams",
    review:
      "I use my VR watch for meditation, and it’s incredibly relaxing. The immersive environments are beautiful.",
  },
  {
    id: 8,
    image: Person3,
    fullName: "Hannah White",
    review:
      "From workouts to entertainment, my VR watch does it all. I can’t imagine my daily routine without it now.",
  },
];
