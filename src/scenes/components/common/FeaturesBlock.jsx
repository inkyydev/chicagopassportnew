export default function FeatureBlock({
  title,
  textFirst,
  textSecond,
  bullets = [],
  image,
  imageAlt = "",
  smallTitle,
}) {
  return (
    <section className="pb-[55px]">
      <div className="container">
        <div
          className={`max-w-[1084px] mx-[auto] grid grid-cols-1 md:grid-cols-2 gap-[10px] md:gap-[20px] items-center
        `}
        >
          <div>
            <h2 className="mb-[20px]">{title}</h2>

            {smallTitle && <h3 className="mb-[19px]">{smallTitle}</h3>}

            {<p className="mb-[17px] max-w-[532px]">{textFirst}</p>}

            {bullets.length > 0 && (
              <ul className="mb-[19px]">
                {bullets.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-[#4E5063] gap-[7px] text-[14px] md:text-[16px]"
                  >
                    <span className="text-[#BE1E2D]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {<p>{textSecond}</p>}
          </div>

          <div className="flex justify-end mt-[15px] md:mt-[0]">
            <img
              src={image}
              alt={imageAlt}
              className="rounded-xl w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
