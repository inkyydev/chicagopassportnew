import ImagePassport from "../sections/ImagePassport";
import SelectVisaType from "./SelectVisaType";
import BgFull from "../sections/BgFull";
import ContactUsServices from "../sections/ContactUsServices";
import RequirementsAccordion from "./RequirementsAccordion";
import BtnHashLink from "./BtnHashLink";

export default function SinglePageArchive({
  data,
  activeIndex,
  setActiveIndex,
  title,
  description,
  image,
  mode = "visa",
  requirementsTitle,
  requirementsDescription,
}) {
  const requirementsData =
    mode === "passport"
      ? data.passportSections[activeIndex].accordions.map((acc) => ({
          section_title: acc.title,
          content: {
            text: acc.text,
            list: [],
          },
        }))
      : data.requirements;

  return (
    <>
      <section
        id="visa_single"
        className="bg-[linear-gradient(to_bottom,#e1f1fd,rgba(225,241,253,0)_60%)]"
      >
        <div className="container">
          <div className="visa-single-header">
            <h1 className="text-center max-w-[750px] mx-auto">
              {title || data.hero_title}
            </h1>

            <p className="font-medium max-w-[720px] mx-auto mt-[12px] mb-[25px] text-center text-[#1c1c1c]">
              {description || data.hero_description}
            </p>

            <div className="text-center">
              <BtnHashLink text="Get Started Today" path="#get_started" />
            </div>

            <div className="visa-single-header__img relative mt-[45px]">
              <img
                src={image || data.image || data.hero_image}
                alt={title || data.country}
                className="w-full object-cover aspect-[16/6] rounded-[30px] max-[767px]:aspect-[16/9] max-[767px]:rounded-[20px]"
              />
            </div>
          </div>

          <SelectVisaType
            activePassportIndex={activeIndex}
            setActivePassportIndex={setActiveIndex}
            enableRouting={mode === "passport"}
            title={
              mode === "passport"
                ? "Select Passport Type"
                : "Select Visa Type that you Need"
            }
          />

          <RequirementsAccordion
            country={mode === "passport" ? requirementsTitle : data.country}
            description={requirementsDescription}
            requirements={requirementsData}
          />
        </div>
      </section>

      <BgFull />
      <ContactUsServices />
      <ImagePassport />
    </>
  );
}
