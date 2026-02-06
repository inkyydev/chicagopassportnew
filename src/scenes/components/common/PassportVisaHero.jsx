import { Link } from "react-router-dom";

import bgImg from "../../../assets/passportvisa-hero-bg.png";

export default function PassportVisaHero({
  title = "Passport & Visa Photo Services",
  passportLink = "/passport-photo-services",
  visaLink = "/visa-photo-services",
  active = "passport",
}) {
  const isPassport = active === "passport";
  const isVisa = active === "visa";

  return (
    <section className=" bg-[linear-gradient(to_bottom,#e1f1fd,rgba(225,241,253,0)_35%)] pb-[50px] md:pb-[89px]">
      <div className="container">
        <div
          className=" rounded-2xl bg-cover bg-no-repeat bg-center p-[50px_20px] md:p-[70px]"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="bg-white rounded-2xl pt-[30px] md:pt-[72px] pl-[20px] md:pl-[60px] pr-[20px] md:pr-[49px] pb-[30px] md:pb-[72px] max-w-[580px]">
            <h1 className="mb-[18px] text-[32px] md:text-[42px] lg:text-[52px]">
              {title}
            </h1>

            <div className="flex gap-4">
              <Link
                to={passportLink}
                className={`px-[30px] md:px-[43px] text-[14px] md:text-[18px] py-[12px] bg-[#122241] text-[#fff] rounded-[10px] font-medium
                ${isPassport && "bg-[#BE1E2D] shadow-[0px_20px_20px_rgba(0,0,0,0.20)]"}
              `}
              >
                Passport
              </Link>

              <Link
                to={visaLink}
                className={`px-[30px] md:px-[43px] text-[14px] md:text-[18px] py-[12px] bg-[#122241] text-[#fff] rounded-[10px] font-medium
                ${isVisa && "bg-[#BE1E2D] shadow-[0px_20px_20px_rgba(0,0,0,0.20)]"}
              `}
              >
                Visa
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
