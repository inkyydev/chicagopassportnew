import paperImg from "../../../assets/paper-img.png";
import digitalImg from "../../../assets/digital-img.png";

export default function PassportCompositionGuide() {
  return (
    <section className="pb-[50px] md:pb-[60px]">
      <div className="container">
        <div className="text-center mb-[25px] md:mb-[38px]">
          <h2>
            Official U.S. Passport Photo
            <br className="hidden md:block" />
            Composition Guide
          </h2>
        </div>

        <div className="grid max-w-[1072px] mx-[auto] grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#F8F9FD] rounded-[20px] p-[20px] md:p-[32px] flex flex-col">
            <h3 className="mb-[15px]">Paper Photo Head Size Template</h3>

            <ul className="space-y-[5px] text-[#4E5063] mb-[20px] md:mb-[28px] text-[14px] lg:text-[16px]">
              <li className="flex items-start gap-[10px]">
                <span className="text-[#BE1E2D]">•</span>
                <span>Photo must be 2 inches by 2 inches</span>
              </li>

              <li className="flex items-start gap-[10px]">
                <span className="text-[#BE1E2D]">•</span>
                <span>
                  The height of the head (top of hair to bottom of chin) should
                  measure between 1 inch to 1 3/8 inches (25 – 35 mm)
                </span>
              </li>

              <li className="flex items-start gap-[10px]">
                <span className="text-[#BE1E2D]">•</span>
                <span>
                  Make sure the eye height is between 1 1/8 inches to 1 3/8
                  inches (28 – 35 mm) from the bottom of the photo
                </span>
              </li>
            </ul>

            <img
              src={paperImg}
              alt="Paper photo head size template"
              className="mt-[auto]"
            />
          </div>

          <div className="bg-[#F8F9FD] rounded-[20px] p-[20px] md:p-[32px] flex flex-col">
            <h3 className="mb-[15px]">Digital Image Head Size Template</h3>

            <ul className="space-y-[5px] text-[#4E5063] mb-[20px] md:mb-[28px] text-[14px] lg:text-[16px]">
              <li className="flex items-start gap-[10px]">
                <span className="text-[#BE1E2D]">•</span>
                <span>
                  The top of the head, including the hair, to the bottom of the
                  chin must be between 50% and 69% of the image's total height.
                  The eye height (measured from the bottom of the image to the
                  level of the eyes) should be between 56% and 69% of the
                  image's height.
                </span>
              </li>

              <li className="flex items-start gap-[10px]">
                <span className="text-[#BE1E2D]">•</span>
                <span>
                  Image pixel dimensions must be in a square aspect ratio
                  (meaning the height must be equal to the width). Minimum
                  acceptable dimensions are 600 pixels (width) x 600 pixels
                  (height). Maximum acceptable dimensions are 1200 pixels
                  (width) x 1200 pixels (height).
                </span>
              </li>
            </ul>

            <img src={digitalImg} alt="Digital image head size template" />
          </div>
        </div>
      </div>
    </section>
  );
}
