import { useState } from "react";

import { states, services } from "../../pages/homepage/data";

import PassportHeroSelect from "../common/PassportHeroSelect";
import RadioGroup from "../common/RadioGroup";
import VisaOptions from "../common/VisaHeroSelect";

import glowImg from "../../../assets/green-glow-img.png";
import heroImg from "../../../assets/hero-img.png";

export default function Hero() {
  const [chooseValue, setChooseValue] = useState("passport");
  const [activeIndexValue, setActiveIndexValue] = useState(0);
  const [activeValueVisa, setActiveValueVisa] = useState("");
  const [activeValueEVisa, setActiveValueEVisa] = useState("");

  const handleChange = (e) => {
    setActiveIndexValue(e.target.value);
  };

  const handleVisaChange = (e) => {
    setActiveValueVisa(e.target.value);
  };

  const handleEVisaChange = (e) => {
    setActiveValueEVisa(e.target.value);
  };

  return (
    <section id="hero_section" className="bg-brand-light pb-[196px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <div
              className="inline-flex items-center gap-[3px] lg:gap-[10px]
bg-white/30 rounded-full px-[5px] lg:px-[18px] min-h-[47px] w-full lg:w-auto
"
            >
              <img src={glowImg} alt="glow" />
              <p className="mb-0 !text-[12px] md:!text-[16px] font-medium">
                Fast, Secure & Easy Passport and Visa Solutions
              </p>
            </div>
            <h1 className="mt-[10px] mb-[13px] text-[32px] md:text-[36px] lg:text-[46px] xl:text-[68px]">
              Chicago Passport & Visa Expedite Services
            </h1>
            <h4 className="text-[16px] xl:text-[18px] mb-[10px] mt-[13px]">
              Apply online now or visit our Chicago office to apply in person.
            </h4>
            <p className="max-w-[502px] lg:text-[14px] xl:text-[16px] mb-[10px]">
              Travel documents made simple - secure, fast, and stress-free
              passport and visa services right here in Chicago. Whether online
              or in person, we get you ready to go without the wait.
            </p>
            <h5 className="text-[14px] lg:text-[16px] mb-[15px] max-w-[300px] md:max-w-full leading-[1.3]">
              Select Your Service Below: USA Passport or Visa Type that you
              Need.
            </h5>
            <form>
              <RadioGroup
                services={services}
                chooseValue={chooseValue}
                setChooseValue={setChooseValue}
              />

              {chooseValue === "passport" && (
                <PassportHeroSelect
                  handleChange={handleChange}
                  activeIndexValue={activeIndexValue}
                />
              )}

              {chooseValue === "visa" && (
                <VisaOptions
                  link={`/visas/${activeValueVisa}`}
                  btnText="Get Visa Options"
                  fields={[
                    {
                      label: "Citizen Of:",
                      name: "citizen",
                      onChange: null,
                      options: [{ value: "usa", label: "USA" }],
                    },
                    {
                      label: "Residing in:",
                      name: "residing_in",
                      onChange: handleChange,
                      options: [
                        { value: "", label: "Select" },
                        ...states.map((state) => ({
                          value: state.toLowerCase().replace(/ /g, "-"),
                          label: state,
                        })),
                      ],
                    },
                    {
                      label: "Traveling to:",
                      name: "citizen",
                      onChange: handleVisaChange,
                      options: [
                        { value: "china", label: "China" },
                        { value: "ghana", label: "Ghana" },
                        { value: "brazil", label: "Brazil" },
                        { value: "uk", label: "UK" },
                        { value: "nigeria", label: "Nigeria" },
                      ],
                    },
                  ]}
                />
              )}

              {chooseValue === "e-visa" && (
                <VisaOptions
                  link={`/e-visas/${activeValueEVisa}`}
                  btnText="Get Visa Options"
                  fields={[
                    {
                      label: "Citizen Of:",
                      name: "citizen",
                      onChange: null,
                      options: [{ value: "usa", label: "USA" }],
                    },
                    {
                      label: "Traveling to:",
                      name: "citizen",
                      onChange: handleEVisaChange,
                      options: [
                        { value: "india-evisa", label: "India Visa" },
                        { value: "brazil-evisa", label: "Brazil Visa" },
                        { value: "vietnam-evisa", label: "Vietnam Visa" },
                        { value: "kenya-evisa", label: "Kenya Visa" },
                        { value: "cambodia-evisa", label: "Cambodia Visa" },
                      ],
                    },
                  ]}
                />
              )}
            </form>
            <span className="text-[#1c1c1c] inline-block mt-[18px] font-medium text-[14px]">
              CALL NOW | Mon-Fri: 8:30am-5:00pm Sat 10:00am - 2:00pm.
              Sun/Holidays: Closed
            </span>
          </div>
          <div className="m-0 mt-[25px] md:ml-[-30px] md:mr-[-30px] lg:m-0 xl:ml-[-50px] xl:mr-[-60px]">
            <img src={heroImg} alt="hero img" />
          </div>
        </div>
      </div>
    </section>
  );
}
