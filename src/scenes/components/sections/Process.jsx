export default function ProcessSection() {
  const processSteps = [
    {
      number: "1",
      title: "Submit Your Application",
      text: "Fill out our simple online form with your details.",
    },
    {
      number: "2",
      title: "We Handle the Documents",
      text: "Send your documents to us, and our team works directly with the U.S. Passport Agency on your behalf.",
    },
    {
      number: "3",
      title: "Receive Your Passport or Visa",
      text: "Get your passport or visa securely delivered, expedited in as little as 1–14 days.",
      red: true,
    },
  ];

  return (
    <section
      id="process"
      className="bg-white mt-[-140px] pt-[75px] pb-[91px] rounded-t-[100px] max-lg:rounded-t-[50px] max-sm:rounded-t-[25px] max-sm:pt-[50px] max-sm:pb-[50px]"
    >
      <div className="container">
        <h2 className="text-center mb-[55px] max-sm:mb-[30px]">
          How the <br /> Process Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[34px]">
          {processSteps.map((step, index) => (
            <div
              className="group bg-[#f8f9fd] rounded-[20px] p-[32px] h-full transition-all duration-200 hover:bg-[#122241] hover:shadow-[0_40px_40px_rgba(0,0,0,0.25)] max-lg:p-[25px_20px]"
              key={index}
            >
              <div className=" bg-[#be1e2d] text-white rounded-full w-[46px] h-[46px] inline-flex justify-center items-center text-[18px] font-semibold transition-all duration-200 group-hover:bg-white group-hover:text-[#122241]">
                {step.number}
              </div>
              <h3 className="group-hover:text-white max-w-[232px] mt-[15px] mb-[10px] transition-all duration-200">
                {step.title}
              </h3>
              <p className="group-hover:text-white mb-0 transition-all duration-200 max-w-[290px]">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
