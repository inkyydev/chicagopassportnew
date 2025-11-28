import { useState } from "react";

import SinglePageArchive from "../../components/common/SinglePageArchive";
import { ukEtaRequirements } from "../../../data";
import ukImg from "../../../assets/uk-img.png";

const ukEtaData = {
  country: "UK ETA",
  hero_title: "UK ETA Visa",
  hero_description:
    "The ETA is a fast online travel authorization required for travelers visiting the UK...",
  image: ukImg,
  requirements: ukEtaRequirements[0].requirements,
};

export default function UkEtaVisa() {
  const [activePassportIndex, setActivePassportIndex] = useState(0);

  return (
    <>
      <SinglePageArchive
        mode="visa"
        data={ukEtaData}
        activeIndex={activePassportIndex}
        setActiveIndex={setActivePassportIndex}
      />
    </>
  );
}
