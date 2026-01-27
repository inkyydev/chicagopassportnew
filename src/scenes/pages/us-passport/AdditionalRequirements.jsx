import { useState } from "react";
import SinglePageArchive from "../../components/common/SinglePageArchive";
import { passportSections } from "../../../data";

import usPassportImg from "../../../assets/us-passport-img.png";

export default function AdditionalRequirements() {
  const defaultIndex = 6;
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const activeItem = passportSections[6];

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
