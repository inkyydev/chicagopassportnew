import { Link } from "react-router-dom";
import BtnAll from "../common/BtnAll";

export default function ContactUsServices({ bg }) {
  return (
    <section
      id="contact_us_services"
      className={`
        py-[97px]
        max-[1024px]:py-[80px]
        max-[767px]:py-[50px]
        ${bg ? `bg-[${bg}]` : ""}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          <div>
            <div>
              <h2
                className="
                  max-w-[482px]
                "
              >
                Contact Us for Various Chicago Passport Services
              </h2>
            </div>
          </div>

          <div>
            <div>
              <p className="mb-[18px]">
                Chicago Passport & Visa Services, registered with U.S. Passport
                Agencies under the name A Rush Passport & Visa Services, is a
                private company authorized to provide hand-carry commercial
                courier services for U.S. citizens in need of passports. From
                taking passport photos to assisting with document preparation,
                we offer a full suite of services designed to streamline the
                passport application process and support U.S. citizens in
                obtaining their passports quickly and securely.
              </p>
              <BtnAll text="Contact Us today" path="/contact-us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
