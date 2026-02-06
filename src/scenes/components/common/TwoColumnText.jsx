export default function TwoColumnText({ title, description }) {
  return (
    <section className="bg-[#F8F9FD] py-[50px] md:py-[100px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] items-center">
          <div>
            <h2 className="max-w-[482px]">{title}</h2>
          </div>

          <div>
            <p className="max-w-[489px]">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
