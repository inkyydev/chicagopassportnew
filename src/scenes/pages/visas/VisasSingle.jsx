import { useParams } from "react-router-dom";
import { useState } from "react";
import { visas } from "../../../data";

import SinglePageArchive from "../../components/common/SinglePageArchive";

export default function VisasSingle() {
  const { slug } = useParams();

  const visaIndex = visas.findIndex((v) => v.slug === slug);

  const [activePassportIndex, setActivePassportIndex] = useState(0);

  const visa = visas[visaIndex];

  if (!visa) return <p>Visa not found.</p>;

  return (
    <SinglePageArchive
      data={visa}
      activeIndex={activePassportIndex}
      setActiveIndex={setActivePassportIndex}
    />
  );
}
