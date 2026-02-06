import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import slide1 from "../../../assets/visa-good-bad.png";

/* ---------------- ICONS ---------------- */

const ArrowIconLeft = () => (
  <svg width="12" height="6" viewBox="0 0 12 6">
    <path
      d="M0.111269 2.52522C-0.0368757 2.67336 -0.0368757 2.91355 0.111269 3.0617L2.52543 5.47586C2.67358 5.624 2.91377 5.624 3.06191 5.47586C3.21006 5.32771 3.21006 5.08752 3.06191 4.93938L0.915989 2.79346L3.06191 0.647535C3.21006 0.49939 3.21006 0.2592 3.06191 0.111055C2.91377 -0.0370903 2.67358 -0.0370904 2.52543 0.111055L0.111269 2.52522ZM11.5161 2.79346L11.5161 2.41411L0.379509 2.41411L0.379509 2.79346L0.379509 3.1728L11.5161 3.17281L11.5161 2.79346Z"
      className="fill-black group-hover:fill-white transition"
    />
  </svg>
);

const ArrowIconRight = () => (
  <svg width="12" height="6" viewBox="0 0 12 6">
    <path
      d="M11.4048 3.0617C11.553 2.91355 11.553 2.67336 11.4048 2.52522L8.99068 0.111055C8.84254 -0.0370896 8.60235 -0.0370896 8.4542 0.111055C8.30606 0.2592 8.30606 0.499391 8.4542 0.647536L10.6001 2.79346L8.4542 4.93938C8.30606 5.08752 8.30606 5.32771 8.4542 5.47586C8.60235 5.624 8.84254 5.624 8.99068 5.47586L11.4048 3.0617ZM0 2.79346V3.17281H11.1366V2.79346V2.41411H0V2.79346Z"
      className="fill-black group-hover:fill-white transition"
    />
  </svg>
);

/* ---------------- COMPONENT ---------------- */

export default function VisaDosDontsSection() {
  const swiperRef = useRef(null);

  const requirements = [
    "The photo must be in color and taken within the last 6 months.",
    "Your face must be clearly visible, with no filters or enhancements commonly used on social media.",
    "The photo should be taken by another person — selfies are not accepted.",
    "Eyeglasses must be removed for the photo.",
    "The background must be plain white or off-white.",
    "Photos must be printed on high-quality photo paper, either matte or glossy.",
    "The image may not be digitally altered in any way.",
    "Photos that are damaged, torn, creased, or smudged will not be accepted.",
    "Maintain a neutral expression or a natural smile, with both eyes open.",
    "Face the camera directly, showing your full face clearly.",
    "Wear everyday clothing; uniforms, camouflage, or uniform-like attire are not permitted.",
    "Hats or head coverings are not allowed unless worn daily for religious reasons.",
    "Headphones, earbuds, or wireless hands-free devices are not permitted.",
    "Jewelry and facial piercings are allowed as long as they do not obscure your face.",
  ];

  return (
    <section className="pb-[30px] md:pb-[60px]">
      <div className="container">
        <div className="grid max-w-[1084px] mx-auto grid-cols-1 md:grid-cols-2 gap-[40px]">
          {/* LEFT */}
          <div>
            <h2 className="mb-[20px] md:mb-[42px]">
              Visa Photo Do’s <br /> And Don’ts
            </h2>

            <div className="bg-[#F8F9FD] rounded-[20px] p-[25px_20px] md:p-[43px_36px]">
              <h4 className="text-center mb-[20px] md:mb-[29px]">No shadows</h4>

              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
              >
                <SwiperSlide>
                  <img className="w-full" src={slide1} />
                </SwiperSlide>

                <SwiperSlide>
                  <img className="w-full" src={slide1} />
                </SwiperSlide>
              </Swiper>

              {/* CUSTOM ARROWS */}
              <div className="flex justify-center gap-[12px] mt-[20px] md:mt-[31px]">
                <button
                  type="button"
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="group cursor-pointer w-[54px] h-[54px] rounded-full bg-white hover:bg-[#122241] flex items-center justify-center transition"
                >
                  <ArrowIconLeft />
                </button>

                <button
                  type="button"
                  onClick={() => swiperRef.current?.slideNext()}
                  className="group cursor-pointer w-[54px] h-[54px] rounded-full bg-white hover:bg-[#122241] flex items-center justify-center transition"
                >
                  <ArrowIconRight />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="mb-[20px]">General Photo Requirements</h3>

            <ul className="space-y-[5px] text-[#4E5063] text-[14px] lg:text-[16px]">
              {requirements.map((item, i) => (
                <li key={i} className="flex items-start gap-[10px]">
                  <span className="text-[#BE1E2D]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
