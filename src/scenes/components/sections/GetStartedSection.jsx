const PhoneIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.8788 13.503L15.3112 10.9353C14.3942 10.0183 12.8353 10.3852 12.4685 11.5772C12.1934 12.4026 11.2764 12.8611 10.4511 12.6776C8.61704 12.2191 6.14112 9.83492 5.68262 7.9092C5.40751 7.08386 5.95772 6.16685 6.78303 5.89178C7.97514 5.52498 8.34194 3.96606 7.42493 3.04905L4.85731 0.48143C4.1237 -0.160477 3.02329 -0.160477 2.38139 0.48143L0.63907 2.22375C-1.10325 4.05776 0.822472 8.91791 5.13241 13.2279C9.44235 17.5378 14.3025 19.5552 16.1365 17.7212L17.8788 15.9789C18.5208 15.2453 18.5208 14.1449 17.8788 13.503Z"
      className="fill-white group-hover:fill-[#BE1E2D] transition"
    />
  </svg>
);

const PinIcon = () => (
  <svg
    width="16"
    height="22"
    viewBox="0 0 16 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 0C3.58933 0 0 3.72717 0 8.30958C0 14.8207 7.248 21.5435 7.55644 21.8258C7.68356 21.9422 7.84178 22 8 22C8.15822 22 8.31644 21.9423 8.44355 21.8268C8.752 21.5435 16 14.8207 16 8.30958C16 3.72717 12.4107 0 8 0ZM8 12.8333C5.54933 12.8333 3.55556 10.7773 3.55556 8.25C3.55556 5.72275 5.54933 3.66667 8 3.66667C10.4507 3.66667 12.4444 5.72275 12.4444 8.25C12.4444 10.7773 10.4507 12.8333 8 12.8333Z"
      className="fill-white group-hover:fill-[#BE1E2D] transition"
    />
  </svg>
);

const BoltIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 0C8.82441 0 6.69767 0.645138 4.88873 1.85383C3.07979 3.06253 1.66989 4.78049 0.83733 6.79048C0.00476617 8.80047 -0.213071 11.0122 0.211367 13.146C0.635804 15.2798 1.68345 17.2398 3.22183 18.7782C4.76021 20.3165 6.72022 21.3642 8.85401 21.7886C10.9878 22.2131 13.1995 21.9952 15.2095 21.1627C17.2195 20.3301 18.9375 18.9202 20.1462 17.1113C21.3549 15.3023 22 13.1756 22 11C21.9966 8.08367 20.8365 5.28778 18.7744 3.22562C16.7122 1.16347 13.9163 0.00344047 11 0ZM14.707 14.707C14.5195 14.8945 14.2652 14.9998 14 14.9998C13.7348 14.9998 13.4805 14.8945 13.293 14.707L10.293 11.707C10.1055 11.5195 10.0001 11.2652 10 11V5C10 4.73478 10.1054 4.48043 10.2929 4.29289C10.4804 4.10536 10.7348 4 11 4C11.2652 4 11.5196 4.10536 11.7071 4.29289C11.8946 4.48043 12 4.73478 12 5V10.586L14.707 13.293C14.8945 13.4805 14.9998 13.7348 14.9998 14C14.9998 14.2652 14.8945 14.5195 14.707 14.707Z"
      className="fill-white group-hover:fill-[#BE1E2D] transition"
    />
  </svg>
);

export default function GetStartedSection() {
  const items = [
    { title: "Call us for availability", icon: <PhoneIcon /> },
    { title: "Walk-ins welcome", icon: <PinIcon /> },
    { title: "Same-day service offered", icon: <BoltIcon /> },
  ];

  return (
    <section className="py-[50px] md:py-[85px]">
      <div className="container">
        <div className="text-center mb-[20px] md:mb-[31px]">
          <h2 className="mb-[15px]">
            Get Your Passport or Visa Photos
            <br />
            Done Correctly the First Time
          </h2>

          <p>Walk in or contact us to get started.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] md:gap-[34px]">
          {items.map((item, i) => (
            <div
              key={i}
              className="
              group
              bg-[#F8F9FD]
              rounded-[20px]
              p-[20px]
              md:p-[30px]
              transition-all
              duration-300
              hover:bg-[#0f2747]
              hover:shadow-[0px_40px_40px_rgba(0,0,0,0.25)]
            "
            >
              <div className="rounded-[50%] group-hover:bg-[#fff] mb-[15px] w-[46px] bg-[#BE1E2D] h-[46px] flex items-center justify-center transition">
                {item.icon}
              </div>

              <h4 className="group-hover:text-white leading-[1.3] max-w-[187px] text-[20px] md:text-[22px] transition">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
