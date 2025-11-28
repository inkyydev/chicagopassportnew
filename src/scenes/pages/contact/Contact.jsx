import ImagePassport from "../../components/sections/ImagePassport";

import navIcon from "../../../assets/navigation-icon.svg";
import phoneIcon from "../../../assets/phone-contact-icon.svg";
import emailIcon from "../../../assets/contact-email-icon.svg";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Contact() {
  const navigate = useLocation();

  useEffect(() => {
    if (navigate.pathname === "/contact-us") {
      document.querySelector("body header > div").classList.add("bg-[#F8F9FD]");
      document
        .querySelector("body header > div")
        .classList.remove("bg-brand-light");
    }

    return () => {
      document
        .querySelector("body header > div")
        .classList.remove("bg-[#F8F9FD]");
      document
        .querySelector("body header > div")
        .classList.add("bg-brand-light");
    };
  }, [navigate.pathname]);

  return (
    <>
      <section
        id="contact"
        className="
          pb-[107px] bg-[#F8F9FD]
          max-[767px]:pb-[60px]
        "
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {/* LEFT */}
            <div>
              <h1>Get In Touch With Us Today!</h1>

              <p
                className="
                  max-w-[441px] my-[33px]
                  max-[767px]:my-[20px]
                "
              >
                We are registered and authorized by the US Government and
                foreign embassies to expedite your US passport and foreign visa.
                We charge an additional fee to expedite your application in 1-10
                days.
              </p>

              <ul
                className="
                  flex flex-col pl-0 gap-[20px]
                  max-[767px]:gap-[12px]
                "
              >
                <li className="flex items-center gap-[15px] text-[14px] list-none">
                  <img src={navIcon} alt="nav" />
                  <span className="max-w-[207px] text-[#4E5063]">
                    180 N La Salle Street, Suite 106, Chicago, IL 60601
                  </span>
                </li>

                <li className="flex items-center gap-[15px] text-[14px] list-none">
                  <img src={phoneIcon} alt="phone" />
                  <a
                    href="tel:312-525-3278"
                    className="text-[#4E5063] hover:text-[#BE1E2D]"
                  >
                    (312) 525-3278
                  </a>
                </li>

                <li className="flex items-center gap-[15px] text-[14px] list-none">
                  <img src={emailIcon} alt="email" />
                  <a
                    href="mailto:info@chicagopassport-visa.com"
                    className="text-[#4E5063] hover:text-[#BE1E2D]"
                  >
                    info@chicagopassport-visa.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="max-[767px]:mt-[15px]">
              <form>
                <div className="mb-[20px] max-[767px]:mb-[15px]">
                  <label
                    htmlFor="name"
                    className="text-[14px] font-[500] mb-[6px] block"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="
                      bg-white
                      rounded-[10px]
                      h-[52px] text-[14px] pl-[20px] w-full
                      border border-[#E7ECF0] shadow-none outline-none
                    "
                  />
                </div>

                <div className="mb-[20px] max-[767px]:mb-[15px]">
                  <label
                    htmlFor="email"
                    className="text-[14px] font-[500] mb-[6px] block"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="
                      bg-white
                      rounded-[10px]
                      h-[52px] text-[14px] pl-[20px] w-full
                      border border-[#E7ECF0] shadow-none outline-none
                    "
                  />
                </div>

                <div className="mb-[20px] max-[767px]:mb-[15px]">
                  <label
                    htmlFor="phone"
                    className="text-[14px] font-[500] mb-[6px] block"
                  >
                    Phone*
                  </label>
                  <input
                    type="text"
                    id="phone"
                    required
                    className="
                      bg-white
                      rounded-[10px]
                      h-[52px] text-[14px] pl-[20px] w-full
                      border border-[#E7ECF0] shadow-none outline-none
                    "
                  />
                </div>

                <div className="mb-[20px] max-[767px]:mb-[15px]">
                  <label
                    htmlFor="message"
                    className="text-[14px] font-[500] mb-[6px] block"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    className="
                      bg-white
                      rounded-[10px]
                      h-[139px] text-[14px]
                      pt-[20px] pl-[20px] w-full
                      border border-[#E7ECF0] shadow-none outline-none
                      resize-none
                    "
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="
                  inline-block bg-[#be1e2d] border border-[#be1e2d] text-white  font-medium rounded-[10px] shadow-[0_20px_20px_rgba(0,0,0,0.25)] py-[12px] px-[31px] text-[18px] hover:bg-transparent hover:text-[#1c1c1c] max-lg:text-[16px] max-sm:text-[14px] px-[59px] transition-all duration-200 cursor-pointer
                  "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <ImagePassport />
    </>
  );
}
