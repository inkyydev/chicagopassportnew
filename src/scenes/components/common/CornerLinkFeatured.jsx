import { Link } from "react-router-dom";

export default function CornerLinkFeatured({ to, img }) {
  return (
    <div
      className="
        absolute bottom-0 right-0 
        w-[60px] h-[60px]
        bg-white rounded-tl-[30px]
        flex items-center justify-center
      "
    >
      <div
        className="
          absolute w-[30px] h-[30px]
          right-full bottom-0
          scale-x-[-1]
          bg-[radial-gradient(circle_at_100%_0%,transparent_29px,#ffffff_calc(30px+1px))]
        "
      />

      <div
        className="
          absolute w-[30px] h-[30px]
          right-0 bottom-full
          scale-x-[-1]
          bg-[radial-gradient(circle_at_100%_0%,transparent_29px,#ffffff_calc(30px+1px))]
        "
      />

      <Link to={to}>
        <img src={img} alt="btn" />
      </Link>
    </div>
  );
}
