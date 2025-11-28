import { Link } from "react-router-dom";

import footerLogo from "../../../assets/footer-logo.svg";
import facebookIcon from "../../../assets/facebook-icon.svg";
import instagramIcon from "../../../assets/instagram-icon.svg";
import mailIcon from "../../../assets/email-icon.svg";
import phoneIcon from "../../../assets/phone-icon.svg";
import locationIcon from "../../../assets/location-icon.svg";
import footerSmallLogo from "../../../assets/footer-small-logo.svg";

export default function Footer() {
  return (
    <footer
      className="
      overflow-hidden
    bg-[#122241] relative pt-[64px] pb-[50px]
    rounded-t-[100px]
    max-[1250px]:rounded-t-[50px]
    max-[767px]:rounded-t-[25px] max-[767px]:pt-[45px] max-[767px]:pb-[25px]
  "
    >
      <div
        className="
      pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2
      w-[768px] h-[379px]
      bg-[url('./assets/footer-glow.png')] bg-no-repeat bg-center
    "
      ></div>

      <div className="container relative z-[9]">
        <div className="grid grid-cols-12 gap-[20px]">
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div>
              <Link to="/">
                <img src={footerLogo} alt="footer logo" />
              </Link>

              <p className="text-white text-[12px] max-w-[258px] mt-[28px] mb-[119px] max-[1024px]:mb-[40px] max-[767px]:my-[20px]">
                Chicago Passport & Visa Services – Fast, reliable, and secure
                travel document solutions since day one.
              </p>

              <div className="flex items-center gap-[20px] mb-[0] max-[1024px]:mb-[50px] max-[767px]:mb-[5px]">
                <a
                  href="https://www.facebook.com/ChicagoPassportServices"
                  target="_blank"
                  className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-white/10 hover:bg-[#be1e2d] transition"
                >
                  <img src={facebookIcon} alt="facebook" />
                </a>

                <a
                  href="https://www.instagram.com/chicagopassportvisaservices/"
                  target="_blank"
                  className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-white/10 hover:bg-[#be1e2d] transition"
                >
                  <img src={instagramIcon} alt="instagram" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3 border-l border-[#182a4d] pl-[32px] py-[22px] max-[767px]:pl-0 max-[767px]:border-none max-[767px]:py-[10px]">
            <h4 className="text-white text-[12px] font-medium">
              Working Hours
            </h4>
            <div className="bg-[#be1e2d] h-[3px] w-[42px] my-[15px]"></div>
            <div className="flex flex-col gap-[24px]">
              <p className="text-white text-[14px]">Mon-Fri: 8:30am-5:00pm</p>
              <p className="text-white text-[14px]">Sat 10:00am - 2:00pm</p>
              <p className="text-white text-[14px]">
                Sunday by Appointment Only
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 lg:col-span-2 border-l border-[#182a4d] pl-[32px] py-[22px] max-[767px]:pl-0 max-[767px]:border-none max-[767px]:py-[10px]">
            <h4 className="text-white text-[12px] font-medium">Quick Links</h4>
            <div className="bg-[#be1e2d] h-[3px] w-[42px] my-[15px]"></div>

            <div className="flex flex-col gap-[24px]">
              <Link
                className="text-white text-[14px] hover:text-[#be1e2d]"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-white text-[14px] hover:text-[#be1e2d]"
                to="/us-passport"
              >
                US Passport
              </Link>
              <Link
                className="text-white text-[14px] hover:text-[#be1e2d]"
                to="/visas"
              >
                Visas
              </Link>
              <Link
                className="text-white text-[14px] hover:text-[#be1e2d]"
                to="/e-visas"
              >
                E-Visas
              </Link>
              <Link
                to="/uk-eta-vise"
                className="text-white text-[14px] hover:text-[#be1e2d]"
              >
                UK ETA Visa
              </Link>
              <Link
                className="text-white text-[14px] hover:text-[#be1e2d]"
                to="/blog"
              >
                Blog
              </Link>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8 lg:col-span-4 border-l border-[#182a4d] pl-[32px] py-[22px] max-[767px]:pl-0 max-[767px]:border-none max-[767px]:py-[10px] max-[1024px]:mt-[0px]">
            <h4 className="text-white text-[12px] font-medium">Contact</h4>
            <div className="bg-[#be1e2d] h-[3px] w-[42px] my-[15px]"></div>

            <div className="flex flex-col gap-[20px] max-[767px]:gap-[15px]">
              <a
                href="mail:info@chicagopassport-visa.com"
                className="border border-[#182a4d] rounded-[5px] flex items-center py-[14px] px-[18px]"
              >
                <img src={mailIcon} alt="email" />
                <div className="h-[32px] w-[1px] bg-[#182a4d] mx-[12px]"></div>
                <p className="text-white text-[14px] m-0">
                  info@chicagopassport-visa.com
                </p>
              </a>

              <a
                href="tel:(312) 925-3278"
                className="border border-[#182a4d] rounded-[5px] flex items-center py-[14px] px-[18px]"
              >
                <img src={phoneIcon} alt="phone" />
                <div className="h-[32px] w-[1px] bg-[#182a4d] mx-[12px]"></div>
                <p className="text-white text-[14px] m-0">(312) 925-3278</p>
              </a>

              <div className="border border-[#182a4d] rounded-[5px] flex items-center py-[14px] px-[18px]">
                <img src={locationIcon} alt="location" />
                <div className="h-[32px] w-[1px] bg-[#182a4d] mx-[12px]"></div>
                <p className="text-white text-[14px] max-w-[207px] m-0">
                  180 N La Salle Street, Suite 106, Chicago, IL 60601
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-[#182a4d] my-[36px] max-[767px]:my-[20px]"></div>

        <div className="flex items-center justify-between max-[1024px]:flex-col-reverse max-[1024px]:gap-[20px]">
          <p className="text-white text-[14px] min-[1024px]:flex min-[1024px]:items-center gap-[5px] text-center md:text-left">
            Copyright By ©
            <img
              src={footerSmallLogo}
              alt="logo"
              className="inline-block w-[20px] mx-[5px]"
            />
            Chicago Passport & Visa Expedite 2025. All Rights Reserved.
          </p>

          <div className="flex items-center gap-[20px]">
            <Link
              to="/privacy-policy"
              className="text-white text-[12px] md:text-[14px] hover:text-[#be1e2d]"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-conditions"
              className="text-white text-[12px] md:text-[14px] hover:text-[#be1e2d]"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/refund-policy"
              className="text-white text-[12px] md:text-[14px] hover:text-[#be1e2d]"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
