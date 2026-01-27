import { useNavigate } from "react-router-dom";
import Plans from "./Plans";
import { passportSections } from "../../../data";

export default function SelectVisaType({
  activePassportIndex,
  setActivePassportIndex,
  title,
  enableRouting = false,
}) {
  const navigate = useNavigate();

  const passportRoutes = [
    "new-passport",
    "passport-renewal",
    "child-passport",
    "lost-passport",
    "passport-name-change",
    "second-limited-passport",
    "additional-requirements",
  ];

  return (
    <>
      <div id="get_started">
        <div className="flex justify-center flex-wrap gap-[13px] my-[46px] mb-[42px]max-[767px]:my-[35px] max-[767px]:mb-[0px]max-[767px]:pb-[35px]">
          <h2 className="mb-[20px]">{title || "Select passport type"}</h2>

          <div
            className="flex w-full gap-[27px] flex-wrap
  max-[1024px]:gap-[10px] 
  max-[767px]:gap-[10px]"
          >
            {passportSections.map((item, index) => (
              <label
                key={index}
                className="
        flex-1 relative
        max-[1024px]:basis-[calc(20%-8px)] max-[1024px]:max-w-[calc(20%-8px)]
        max-[767px]:basis-[calc(50%-5px)] max-[767px]:max-w-[calc(50%-5px)]
      "
              >
                <input
                  type="radio"
                  name="passport-section"
                  checked={activePassportIndex === index}
                  onChange={() => {
                    setActivePassportIndex(index);

                    if (enableRouting) {
                      navigate(`/us-passport/${passportRoutes[index]}`);
                    }
                  }}
                  className="absolute invisible -z-10 peer"
                />

                <div
                  className={`
          relative block bg-[#c7e6fd] rounded-[15px] font-medium text-[14px]
          min-h-[110px] flex items-end p-[15px] leading-[1.3] cursor-pointer
          transition-all duration-200
          
          before:content-[''] before:absolute before:top-[10px] before:right-[10px]
          before:w-[21px] before:h-[21px]
          before:bg-[url('./assets/radio-no-checked.svg')]

          peer-checked:before:bg-[url('./assets/radio-checked.svg')]
          ${
            activePassportIndex === index
              ? "!bg-[#122241] text-white shadow-[0_20px_20px_rgba(0,0,0,0.25)]"
              : ""
          }
        `}
                >
                  <span
                    className={`${
                      index === 0 || index === 2 || index === 3
                        ? "max-w-[50px]"
                        : ""
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      <Plans isShown={activePassportIndex === 1 || activePassportIndex === 4} />
    </>
  );
}
