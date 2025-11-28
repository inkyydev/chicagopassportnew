import Hero from "../../components/sections/Hero";
import ProcessSection from "../../components/sections/Process";
import TravelService from "../../components/sections/TravelService";
import DoneRight from "../../components/sections/DoneRight";
import PopularVisas from "../../components/sections/PopularVisas";
import WhyChoose from "../../components/sections/WhyChoose";
import ComparisonTable from "../../components/sections/ComparisonTable";
import TestimonialsSlider from "../../components/sections/Testimonials";
import ImagePassport from "../../components/sections/ImagePassport";

export default function Homepage() {
  return (
    <>
      <Hero />
      <ProcessSection />
      <TravelService />
      <DoneRight />
      <PopularVisas />
      <WhyChoose />
      <ComparisonTable />
      <TestimonialsSlider />
      <ImagePassport />
    </>
  );
}
