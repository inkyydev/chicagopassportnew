import exampleImg from "../../../assets/well-composed-example.png";

export default function PhotoCompositionExamples() {
  const requirements = [
    "The photo must be in color and taken within the last 6 months.",
    "Your face must be clearly visible, with no filters or enhancements commonly used on social media.",
    "The photo should be taken by another person — selfies are not accepted.",
    "Eyeglasses must be removed for the photo.",
    "The background must be plain white or off-white.",
    "Photos must be printed on high-quality photo paper, either matte or glossy.",
    "The image may not be digitally altered in any way.",
    "Photos that are damaged, torn, creased, or smudged will not be accepted.",
    "Maintain a neutral expression or a natural smile, with both eyes open.",
    "Face the camera directly, showing your full face clearly.",
    "Wear everyday clothing; uniforms, camouflage, or uniform-like attire are not permitted.",
    "Hats or head coverings are not allowed unless worn daily for religious reasons. In such cases, a signed statement confirming this is required.",
    "Headphones, earbuds, or wireless hands-free devices are not permitted.",
    "Jewelry and facial piercings are allowed as long as they do not obscure your face. Permanent tattoos are also acceptable.",
  ];

  return (
    <section className="pb-[40px] md:pb-[84px]">
      <div className="container">
        <div className="grid max-w-[1072px] mx-auto grid-cols-1 md:grid-cols-2 gap-[32px] items-start">
          <div>
            <h2 className="mb-[28px] max-w-[353px] text-[26px] md:text-[32px]">
              Well Composed Photo Composition Examples
            </h2>

            <div className="bg-[#F8F9FD] rounded-[32px] p-[20px]">
              <img
                src={exampleImg}
                alt="Well composed passport photo examples"
                className="w-full"
              />
            </div>
          </div>

          <div>
            <h3 className="mb-[20px]">General Photo Requirements</h3>

            <ul className="space-y-[5px] text-[#4E5063] mb-[20px] md:mb-[28px] text-[14px] lg:text-[16px]">
              {requirements.map((item, index) => (
                <li key={index} className="flex items-start gap-[10px]">
                  <span className="text-[#BE1E2D]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
