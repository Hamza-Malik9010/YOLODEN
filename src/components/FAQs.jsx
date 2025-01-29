import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const FAQs = () => {
  const [showMore, setShowMore] = useState(false);

  const faqs = [
    {
      question: "What Services does ZFC Dentistry offer?",
      answer:
        "ZFC Dentistry offers a wide range of dental services, including preventative care, virtual consultation, cleanings, fillings, root canals, extractions and more. Our experienced team is dedicated to providing exceptional oral health care to our patients.",
    },
    {
      question: "What are the effects of traditional habit known as Tooth bud extraction?",
      answer:
        "It's important to note that tooth bud extraction can have serious and detrimental effects on oral health. The tooth buds are the immature teeth that are still developing beneath the gums in children. Removing these tooth buds interferes with the natural eruption and alignment of permanent teeth, leading to various dental issues. Some potential effects of tooth bud extraction include: Misalignment of Teeth, Impacted Teeth, Bite Problems, Psychological Impact. It's essential to prioritize evidence-based dental care practices.",
    },
    {
      question: "How do I schedule an appointment at ZFC?",
      answer:
        "To schedule an appointment at ZFC simply fill out the form and submit. Besides our online booking system, you can also give us a call. We offer flexible scheduling options to ensure that you can receive the care you need at a time that works for you.",
    },
    {
      question: "How often should I visit the dentist?",
      answer:
        "It is recommended to visit the dentist every six months for a routine check-up and cleaning.",
    },
    {
      question: "What should I do if I have a dental emergency?",
      answer:
        "If you have a dental emergency, contact our office immediately. We offer emergency dental services to address urgent dental issues.",
    },
    {
      question: "How can I improve my oral hygiene?",
      answer:
        "To improve your oral hygiene, brush your teeth twice a day, floss daily, and use mouthwash. Additionally, maintain a healthy diet and avoid sugary foods and drinks.",
    },
    {
      question: "What are the benefits of cosmetic dentistry?",
      answer:
        "Cosmetic dentistry can enhance your smile, boost your confidence, and improve your overall oral health. Services include teeth whitening, veneers, and more.",
    },
    {
      question: "Are dental X-rays safe?",
      answer:
        "Yes, dental X-rays are safe. They use a very low level of radiation and are an essential tool for diagnosing dental issues.",
    },
    {
      question: "What is the process for getting dental implants?",
      answer:
        "The process for getting dental implants involves a consultation, placement of the implant, and placement of the crown. The entire process can take several months.",
    },
    {
      question: "How can I prevent cavities?",
      answer:
        "To prevent cavities, maintain good oral hygiene, avoid sugary foods and drinks, and visit the dentist regularly for check-ups and cleanings.",
    },
    {
      question: "What should I do if I have sensitive teeth?",
      answer:
        "If you have sensitive teeth, use a toothpaste designed for sensitive teeth, avoid acidic foods and drinks, and consult with your dentist for further advice.",
    },
    {
      question: "What are the options for replacing missing teeth?",
      answer:
        "Options for replacing missing teeth include dental implants, bridges, and dentures. Your dentist can help determine the best option for you.",
    },
    {
      question: "How can I whiten my teeth?",
      answer:
        "Teeth whitening options include in-office treatments, take-home kits, and over-the-counter products. Consult with your dentist to determine the best option for you.",
    },
  ];

  const initialFaqs = faqs.slice(0, 6);
  const remainingFaqs = faqs.slice(6);

  return (
    <div className="w-full bg-blue-50">
      <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="container flex flex-col justify-center p-3 mx-auto md:p-8">
          <div className="text-center">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              FAQs
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
                <span className="relative">Frequently Asked </span>
              </span>{" "}
              <span className="text-blue-800">Questions</span>
            </h2>
          </Fade>
          <div className="flex flex-col divide-y divide-gray-300 sm:mx-12 lg:px-12 xl:px-32 mb-4">
            {initialFaqs.map((faq, index) => (
              <Fade key={index}>
                <details>
                  <summary className="text-blue-950 py-2 outline-none cursor-pointer focus:font-semibold">
                    {faq.question}
                  </summary>
                  <div className="text-blue-800 px-4 pb-4">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </Fade>
            ))}
            {showMore &&
              remainingFaqs.map((faq, index) => (
                <Fade key={index}>
                  <details>
                    <summary className="text-blue-950 py-2 outline-none cursor-pointer focus:font-semibold">
                      {faq.question}
                    </summary>
                    <div className="text-blue-800 px-4 pb-4">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </Fade>
              ))}
          </div>
          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="mx-auto mt-2 text-blue-700 cursor-pointer focus:outline-none flex items-center"
            >
              See More
              <svg
                className="ml-2 h-5 w-5 text-blue-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default FAQs;
