import { Link } from "react-router-dom";
import HeroBtnSelect from "./HeroBtnSelect";

export default function PassportHeroSelect({ handleChange, activeIndexValue }) {
  return (
    <>
      <div className="bg-white rounded-[14px] max-w-[508px] p-[6px] relative z-[9] shadow-[0_40px_40px_rgba(0,0,0,0.25)]">
        <div className="rounded-[14px] border border-[#f0efeb] p-[13px] flex items-center gap-[20px] max-sm:flex-col max-sm:pt-[18px] max-sm:px-[13px] max-sm:pb-[13px]">
          <select
            onChange={handleChange}
            className={`flex-1 border-none appearance-none bg-transparent bg-[url('./assets/selected-arrow.svg')] bg-no-repeat bg-right pr-[10px] pl-[10px] text-[14px] text-[--color-text-muted] max-w-[calc(100%-137px)] outline-none max-sm:w-full max-sm:flex-none max-sm:max-w-full`}
          >
            <option value="" disabled>
              Choose
            </option>
            <option value="new-passport">New Passport</option>
            <option value="passport-renewal">Passport Renewal</option>
            <option value="child-passport">Child Passport</option>
            <option value="lost-passport">Lost Passport</option>
            <option value="passport-name-change">Passport Name Change</option>
            <option value="second-limited-passport">
              Second Limited Passport
            </option>
            <option value="additional-requirements">
              Additional Requirements for US Passports
            </option>
          </select>
          <HeroBtnSelect
            text="Get Started"
            path={`/us-passport/${activeIndexValue}`}
          />
        </div>
      </div>
    </>
  );
}
