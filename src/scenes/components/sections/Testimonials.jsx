import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import starsImg from "../../../assets/starts-img.svg";
import starsImg4 from "../../../assets/stars-4-img.svg";

import { testimonials } from "../../pages/homepage/data";

export default function TestimonialsSlider() {
  return (
    <section
      id="testimonials_section"
      className="py-[61px] pb-[40px] overflow-hidden max-sm:py-[50px]"
    >
      <h2 className="max-w-[722px] mx-auto text-center max-sm:mx-[20px]">
        Hear Why Customers Choose <br />
        Chicago Passport & Visa Services <br />
        Every Time
      </h2>

      <div className="swiper-custom-wrapper mx-[-200px] max-sm:mx-0 max-sm:px-[20px]">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          centeredSlides={true}
          speed={700}
          pagination={{ clickable: true }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = document.querySelector(
              ".swiper-button-prev-custom"
            );
            swiper.params.navigation.nextEl = document.querySelector(
              ".swiper-button-next-custom"
            );
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1200: { slidesPerView: 5, spaceBetween: 40 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide
              key={index}
              className="py-[50px] max-sm:py-[40px] max-sm:pb-[30px]"
            >
              <div
                className="testimonials-card
              bg-white rounded-[10px] p-[28px] px-[22px] transition-all duration-200
              swiper-slide-active:shadow-[0_20px_40px_rgba(0,0,0,0.15)] max-sm:swiper-slide-active:shadow-[0_10px_25px_rgba(0,0,0,0.15)] "
              >
                <div className="stars">
                  <img src={item.stars === 4 ? starsImg4 : starsImg} alt="" />
                </div>

                <p className="italic my-[20px]">{item.text}</p>

                <div
                  className="border-t border-[#d3d3e5] pt-[20px] flex items-center
              "
                >
                  <div className="flex-1">
                    <h5 className="text-[16px] mb-[2px]">{item.name}</h5>
                    <span className="text-[14px] text-[#4e5063]"></span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="slider-nav flex justify-center gap-[12px] mt-[10px]">
        <button
          className="
          cursor-pointer swiper-button-prev-custom w-[60px] h-[60px] rounded-full flex items-center justify-center bg-transparent border-none transition-all duration-200 hover:bg-[#122241] [&:hover_svg_path]:fill-white "
        >
          <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
            <path
              d="M1.05429 4.16733C0.832265 4.38935 0.832265 4.74932 1.05429 4.97134L4.67233 8.58938C4.89435 8.8114 5.25431 8.8114 5.47634 8.58938C5.69836 8.36736 5.69836 8.00739 5.47634 7.78537L2.2603 4.56933L5.47634 1.3533C5.69836 1.13128 5.69836 0.771311 5.47634 0.54929C5.25431 0.327269 4.89435 0.327269 4.67233 0.54929L1.05429 4.16733ZM13.6836 4.56934L13.6836 4.00082L1.45629 4.00081L1.45629 4.56933L1.45629 5.13786L13.6836 5.13786L13.6836 4.56934Z"
              fill="black"
            />
          </svg>
        </button>

        <button
          className="
          cursor-pointer swiper-button-next-custom w-[60px] h-[60px] rounded-full flex items-center justify-center bg-transparent border-none transition-all duration-200 hover:bg-[#122241] [&:hover_svg_path]:fill-white
      "
        >
          <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
            <path
              d="M13.5746 4.97134C13.7966 4.74932 13.7966 4.38935 13.5746 4.16733L9.95658 0.54929C9.73456 0.327269 9.37459 0.327269 9.15257 0.54929C8.93055 0.771311 8.93055 1.13128 9.15257 1.3533L12.3686 4.56933L9.15257 7.78537C8.93055 8.00739 8.93055 8.36736 9.15257 8.58938C9.37459 8.8114 9.73456 8.8114 9.95658 8.58938L13.5746 4.97134ZM0.945312 4.56934L0.945313 5.13786L13.1726 5.13786L13.1726 4.56933L13.1726 4.00081L0.945312 4.00082L0.945312 4.56934Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
