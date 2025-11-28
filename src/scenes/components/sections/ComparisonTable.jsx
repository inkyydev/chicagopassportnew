import { Link } from "react-router-dom";

import checkIcon from "../../../assets/check-icon.svg";
import xIcon from "../../../assets/x-icon.svg";
import chicagoLogo from "../../../assets/logo.svg";
import BtnAll from "../common/BtnAll";

export default function ComparisonTable() {
  const rows = [
    { label: "Processing Times", ours: "Guaranteed", theirs: "Not Guaranteed" },
    {
      label: "Next Business Day",
      ours: " 24 Hours",
      theirs: " Not Offered",
    },
    {
      label: "Urgent",
      ours: " 3 – 5 Business Days",
      theirs: " Not Offered",
    },
    {
      label: "Express",
      ours: " 5 – 7 Business Days",
      theirs: " Not Offered",
    },
    {
      label: "Rush",
      ours: " 7 – 8 Business Days",
      theirs: " 10 – 13 Business Days",
    },
    {
      label: "Standard",
      ours: " 8 – 11 Business Days",
      theirs: " 10 – 15 Business Days",
    },
    {
      label: "Case Manager",
      ours: " Caring Specialist",
      theirs: " Not Offered",
    },
    {
      label: "Convenience",
      ours: " Simplicity",
      theirs: " Hassle, Long Lines",
    },
    {
      label: "Phone Support",
      ours: " Speak to a Real Person",
      theirs: " Updates via Mail",
    },
    {
      label: "White Glove Handling",
      ours: " VIP Premium",
      theirs: "Not Offered",
    },
  ];

  return (
    <section
      id="comparison_section"
      className="
    pb-[69px]
    bg-[linear-gradient(to_top,#f8f9fd,rgba(248,249,253,0))]
    max-sm:pb-[50px]
  "
    >
      <div className="container">
        <div className="text-center">
          <h2 className="max-w-[539px] mx-auto">
            Get Faster Turnaround <br /> and Better Service Than the Post Office
          </h2>

          <p className="max-w-[379px] mx-auto mt-[13px] mb-[30px]">
            Same-day and next-day services available, open 7 days a week,
            including holidays.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-transparent mb-[32px]">
            <thead>
              <tr>
                <th className="pl-0 pb-[18px]"></th>

                <th className="pl-0 pb-[18px]">
                  <div className="font-medium text-[22px] max-md:text-[18px]">
                    <img src={chicagoLogo} alt="chicago" />
                  </div>
                </th>

                <th className="pl-0 pb-[18px]">
                  <div className="font-medium text-[22px] max-md:text-[18px]">
                    Post Office
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="border-b border-[#D3D3E5]">
                  <td className="py-[16px] bg-transparent text-[22px] font-medium max-md:text-[16px] max-sm:min-w-[240px]">
                    {row.label}
                  </td>

                  <td className="py-[16px] bg-transparent max-sm:min-w-[240px]">
                    <div
                      className="
                    flex items-center gap-[20px]
                    text-[18px] 
                    max-md:text-[14px] 
                    max-sm:gap-[13px]
                  "
                    >
                      <img src={checkIcon} alt="check" />
                      {row.ours}
                    </div>
                  </td>

                  <td className="py-[16px] bg-transparent max-sm:min-w-[240px]">
                    <div
                      className="
                    flex items-center gap-[20px]
                    text-[18px] 
                    max-md:text-[14px] 
                    max-sm:gap-[13px]
                  "
                    >
                      <img src={xIcon} alt="x" />
                      {row.theirs}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center">
          <BtnAll text="Start my Application" path="/us-passport" />
        </div>
      </div>
    </section>
  );
}
