import doneRight from "../../../assets/done-right-img.png";
export default function DoneRight() {
  return (
    <section
      id="done_right"
      className="bg-[linear-gradient(to_top,#122241_50%,#ffffff_50%)]"
    >
      <div className="container">
        <div className="bg-[#c7e6fd] rounded-[40px] p-[61px] mt-[55px] max-lg:rounded-[30px] max-sm:rounded-[20px] max-sm:p-[30px_20px]">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[20px] md:gap-[30px]">
            <div className="order-2 md:order-1">
              <img src={doneRight} alt="passport" />
            </div>
            <div className="pl-0 md:pl-[20px] order-1 md:order-2">
              <h2>
                Expedited <br /> Processing,
                <br /> Done Right
              </h2>
              <p className="max-w-[500px] mt-[15px]">
                We can expedite your application in as little as 1–14 days — far
                faster than traditional government processing times of 5–7
                weeks. Whether you need same-day service or a 2-week turnaround,
                we’ve got you covered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
