import { evisas } from "../../../data";
import VisasArchive from "../../components/common/VisasArchive";

export default function Evisas() {
  return (
    <>
      <VisasArchive
        title="We Offer Visas for Various Countries"
        description="Browse through each country to learn the various visa requirements
            and document types."
        data={evisas}
      />
    </>
  );
}
