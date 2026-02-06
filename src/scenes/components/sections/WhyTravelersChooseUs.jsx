import checkmark from "../../../assets/pink-checkmark.svg";

export default function WhyTravelersChooseUs() {
  return (
    <section className="bg-[#0f2747] py-[50px] md:py-[74px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] items-start">
          <div>
            <h2 className="text-[#fff] max-w-[330px]">
              Why Travelers Choose Us
            </h2>
          </div>

          <ul className="space-y-[15px] md:space-y-[23px]">
            {[
              "Approved photo standards for U.S. and all foreign governments",
              "Visa photos for every country",
              "Photos for U.S. passports and international passports",
              "Specialists trained in passport & visa documentation",
              "Fast service, including same-day",
              "Dramatically lowers the chance of photo rejection",
              "Convenient on-site service",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-[10px] md:gap-[20px] text-[#fff] text-[14px] md:text-[16px]"
              >
                <img src={checkmark} alt="icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
