import PassportVisaHero from "../../components/common/PassportVisaHero";
import FeatureBlock from "../../components/common/FeaturesBlock";
import InfoPanel from "../../components/common/InfoPanel";
import SplitInfoRow from "../../components/common/SplitInfoRow";
import ImagePassport from "../../components/sections/ImagePassport";
import WhyTravelersChooseUs from "../../components/sections/WhyTravelersChooseUs";
import TwoColumnText from "../../components/common/TwoColumnText";
import GetStartedSection from "../../components/sections/GetStartedSection";
import PassportCompositionGuide from "../../components/sections/PassportCompositionGuide";
import PhotoCompositionExamples from "../../components/sections/PhotoCompositionExamples";

import passportServiceImg from "../../../assets/passport-service-image.png";

export default function PassportPhotoServices() {
  return (
    <>
      <PassportVisaHero active="passport" />
      <FeatureBlock
        title="Accurate. Fast. Accepted Worldwide."
        textFirst="We provide full-service passport and visa photography that meets official requirements for the United States and every foreign government, embassy, and consulate. Our team ensures your photos are formatted correctly, compliant with current standards, and ready for immediate submission—especially important when you’re applying for expedited or same-day processing.
        "
        textSecond="Whether you need images for a U.S. passport, a foreign passport, or any type of international visa, we deliver professional results that prevent delays or rejections."
        image={passportServiceImg}
      />
      <InfoPanel
        title="Visa Photo Services for All Countries"
        subtitle="Approved for embassies, consulates, and online visa portals"
        leftTitle="We produce photos for every type of U.S. passport application, including:"
        leftItems={[
          "New Adult Passport",
          "Passport Renewals",
          "Child/Minor Passports",
          "Lost, Stolen, or Damaged Passports",
          "Same-Day & Expedited Passport Requests",
        ]}
        rightTitle="Our photos follow all U.S. State Department rules:"
        rightItems={[
          "2x2 inch format",
          "Correct head size and placement",
          "Natural facial expression",
          "Bright white background",
          "No reflections, shadows, or color distortion",
          "Full compliance with rules for glasses and accessories",
        ]}
        text="Standards change frequently—our team stays updated with embassy and consulate guidelines."
      />
      <PassportCompositionGuide />
      <PhotoCompositionExamples />
      <SplitInfoRow
        leftTitle="Passport Photos For Other Countries"
        rightTitle="International formats and country-specific guidelines"
        rightDescription="Passport requirements vary widely from country to country. Our team is trained on international standards, including:"
        bullets={[
          "Non-U.S. sizing formats",
          "Colored backgrounds (white, blue, gray, etc.)",
          "Specific head-to-chin measurements",
          "Country-specific appearance rules",
        ]}
        rightDescriptionLast="We ensure your photos match the exact specifications for the issuing country so your application is accepted without issue."
      />
      <WhyTravelersChooseUs />
      <TwoColumnText
        title="Photo Services + Expedited Passport & Visa Processing"
        description="We make the entire travel documentation process easier by offering photography, document review, and application preparation in one location. If you need an expedited passport or visa, our photo service fits seamlessly into your appointment or submission."
      />
      <GetStartedSection />
      <ImagePassport />
    </>
  );
}
