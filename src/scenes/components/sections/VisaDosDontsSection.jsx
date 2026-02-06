import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

import slide1 from "../../../assets/visa-good-bad.png";

const ArrowIconLeft = () => (
  <svg
    width="12"
    height="6"
    viewBox="0 0 12 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.111269 2.52522C-0.0368757 2.67336 -0.0368757 2.91355 0.111269 3.0617L2.52543 5.47586C2.67358 5.624 2.91377 5.624 3.06191 5.47586C3.21006 5.32771 3.21006 5.08752 3.06191 4.93938L0.915989 2.79346L3.06191 0.647535C3.21006 0.49939 3.21006 0.2592 3.06191 0.111055C2.91377 -0.0370903 2.67358 -0.0370904 2.52543 0.111055L0.111269 2.52522ZM11.5161 2.79346L11.5161 2.41411L0.379509 2.41411L0.379509 2.79346L0.379509 3.1728L11.5161 3.17281L11.5161 2.79346Z"
      className="fill-black group-hover:fill-[#fff] transition"
    />
  </svg>
);
const ArrowIconRight = () => (
  <svg
    width="12"
    height="6"
    viewBox="0 0 12 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.4048 3.0617C11.553 2.91355 11.553 2.67336 11.4048 2.52522L8.99068 0.111055C8.84254 -0.0370896 8.60235 -0.0370896 8.4542 0.111055C8.30606 0.2592 8.30606 0.499391 8.4542 0.647536L10.6001 2.79346L8.4542 4.93938C8.30606 5.08752 8.30606 5.32771 8.4542 5.47586C8.60235 5.624 8.84254 5.624 8.99068 5.47586L11.4048 3.0617ZM0 2.79346V3.17281H11.1366V2.79346V2.41411H0V2.79346Z"
      className="fill-black group-hover:fill-[#fff] transition"
    />
  </svg>
);

export default function VisaDosDontsSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
    "Hats or head coverings are not allowed unless worn daily for religious reasons. In such cases, a signed statement confirming this is required.",
    "Headphones, earbuds, or wireless hands-free devices are not permitted.",
    "Jewelry and facial piercings are allowed as long as they do not obscure your face. Permanent tattoos are also acceptable.",
  ];

  return (
    <section className="pb-[30px] md:pb-[60px]">
      <div className="container">
        <div className="grid max-w-[1084px] mx-[auto] grid-cols-1 md:grid-cols-2 gap-[25px] md:gap-[40px]">
          <div>
            <h2 className="mb-[20px] md:mb-[42px]">
              Visa Photo Do’s <br /> And Don’ts
            </h2>

            <div className="bg-[#F8F9FD] rounded-[20px] p-[25px_20px] md:p-[43px_36px]">
              <h4 className="text-center mb-[20px] md:mb-[29px]">No shadows</h4>

              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                onSwiper={(swiper) => {
                  setTimeout(() => {
                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                  });
                }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
              >
                <SwiperSlide>
                  <img
                    className="w-full"
                    src={slide1}
                    alt="Correct visa photo example"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <img
                    className="w-full"
                    src={slide1}
                    alt="Incorrect visa photo example"
                  />
                </SwiperSlide>
              </Swiper>

              <div className="flex justify-center gap-[12px] mt-[20px] md:mt-[31px]">
                <button
                  ref={prevRef}
                  type="button"
                  className="group cursor-pointer w-[54px] h-[54px] rounded-full bg-white hover:bg-[#122241] flex items-center justify-center transition"
                >
                  <ArrowIconLeft />
                </button>

                <button
                  ref={nextRef}
                  type="button"
                  className="group cursor-pointer w-[54px] h-[54px] rounded-full bg-[#fff] flex items-center justify-center hover:bg-[#122241] transition"
                >
                  <ArrowIconRight />
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-[20px]">General Photo Requirements</h3>

            <ul className="space-y-[5px] text-[#4E5063] mb-[20px] md:mb-[28px] text-[14px] lg:text-[16px]">
              {requirements.map((item, index) => (
                <li key={index} className="flex items-start gap-[10px]">
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
