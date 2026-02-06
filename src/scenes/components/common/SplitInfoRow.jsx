export default function SplitInfoRow({
  leftTitle,
  rightTitle,
  rightDescription,
  rightDescriptionLast,
  bullets = [],
}) {
  return (
    <section className="bg-[#F8F9FD] py-[50px] md:py-[69px]">
      <div className="container">
        <div className="max-w-[1084px] mx-[auto] grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          <div>
            <h2 className="max-w-[467px]">{leftTitle}</h2>
          </div>

          <div>
            <h3 className=" mb-[13px] max-w-[377px]">{rightTitle}</h3>

            <p className="mb-[13px] max-w-[480px]">{rightDescription}</p>

            <ul>
              {bullets.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start text-[#4E5063] mb-[3px] gap-[7px] text-[14px] md:text-[16px]"
                >
                  <span className="text-[#BE1E2D]">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-[13px]">{rightDescriptionLast}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
