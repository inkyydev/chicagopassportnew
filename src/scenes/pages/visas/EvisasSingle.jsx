import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { evisas } from "../../../data";
import SinglePageArchive from "../../components/common/SinglePageArchive";

export default function EvisasSingle() {
  const { slug } = useParams();

  const initialIndex = evisas.findIndex((v) => v.slug === slug);

  const [activeVisaIndex, setActiveVisaIndex] = useState(
    initialIndex >= 0 ? initialIndex : 0
  );
  const [activePassportIndex, setActivePassportIndex] = useState(0);

  useEffect(() => {
    const index = evisas.findIndex((v) => v.slug === slug);
    if (index >= 0) {
      setActiveVisaIndex(index);
    }
  }, [slug]);

  const evisa = evisas[activeVisaIndex];

  if (!evisa) return <p>eVisa not found.</p>;

  return (
    <>
      <SinglePageArchive
        data={evisa}
        activeIndex={activePassportIndex}
        setActiveIndex={setActivePassportIndex}
      />
    </>
  );
}
