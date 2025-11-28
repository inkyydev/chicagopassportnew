export default function RadioGroup({ services, chooseValue, setChooseValue }) {
  return (
    <div className="flex items-center gap-[5px] md:gap-[12px] mb-[15px] w-full md:w-auto">
      {services.map((service) => (
        <label key={service.value} className="flex-1 md:flex-none">
          <input
            type="radio"
            name="service"
            value={service.value}
            defaultChecked={service.default}
            onChange={() => setChooseValue(service.value)}
            className="peer invisible absolute"
          />
          <span
            className="rounded-[8px] w-full min-h-[40px]
          px-[10px] md:px-[20px] lg:px-[34px]
          text-white inline-flex items-center cursor-pointer
          text-[12px] md:text-[14px] bg-primary justify-center
          peer-checked:bg-[#be1e2d] peer-checked:shadow-[0_15px_15px_rgba(0,0,0,0.25)]"
          >
            {service.label}
          </span>
        </label>
      ))}
    </div>
  );
}
