import { Fade } from "react-awesome-reveal";
import backgroundImage from "./Images/background2.jpeg";
import Chance from "./Images/chance.png";
import Gateme from "./Images/gateme.png";
import Theodat from "./Images/theodat.png";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. John Doe",
      role: "General Dentist",
      description:
        "With over 20 years of experience, Dr. John Doe is dedicated to providing the best dental care possible.",
      image: Chance,
    },
    {
      name: "Dr. Jane Smith",
      role: "Cosmetic Dentist",
      description:
        "Dr. Jane Smith specializes in cosmetic dentistry and is passionate about creating beautiful smiles.",
      image: Gateme,
    },
    {
      name: "Dr. Michael Johnson",
      role: "Restorative Dentist",
      description:
        "Dr. Michael Johnson is an expert in restorative dentistry and is committed to restoring your smile.",
      image: Theodat,
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
      <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div className="text-center">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Our Team
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
                <span className="relative">Meet </span>
              </span>{" "}
              Our <span className="text-blue-800">Dedicated Team</span>
            </h2>
          </Fade>
          <Fade direction="right">
            <p className="text-base text-gray-700 md:text-lg">
              Our team of experienced professionals is committed to providing the
              highest quality dental care.
            </p>
          </Fade>
        </div>

        <div className="grid gap-8 row-gap-12 sm:grid-cols-1 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Fade key={index} direction="left">
              <div className="bg-white rounded-[4rem] rounded-bl-md rounded-tr-md overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl max-w-sm mx-auto">
                <div className="relative">
                  <img
                    className="w-full h-64 object-cover"
                    src={member.image || "/placeholder.svg?height=400&width=300"}
                    alt={member.name}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-sm text-blue-300">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
