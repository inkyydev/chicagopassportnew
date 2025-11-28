import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { evisas } from "../../../data";
import SinglePageArchive from "../../components/common/SinglePageArchive";

export default function EvisasSingle() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const initialIndex = evisas.findIndex((v) => v.slug === slug);

  const [activeVisaIndex, setActiveVisaIndex] = useState(
    initialIndex >= 0 ? initialIndex : 0
  );
  const [activePassportIndex, setActivePassportIndex] = useState(0);

  useEffect(() => {
    navigate(`/e-visas/${evisas[activeVisaIndex].slug}`, { replace: true });
  }, [activeVisaIndex]);

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
