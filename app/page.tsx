import Why from "@/app/sections/home-page/WhyUseSection";
import HeroSection from "@/app/sections/home-page/HeroSection";
import AboutSection from "@/app/sections/home-page/AboutSection";
import HowBuildSection from "@/app/sections/home-page/HowBuildSection";
import ReviewsSection from "./sections/home-page/ReviewsSection";
import FormSection from "./sections/home-page/FormSection";
import PriceSection from "./sections/home-page/PriceSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Why />
      <HowBuildSection />
      <ReviewsSection />
      <PriceSection />
      <FormSection />
    </>
  );
}
