export const plansData = [
  {
    id: 1,
    title: "Standard",
    days: "11-15",
    description: "Days processing time",
    price: "$295",
  },
  {
    id: 2,
    title: "Standard",
    days: "11-15",
    description: "Days processing time",
    price: "$295",
  },
  {
    id: 3,
    title: "Standard",
    days: "11-15",
    description: "Days processing time",
    price: "$295",
  },
  {
    id: 4,
    title: "Standard",
    days: "11-15",
    description: "Days processing time",
    price: "$295",
    showOnlyWhenIsShown: true,
  },
];

export default function Plans({ isShown }) {
  return (
    <div>
      <h3 className="text-[26px] text-center font-semibold mb-[10px]">
        Select Speed of Service
      </h3>

      <p className="max-w-[612px] mx-auto mb-[42px] text-center">
        Are you 16 years or older and need a passport for the first time? Or
        your adult passport has expired for more than 5 years? You’re on the
        right track!
      </p>

      <div>
        <div className="flex justify-center flex-wrap  border-b border-[#d3d3e5] pb-[83px] mb-[63px] gap-[32px] max-[1024px]:gap-[20px] max-[767px]:gap-[20px] max-[767px]:pb-[45px] max-[767px]:mb-[40px]">
          {plansData
            .filter((p) => (p.showOnlyWhenIsShown ? isShown : true))
            .map((plan) => (
              <div
                key={plan.id}
                className="
              bg-[#f8f9fd] flex-[0_0_calc(25%_-_24px)] max-w-[calc(25%_-_24px)] rounded-[15px] p-[38px_22px_23px] max-[1024px]:flex-[0_0_calc(50%_-_10px)] max-[1024px]:max-w-[calc(50%_-_10px)] max-[767px]:flex-[0_0_100%] max-[767px]:max-w-full max-[767px]:p-[30px_20px_20px]"
              >
                <h3 className="text-center font-semibold !text-[26px] mb-[5px]">
                  {plan.title}
                </h3>

                <h4 className="text-center font-semibold !text-[32px] mb-[8px]">
                  {plan.days}
                </h4>

                <p className="text-center text-[14px]">{plan.description}</p>

                <a
                  href="#"
                  className=" bg-[#be1e2d] border border-[#be1e2d] flex h-[48px] rounded-[10px] justify-center items-center text-white font-medium shadow-[0_20px_20px_rgba(0,0,0,0.25)] mt-[20px] hover:bg-transparent hover:text-[#1c1c1c]"
                >
                  Start Order Now
                </a>

                <div className="flex items-center justify-between mt-[16px]">
                  <p className="m-0 text-[14px]">Service Fee</p>
                  <span className="text-[22px] font-semibold text-[#1c1c1c]">
                    {plan.price}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
