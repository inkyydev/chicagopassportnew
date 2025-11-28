import { useState } from "react";
import { Link } from "react-router-dom";
import { visas, evisas } from "../../../data";
import btnRed from "../../../assets/btn-red.svg";

import CornerLink from "../common/CornerLink";
import CornerLinkFeatured from "../common/CornerLinkFeatured";
import TravelTabs from "../common/TravelTabs";

export default function TravelService() {
  const [activeTab, setActiveTab] = useState("passport");

  const renderVisaContent = (data, type) => {
    if (!data || data.length === 0) return null;
    const [featured, ...rest] = data;

    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[00px] md:gap-[34px]">
          <div
            className={`h-full bg-no-repeat bg-[bottom_right] flex relative rounded-[20px] bg-[#f8f9fd] min-h-[410px] items-end p-[42px] max-lg:items-start max-sm:mb-[20px] max-sm:h-auto max-sm:min-h-[250px] max-sm:p-[30px_20px] ${
              type === "visa" &&
              "bg-[url('./assets/travel-service-visa-bg.png')] max-sm:bg-[85%_auto]"
            } ${
              type === "evisa" &&
              "bg-[url('./assets/travel-service-evisa-bg.png')]"
            } max-sm:bg-[70%_auto] `}
          >
            <h3>{featured.country}</h3>
            <CornerLinkFeatured
              to={`/${type === "visa" ? "visas" : "e-visas"}/${featured.slug}`}
              img={btnRed}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[34px]">
            {rest.map((item) => (
              <div
                className="relative bg-[#f8f9fd] bg-cover bg-right-bottom bg-no-repeat rounded-[20px] min-h-[114px] px-[29px] pt-[32px] pb-[16px] max-lg:px-[20px] max-lg:pt-[25px] max-lg:pb-[16px] max-sm:rounded-[10px] max-sm:min-h-[90px]"
                key={item}
              >
                <h3 className="text-[16px] md:text-[22px]">{item.country}</h3>
                <div className="travel-service-single-all__link">
                  <CornerLink
                    to={`/${type === "visa" ? "visas" : "e-visas"}/${
                      item.slug
                    }`}
                    img={btnRed}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section>
      <div className="container">
        <div className="text-center">
          <h2 className="max-w-[630px] mx-auto">
            Choose the Travel Service That Fits Your Needs
          </h2>
          <p className="max-w-[616px] mt-[16px] mb-[29px] mx-auto">
            Our travel specialists guide you through the entire process,
            ensuring your documents are delivered securely and quickly.
          </p>

          <TravelTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <div>
          {activeTab === "passport" && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[0px] md:gap-[34px]">
                <div className="h-full bg-no-repeat bg-[bottom_right] flex relative rounded-[20px] bg-[#f8f9fd] min-h-[410px] items-end p-[42px] max-lg:items-start max-sm:mb-[20px] max-sm:h-auto max-sm:min-h-[250px] max-sm:p-[30px_20px] bg-[url('./assets/passport-bg-image.png')] max-lg:bg-[80%_auto] max-sm:bg-[60%_auto]">
                  <h3 className="text-[16px] md:text-[22px]">New Passport</h3>
                  <CornerLinkFeatured to="/us-passport" img={btnRed} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] sm:gap-[34px]">
                  {[
                    "Passport Renewal",
                    "Child passport",
                    "Lost Passport",
                    "Passport Name change",
                    "Second Limited Passport",
                  ].map((label, i) => (
                    <div
                      className="relative bg-[#f8f9fd] bg-cover bg-right-bottom bg-no-repeat rounded-[20px] min-h-[114px] px-[29px] pt-[32px] pb-[16px] max-lg:px-[20px] max-lg:pt-[25px] max-lg:pb-[16px] max-sm:rounded-[10px] max-sm:min-h-[90px]"
                      key={i}
                    >
                      <h3>
                        {label.includes(" ") ? (
                          <>
                            {label.split(" ")[0]}{" "}
                            <br className="hidden md:inline-block" />{" "}
                            {label.split(" ").slice(1).join(" ")}
                          </>
                        ) : (
                          label
                        )}
                      </h3>
                      <CornerLink
                        to="/us-passport"
                        state={{ activeIndex: i + 1 }}
                        img={btnRed}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "visa" && renderVisaContent(visas, "visa")}

          {activeTab === "evisa" && renderVisaContent(evisas, "evisa")}
        </div>
      </div>
    </section>
  );
}
