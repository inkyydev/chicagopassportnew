import PassportVisaHero from "../../components/common/PassportVisaHero";
import FeatureBlock from "../../components/common/FeaturesBlock";
import InfoPanel from "../../components/common/InfoPanel";
import SplitInfoRow from "../../components/common/SplitInfoRow";
import ImagePassport from "../../components/sections/ImagePassport";
import WhyTravelersChooseUs from "../../components/sections/WhyTravelersChooseUs";
import TwoColumnText from "../../components/common/TwoColumnText";
import VisaDosDontsSection from "../../components/sections/VisaDosDontsSection";

import visaServiceImg from "../../../assets/visa-service-img.png";

export default function VisaPhotoServices() {
  return (
    <>
      <PassportVisaHero active="visa" />
      <FeatureBlock
        title="U.S. Passport Photo Services"
        smallTitle="Ideal for urgent travel"
        textFirst="For travelers facing last-minute deadlines, we provide fast turnaround for:"
        bullets={[
          "Emergency passport requests",
          "Expedited passport renewals",
          "Urgent visa filings",
          "Embassy or consulate appointments",
        ]}
        textSecond="Most photos are ready within minutes, so you can continue your application immediately."
        image={visaServiceImg}
      />
      <InfoPanel
        title="Visa Photo Services For All Countries"
        subtitle="Approved for embassies, consulates, and online visa portals"
        leftTitle="We create visa photos for every nationality and visa class, including:"
        leftItems={[
          "Tourist",
          "Business",
          "Work/Employment",
          "Student",
          "Transit",
          "Long-stay & residency",
        ]}
        rightTitle="Our staff follows each country's current requirements for:"
        rightItems={[
          "Photo dimensions",
          "Background color",
          "Head-and-face positioning",
          "Religious head coverings (when permitted)",
          "Physical prints or digital-only submissions",
        ]}
        text="Standards change frequently—our team stays updated with embassy and consulate guidelines."
      />
      <VisaDosDontsSection />
      <SplitInfoRow
        leftTitle="Digital & Physical Photo Delivery"
        rightTitle="Ideal for urgent travel"
        rightDescription="We offer photo formats for every type of application:"
        bullets={[
          "High-resolution printed photos",
          "Digital files formatted for online submissions",
          "Photos sized to exact upload specifications for U.S. and foreign government systems",
        ]}
        rightDescriptionLast="Digital images are optimized to prevent upload errors."
      />

      <WhyTravelersChooseUs />
      <TwoColumnText
        title="Photo Services + Expedited Passport & Visa Processing"
        description="We make the entire travel documentation process easier by offering photography, document review, and application preparation in one location. If you need an expedited passport or visa, our photo service fits seamlessly into your appointment or submission."
      />
      <ImagePassport />
    </>
  );
}
