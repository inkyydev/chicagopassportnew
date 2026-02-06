import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import phoneIcon from "../../../assets/phone-icon.svg";
import mailIcon from "../../../assets/email-icon.svg";
import logo from "../../../assets/logo.svg";
import accountIcon from "../../../assets/account-icon.svg";

const Chevron = ({ open }) => (
  <svg
    className={`w-[12px] h-[12px] ml-[6px] transition-transform duration-200 ${
      open ? "rotate-180" : ""
    }`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.7a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
      clipRule="evenodd"
    />
  </svg>
);

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
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);
  const [currentLang, setCurrentLang] = useState(getInitialLang);

  const [visasOpen, setVisasOpen] = useState(false);
  const [eVisasOpen, setEVisasOpen] = useState(false);
  const [USOpen, setUSOpen] = useState(false);

  const isMobile = () => window.innerWidth < 1024;

  const handleMenu = () => {
    setIsActive((prev) => !prev);
  };

  const closeMenu = () => {
    setIsActive(false);
    setVisasOpen(false);
    setEVisasOpen(false);
    setUSOpen(false);
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

  const handlePassportSelect = (index) => {
    closeMenu();

    if (window.location.pathname === "/us-passport") {
      window.dispatchEvent(
        new CustomEvent("passport-change", { detail: index }),
      );
      return;
    }

    navigate("/us-passport", { state: { activeIndex: index } });
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

  const passportLinks = [
    { label: "Passport Renewal", path: "passport-renewal" },
    { label: "New Passport", path: "new-passport" },
    { label: "Child Passport", path: "child-passport" },
    { label: "Lost Passport", path: "lost-passport" },
    { label: "Passport Name Change", path: "passport-name-change" },
    { label: "Second Limited Passport", path: "second-limited-passport" },
    {
      label: "Additional Requirements for US Passports",
      path: "additional-requirements",
    },
  ];

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
                  flex items-center gap-[20px] lg:gap-[18px]
                  justify-start lg:justify-center
                  fixed lg:static top-[85px] left-[0]
                  bg-brand-light lg:bg-transparent
                  w-full h-[calc(100vh-85px)] lg:h-auto
                  z-50 flex-col lg:flex-row
                  transition-all duration-200
                  border-t border-[rgba(18,34,65,0.1)] lg:border-none
                  items-start
                  text-[14px]
                  pl-[20px] lg:pl-0
                  pt-[30px] lg:pt-0
                  ${
                    isActive
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto"
                  }
                `}
              >
                <div
                  className="relative w-full lg:w-auto"
                  onMouseEnter={() => !isMobile() && setUSOpen(true)}
                  onMouseLeave={() => !isMobile() && setUSOpen(false)}
                >
                  <button
                    className="flex items-center text-[14px] md:text-[14px] pb-[0px] lg:pb-[10px] cursor-pointer text-[#4e5063] hover:text-[#be1e2d]"
                    onClick={(e) => {
                      if (isMobile()) {
                        e.preventDefault();
                        setUSOpen((p) => !p);
                        setVisasOpen(false);
                        setEVisasOpen(false);
                      }
                    }}
                  >
                    US Passport
                    <Chevron open={USOpen} />
                  </button>

                  <div
                    className={`
                      lg:absolute
                      mt-[0px] bg-white rounded-lg shadow-lg
                      w-[calc(100%-20px)] lg:min-w-[260px]
                      overflow-hidden transition-all duration-300
                      py-[0px] lg:py-[7px]
                      ${
                        USOpen
                          ? "opacity-100 pointer-events-auto max-h-[500px]"
                          : "opacity-0 pointer-events-none max-h-0"
                      }
                      lg:max-h-none
                    `}
                  >
                    {passportLinks.map((item, index) => (
                      <Link
                        key={index}
                        to={`/us-passport/${item.path}`}
                        onClick={closeMenu}
                        className="block px-4 py-2 text-[14px] text-left text-[#4e5063] hover:text-[#be1e2d] cursor-pointer"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div
                  className="relative w-full lg:w-auto"
                  onMouseEnter={() => !isMobile() && setVisasOpen(true)}
                  onMouseLeave={() => !isMobile() && setVisasOpen(false)}
                >
                  <Link
                    to="/visas"
                    className="flex items-center text-[14px] md:text-[14px] pb-[0px] lg:pb-[10px]"
                    onClick={(e) => {
                      if (isMobile()) {
                        if (!visasOpen) {
                          e.preventDefault();
                          setVisasOpen(true);
                          setEVisasOpen(false);
                          setUSOpen(false);
                        } else {
                          closeMenu();
                        }
                      } else {
                        closeMenu();
                      }
                    }}
                  >
                    Visas
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setVisasOpen((p) => !p);
                        setEVisasOpen(false);
                        setUSOpen(false);
                      }}
                    >
                      <Chevron open={visasOpen} />
                    </span>
                  </Link>

                  <div
                    className={`
                      lg:absolute mt-[0px] bg-white rounded-lg shadow-lg
                      w-[calc(100%-20px)] lg:min-w-[220px] lg:w-auto
                      overflow-hidden transition-all duration-300
                      py-[0px] lg:py-[7px]
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
                    className="flex items-center text-[14px] md:text-[14px] pb-[0px] lg:pb-[10px]"
                    onClick={(e) => {
                      if (isMobile()) {
                        if (!eVisasOpen) {
                          e.preventDefault();
                          setEVisasOpen(true);
                          setVisasOpen(false);
                          setUSOpen(false);
                        } else {
                          closeMenu();
                        }
                      } else {
                        closeMenu();
                      }
                    }}
                  >
                    E-Visas
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setEVisasOpen((p) => !p);
                        setVisasOpen(false);
                        setUSOpen(false);
                      }}
                    >
                      <Chevron open={eVisasOpen} />
                    </span>
                  </Link>

                  <div
                    className={`
                      lg:absolute mt-[0px] bg-white rounded-lg shadow-lg
                      w-[calc(100%-20px)] lg:min-w-[220px] lg:w-auto
                      overflow-hidden transition-all duration-300
                      py-[0px] lg:py-[7px]
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
                <Link onClick={closeMenu} to="/passport-photo-services">
                  Onsite Photo Service
                </Link>
                <Link onClick={closeMenu} to="/contact-us">
                  Contact us
                </Link>
              </div>

              {/* MOBILE MENU ICON */}
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

            {/* RIGHT ICONS */}
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
