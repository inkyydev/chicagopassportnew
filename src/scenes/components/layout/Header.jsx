import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import phoneIcon from "../../../assets/phone-icon.svg";
import mailIcon from "../../../assets/email-icon.svg";
import logo from "../../../assets/logo.svg";
import accountIcon from "../../../assets/account-icon.svg";

const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

const eraseCookie = (name) => {
  document.cookie = name + "=; Max-Age=0; path=/;";
};

const getInitialLang = () => {
  if (typeof document === "undefined") return "EN";
  const match = document.cookie.match(/googtrans=([^;]+)/);
  if (match && match[1].includes("/es")) return "ES";
  return "EN";
};

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [currentLang, setCurrentLang] = useState(getInitialLang);

  const handleMenu = () => {
    setIsActive((prev) => !prev);
  };

  const toggleLanguage = () => {
    if (currentLang === "EN") {
      setCookie("googtrans", "/en/es", 1);
      setCurrentLang("ES");
    } else {
      eraseCookie("googtrans");
      setCurrentLang("EN");
    }

    window.location.reload();
  };

  useEffect(() => {
    const body = document.body;

    if (isActive && window.innerWidth < 1024) {
      body.classList.add("active");
    } else {
      body.classList.remove("active");
    }

    const handleResize = () => {
      if (isActive && window.innerWidth < 1024) {
        body.classList.add("active");
      } else {
        body.classList.remove("active");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      body.classList.remove("active");
    };
  }, [isActive]);

  return (
    <header>
      <div className="bg-brand-light pb-[40px] lg:pb-[50px]">
        <div className="bg-primary ">
          <div className="container">
            <div className="hidden lg:grid items-center justify-between grid-cols-2">
              <p className="py-[18px] text-[14px] text-white">
                WALK-INS WELCOME - 180 N LASALLE ST #106, CHICAGO, IL 60601, USA
              </p>
              <div className="flex justify-end gap-[30px]">
                <a
                  href="tel:312-925-3278"
                  className="text-[14px] text-white flex gap-[8px] font-medium items-center hover:opacity-[0.7]"
                >
                  <img src={phoneIcon} alt="phone" />
                  312-925-3278
                </a>
                <a
                  href="mailto:info@chichagopassport-visa.com"
                  className="text-[14px] text-white flex gap-[8px] font-medium items-center hover:opacity-[0.7]"
                >
                  <img src={mailIcon} alt="mail" />
                  INFO@CHICAGOPASSPORT-VISA.COM
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container">
            <div className="flex items-center gap-[10px] xl:mt-[31px] lg:mt-[20px] sm:mt-0 pt-[20px] lg:pt-0">
              <div className="max-w-[auto] lg:max-w-[126px]">
                <Link to="/">
                  <img src={logo} alt="logo" className="w-[120px] md:w-auto" />
                </Link>
              </div>

              <div className="flex-1">
                <div
                  className={`
                  flex items-center gap-[20px] lg:gap-[30px] justify-start lg:justify-center
                  fixed lg:static
                  top-[85px]
                  left-[0]
                  bg-brand-light lg:bg-transparent
                  w-full
                  h-[calc(100vh-85px)] lg:h-auto
                  z-50
                  flex-col lg:flex-row
                  transition-all duration-200
                  border-t border-[rgba(18,34,65,0.1)] lg:border-none
                  items-start
                  pl-[20px] lg:pl-0
                  pt-[30px] lg:pt-0
                  ${
                    isActive
                      ? "opacity-[100] pointer-events-auto scale-100"
                      : "opacity-[0] lg:opacity-[100] pointer-events-none lg:pointer-events-auto scale-95 lg:scale-100"
                  }`}
                >
                  <Link
                    onClick={handleMenu}
                    to="/us-passport"
                    className="text-[14px] md:text-[14px] sm:text-[16px]"
                  >
                    US Passport
                  </Link>
                  <Link
                    onClick={handleMenu}
                    to="/visas"
                    className="text-[14px] md:text-[14px] sm:text-[16px]"
                  >
                    Visas
                  </Link>
                  <Link
                    onClick={handleMenu}
                    to="/e-visas"
                    className="text-[14px] md:text-[14px] sm:text-[16px]"
                  >
                    E-Visas
                  </Link>
                  <Link
                    onClick={handleMenu}
                    to="/uk-eta-vise"
                    className="text-[14px] md:text-[14px] sm:text-[16px]"
                  >
                    UK ETA Visa
                  </Link>
                  <Link
                    onClick={handleMenu}
                    to="/visa-process"
                    className="text-[14px] md:text-[14px] sm:text-[16px]"
                  >
                    Process
                  </Link>
                  <Link
                    onClick={handleMenu}
                    to="/contact-us"
                    className="text-[14px] md:text-[14px] sm:text-[16px]"
                  >
                    Contact us
                  </Link>
                </div>

                <div
                  onClick={handleMenu}
                  className={`flex lg:hidden flex-col gap-[5px] items-end`}
                >
                  <span
                    className={`bg-[#1C1C1C] w-[30px] h-[1px]  transition-all duration-200  
                  ${isActive ? "rotate-[45deg]" : "rotate(0deg)"}`}
                  ></span>
                  <span
                    className={`bg-[#1C1C1C] w-[30px] h-[1px]  transition-all duration-200
                    ${
                      isActive
                        ? "rotate-[-45deg] mt-[-6px]"
                        : "rotate(0deg) mt-[0px]"
                    }
                  `}
                  ></span>
                </div>
              </div>

              <div className="max-w-[auto] lg:max-w-[126px] flex items-center gap-[5px] lg:gap-[10px] justify-end lg:justify-start">
                <Link className="bg-none w-[45px] h-[45px] lg:w-[52px] lg:h-[52px] flex justify-center items-center border-solid border-[1px] border-[#D0DDEA] rounded-full hover:opacity-70">
                  <img
                    src={accountIcon}
                    alt="account"
                    className="w-[20px] lg:w-[auto]"
                  />
                </Link>

                <button
                  className="bg-none w-[45px] h-[45px] lg:w-[52px] lg:h-[52px] flex justify-center items-center border-solid border-[1px] border-[#D0DDEA] rounded-full cursor-pointer hover:opacity-70"
                  onClick={toggleLanguage}
                >
                  {currentLang}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
