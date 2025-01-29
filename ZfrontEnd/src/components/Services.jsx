import { Fade } from "react-awesome-reveal";
import generalDentistryImage from "./Images/generalDentistry.jpeg";
import cosmeticDentistryImage from "./Images/cosmeticDentistry.jpeg";
import restorativeDentistryImage from "./Images/restorativeDentistry.jpeg";
import denturesImage from "./Images/dentures.jpeg";
import backgroundImage from "./Images/background1.jpeg";

const Services = () => {
  const services = [
    {
      title: "General Dentistry",
      description:
        "Routine cleanings, exams, fillings, and extractions. Comprehensive dental services for everyone.",
      image: generalDentistryImage,
    },
    {
      title: "Cosmetic Dentistry",
      description:
        "Teeth whitening, veneers, and more. Enhance your smile with our services.",
      image: cosmeticDentistryImage,
    },
    {
      title: "Restorative Dentistry",
      description:
        "Dental implants, crowns, and bridges. Restore your smile with our expertise.",
      image: restorativeDentistryImage,
    },
    {
      title: "Dentures",
      description:
        "Partial and complete dentures to replace missing teeth effectively and comfortably.",
      image: denturesImage,
    },
  ];

  return (
    <div
      className="bg-blue-200 py-12 w-full"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <section className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-6 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div className="text-center">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Services
            </p>
          </div>
          <Fade direction="left">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Our </span>
              </span>{" "}
              <span className="text-blue-800">Dental Services</span>
            </h2>
          </Fade>
          <Fade direction="right">
            <p className="text-base text-gray-700 md:text-lg">
              We offer a wide range of dental services to meet all your oral
              health needs.
            </p>
          </Fade>
        </div>

        <div className="grid gap-6 row-gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Fade key={index} direction="left">
              <div className="max-w-sm bg-white border border-gray-200 rounded-[4rem] rounded-bl-md rounded-tr-md shadow-lg mx-auto transition-shadow duration-300 hover:shadow-2xl">
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-tl-[4rem] rounded-tr-md w-full h-56 object-cover"
                  />
                )}
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {service.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="rounded border inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border-blue-900 bg-blue-900 tracking-wide shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-white hover:text-blue-900"
                  >
                     Learn more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
