import { HashLink } from "react-router-hash-link";

export default function BtnHashLink({ text, path }) {
  return (
    <HashLink
      smooth
      to={path}
      className="
    inline-block bg-[#be1e2d] border border-[#be1e2d] text-white 
    font-medium rounded-[10px] shadow-[0_20px_20px_rgba(0,0,0,0.25)]
    py-[12px] px-[31px] text-[18px]
    hover:bg-transparent hover:text-[#1c1c1c]
    max-lg:text-[16px] max-sm:text-[14px]
  "
    >
      {text}
    </HashLink>
  );
}
