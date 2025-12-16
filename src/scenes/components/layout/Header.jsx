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

  const [visasOpen, setVisasOpen] = useState(false);
  const [eVisasOpen, setEVisasOpen] = useState(false);

  const isMobile = () => window.innerWidth < 1024;

  const handleMenu = () => {
    setIsActive((prev) => !prev);
  };

  const closeMenu = () => {
    setIsActive(false);
    setVisasOpen(false);
    setEVisasOpen(false);
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
        <div className="bg-primary">
          <div className="container">
            <div className="hidden lg:grid items-center justify-between grid-cols-2">
              <p className="py-[18px] text-[14px] text-white">
                WALK-INS WELCOME - 180 N LASALLE ST #106, CHICAGO, IL 60601, USA
              </p>
              <div className="flex justify-end gap-[30px]">
                <a
                  href="tel:312-925-3278"
                  className="text-[14px] text-white flex gap-[8px] items-center"
                >
                  <img src={phoneIcon} alt="phone" />
                  312-925-3278
                </a>
                <a
                  href="mailto:info@chichagopassport-visa.com"
                  className="text-[14px] text-white flex gap-[8px] items-center"
                >
                  <img src={mailIcon} alt="mail" />
                  INFO@CHICAGOPASSPORT-VISA.COM
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex items-center gap-[10px] pt-[20px]">
            <div className="max-w-[auto] lg:max-w-[126px]">
              <Link to="/">
                <img src={logo} alt="logo" className="w-[120px] md:w-auto" />
              </Link>
            </div>

            <div className="flex-1">
              <div
                className={`
                  flex items-center gap-[20px] lg:gap-[30px]
                  justify-start lg:justify-center
                  fixed lg:static top-[85px] left-[0]
                  bg-brand-light lg:bg-transparent
                  w-full h-[calc(100vh-85px)] lg:h-auto
                  z-50 flex-col lg:flex-row
                  transition-all duration-200
                  border-t border-[rgba(18,34,65,0.1)] lg:border-none
                  items-start
                  pl-[20px] lg:pl-0
                  pt-[30px] lg:pt-0
                  ${
                    isActive
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto"
                  }
                `}
              >
                <Link onClick={closeMenu} to="/us-passport">
                  US Passport
                </Link>

                <div
                  className="relative w-full lg:w-auto"
                  onMouseEnter={() => !isMobile() && setVisasOpen(true)}
                  onMouseLeave={() => !isMobile() && setVisasOpen(false)}
                >
                  <Link
                    to="/visas"
                    className="text-[14px] md:text-[16px] sm:text-[16px] pb-[10px] "
                    onClick={(e) => {
                      if (window.innerWidth < 1024) {
                        if (!visasOpen) {
                          e.preventDefault();
                          setVisasOpen(true);
                          setEVisasOpen(false);
                        } else {
                          closeMenu();
                        }
                      } else {
                        closeMenu();
                      }
                    }}
                  >
                    Visas
                  </Link>

                  <div
                    className={`
                      lg:absolute
                      mt-[5px]
                      bg-white
                      rounded-lg
                      shadow-lg
                      w-[calc(100%-20px)] lg:min-w-[220px] lg:w-auto
                      overflow-hidden
                      transition-all duration-300
                      py-[7px]
                      ${
                        visasOpen
                          ? "opacity-100 pointer-events-auto max-h-[500px]"
                          : "opacity-0 pointer-events-none max-h-0"
                      }
                      lg:max-h-none
                    `}
                  >
                    {[
                      ["china", "China"],
                      ["brazil", "Brazil"],
                      ["ghana", "Ghana"],
                      ["nigeria", "Nigeria"],
                      ["russia", "Russia"],
                      ["uk", "United Kingdom"],
                    ].map(([slug, label]) => (
                      <Link
                        key={slug}
                        to={`/visas/${slug}`}
                        onClick={closeMenu}
                        className="block px-4 py-2 text-[14px]"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div
                  className="relative w-full lg:w-auto"
                  onMouseEnter={() => !isMobile() && setEVisasOpen(true)}
                  onMouseLeave={() => !isMobile() && setEVisasOpen(false)}
                >
                  <Link
                    to="/e-visas"
                    className="text-[14px] md:text-[16px] sm:text-[16px] pb-[10px]"
                    onClick={(e) => {
                      if (window.innerWidth < 1024) {
                        if (!eVisasOpen) {
                          e.preventDefault();
                          setEVisasOpen(true);
                          setVisasOpen(false);
                        } else {
                          closeMenu();
                        }
                      } else {
                        closeMenu();
                      }
                    }}
                  >
                    E-Visas
                  </Link>

                  <div
                    className={`
                      lg:absolute
                      mt-[5px]
                      bg-white
                      rounded-lg
                      shadow-lg
                      w-[calc(100%-20px)] lg:min-w-[220px] lg:w-auto
                      overflow-hidden
                      transition-all duration-300
                      py-[7px]
                      ${
                        eVisasOpen
                          ? "opacity-100 pointer-events-auto max-h-[500px]"
                          : "opacity-0 pointer-events-none max-h-0"
                      }
                      lg:max-h-none
                    `}
                  >
                    {[
                      ["vietnam-evisa", "Vietnam"],
                      ["india-evisa", "India"],
                      ["brazil-evisa", "Brazil"],
                      ["kenya-evisa", "Kenya"],
                      ["cambodia-evisa", "Cambodia"],
                    ].map(([slug, label]) => (
                      <Link
                        key={slug}
                        to={`/e-visas/${slug}`}
                        onClick={closeMenu}
                        className="block px-4 py-2 text-[14px]"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link onClick={closeMenu} to="/uk-eta-vise">
                  UK ETA Visa
                </Link>
                <Link onClick={closeMenu} to="/visa-process">
                  Process
                </Link>
                <Link onClick={closeMenu} to="/contact-us">
                  Contact us
                </Link>
              </div>

              <div
                onClick={handleMenu}
                className="flex lg:hidden flex-col gap-[5px] items-end"
              >
                <span
                  className={`bg-[#1C1C1C] w-[30px] h-[1px] ${
                    isActive ? "rotate-45" : ""
                  }`}
                />
                <span
                  className={`bg-[#1C1C1C] w-[30px] h-[1px] ${
                    isActive ? "-rotate-45 -mt-[6px]" : ""
                  }`}
                />
              </div>
            </div>

            <div className="max-w-[auto] lg:max-w-[126px] flex items-center gap-[5px] lg:gap-[10px] justify-end lg:justify-start">
              <Link className="w-[45px] h-[45px] lg:w-[52px] lg:h-[52px] flex justify-center items-center border border-[#D0DDEA] rounded-full hover:opacity-70">
                <img src={accountIcon} alt="account" />
              </Link>

              <button
                onClick={toggleLanguage}
                className="w-[45px] h-[45px] lg:w-[52px] lg:h-[52px] flex justify-center items-center border border-[#D0DDEA] rounded-full hover:opacity-70"
              >
                {currentLang}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
