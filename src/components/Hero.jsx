import homepicture from "./Images/doctors3.png";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <main>
      <div className="" name="home">
        <div className="mx-auto h-full px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 md:py-36 lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="">
              <div className="lg:max-w-xl lg:pr-5">
                <Fade direction="down">
                  <h2 className="md:mt-0 mt-24 mb-4 max-w-lg text-6xl font-light leading-snug tracking-tight text-blue-800 sm:text-8xl">
                    Welcome to
                  </h2>
                  <h2 className="max-w-lg mb-6 text-4xl font-bold leading-snug tracking-tight text-blue-800 sm:text-6xl">
                    Z Family & Cosmetic Dentistry
                  </h2>
                </Fade>

                <Fade>
                  <p className="text-base text-gray-700 mt-4">
                    At Z Family & Cosmetic Dentistry, we are committed to
                    harmonizing oral health and creating beautiful smiles. Our
                    modern dental care brings confidence and wellness to your
                    life. Experience the highest standard of dental care with our
                    dedicated team of professionals.
                  </p>
                </Fade>
              </div>
              <Fade direction="up">
                <div className="mt-10 flex flex-col items-center md:flex-row">
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="mb-3 inline-flex h-12 w-full items-center justify-center rounded border border-blue-900 bg-blue-900 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-white hover:text-blue-900"
                  >
                    Book Appointment
                  </Link>
                  <a
                    href="tel:1234567890"
                    className="ml-4 font-bold text-blue-900 flex items-center text-lg hover:text-blue-700"
                  >
                    Call (386) 574-7272
                  </a>
                </div>
              
              <div className="mt-12 flex flex-col space-y-3 divide-gray-300 text-sm text-gray-700 sm:flex-row sm:space-y-0 sm:divide-x">
                <div className="flex max-w-xs space-x-2 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  <p>
                    We are dedicated to providing comprehensive, quality dental
                    care.
                  </p>
                </div>
                <div className="flex max-w-xs space-x-2 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                  <p>Leading dental clinic in Deltona, Florida.</p>
                </div>
              </div>
              </Fade>
            </div>
            
            <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 17l-4 4m0 0l-4-4m4 4V3"
                />
              </svg>
              <div className="w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-md rounded-br-md bg-gradient-to-b from-blue-600 to-blue-800 max-h-[500px]">
               
                <Fade direction="right">
                  <img className="-mb-20" src={homepicture} alt="hero portrait" />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
