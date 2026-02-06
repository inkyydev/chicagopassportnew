export default function InfoPanel({
  title,
  subtitle,
  leftTitle,
  leftItems = [],
  rightTitle,
  rightItems = [],
  text,
}) {
  return (
    <div className="mb-[50px] md:mb-[69px]">
      <div className="container">
        <div className="bg-[#C7E6FD] rounded-[20px] md:rounded-[40px] py-[35px] md:py-[60px] px-[20px] md:px-[72px] md:p-12">
          <h2 className=" mb-2">{title}</h2>

          <h3 className="mb-[19px] ">{subtitle}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] md:gap-[20px]">
            <div>
              <p className="mb-[16px] max-w-[400px]">{leftTitle}</p>

              <ul className="space-y-2">
                {leftItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start text-[#4E5063] mb-[3px] gap-[7px] text-[14px] md:text-[16px]"
                  >
                    <span className="text-[#BE1E2D]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-[16px] max-w-[341px]">{rightTitle}</p>

              <ul>
                {rightItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start text-[#4E5063] mb-[3px] gap-[7px] text-[14px] md:text-[16px]"
                  >
                    <span className="text-[#BE1E2D]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-[10px] md:mt-[20px]">{text}</p>
        </div>
      </div>
    </div>
  );
}
