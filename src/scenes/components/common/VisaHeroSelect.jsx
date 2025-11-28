import HeroBtnSelect from "./HeroBtnSelect";

export default function VisaOptions({ fields, link, btnText }) {
  return (
    <div className="flex gap-[10px] items-end max-sm:flex-col">
      <div className="flex flex-1 gap-[10px] max-sm:w-full">
        {fields.map((field, index) => (
          <div key={index} className="flex-1">
            <span className="text-[12px] text-[#1c1c1c] mb-[5px] inline-block">
              {field.label}
            </span>

            <select
              name={field.name}
              onChange={field.onChange}
              className="
    w-full h-[46px] 
    pr-[30px] pl-[10px]
    border-none outline-none 
    rounded-[5px]
    bg-white 
    appearance-none
    text-[#1c1c1c]

    bg-[url('/src/assets/selected-arrow.svg')]
    bg-no-repeat
    bg-[length:10px_auto]
    bg-[position:90%_center]
  "
            >
              {field.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <HeroBtnSelect text={btnText} path={link} />
    </div>
  );
}
