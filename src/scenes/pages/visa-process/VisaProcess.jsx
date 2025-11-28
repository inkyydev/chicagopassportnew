import WhyChoose from "../../components/sections/WhyChoose";
import ContactUsServices from "../../components/sections/ContactUsServices";
import Map from "../../components/sections/Map";

import VisaProcessStep from "./VisaProcessSteps";
import { visaSteps } from "./data";

export default function VisaProcess() {
  return (
    <>
      <section
        id="visa_process"
        className="
          bg-[linear-gradient(to_bottom,#e1f1fd,rgba(225,241,253,0)_35%)]
          pb-[106px]
          max-[767px]:pb-[10px]
        "
      >
        <div className="container mx-auto px-4">
          <h1 className="max-w-[864px] mx-auto text-center">
            How Our Visa & Passport Process Works
          </h1>

          <p
            className="
              font-[500] max-w-[656px] mx-auto text-center
              mt-[12px] mb-[89px]
              text-[#1c1c1c]
              max-[767px]:mb-[30px]
            "
          >
            Applying for a U.S. passport or visa doesn’t have to be stressful.
            We’ve designed a simple, secure, and fast 3-step process to help you
            get your documents without the hassle of long lines or confusing
            paperwork.
          </p>

          <div className="flex flex-col gap-[50px] max-[767px]:gap-[20px]">
            {visaSteps.map((step, index) => (
              <VisaProcessStep key={step.id} {...step} index={index} />
            ))}
          </div>
        </div>
      </section>

      <WhyChoose />
      <ContactUsServices bg="#F8F9FD" />
      <Map />
    </>
  );
}
