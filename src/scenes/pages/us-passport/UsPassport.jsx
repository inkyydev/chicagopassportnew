import { useState } from "react";
import { useLocation } from "react-router-dom";

import usPassportImg from "../../../assets/us-passport-img.png";
import { passportSections } from "../../../data";

import SinglePageArchive from "../../components/common/SinglePageArchive";

export default function UsPassport() {
  const location = useLocation();
  const defaultIndex = location.state?.activeIndex || 0;
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const activeItem = passportSections[activeIndex];

  return (
    <>
      <SinglePageArchive
        mode="passport"
        title="Everything You Need for a US Passport"
        description="We offer same-day passports, as well as passports in 3-5 days, 5-7 days, 7-10 days, 10-14 days, and 3-4 weeks."
        image={usPassportImg}
        data={{ passportSections }}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        requirementsTitle={activeItem.title}
        requirementsDescription={activeItem.description}
      />
    </>
  );
}
