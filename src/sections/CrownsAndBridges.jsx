import { Fade } from "react-awesome-reveal";


import cab1 from "../../public/images/CAB/cab1.png";
import cab2 from "../../public/images/CAB/cab2.png";
import cab3 from "../../public/images/CAB/cab3.png";
import cab4 from "../../public/images/CAB/cab4.png";





const CrownsAndBridges = () => {
  return (
    <main className="bg-gray-50 text-gray-800 pt-16">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Fade direction="down">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Crowns and Bridges
            </h1>
            <p className="mt-6 text-lg md:text-xl">
              Restore your smile and functionality with our high-quality crowns and bridges.
            </p>
          </Fade>
          <Fade direction="up">
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button className="mb-3 h-12 items-center justify-center rounded-lg bg-blue-900 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-white hover:text-blue-900 border border-blue-900">
                Book Appointment
              </button>
              <a
                href="tel:1234567890"
                className="font-bold text-white flex items-center text-lg"
              >
                Call (386) 574-7272
              </a>
            </div>
          </Fade>
        </div>
      </section>
      {/* What Are Crowns and Bridges Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              What Are Crowns and Bridges?
            </h2>
            <p className="text-lg text-center mb-6">
              Crowns and bridges are fixed prosthetic devices that are cemented onto existing teeth or implants. Crowns are used to entirely cover or cap a damaged tooth, while bridges are used to replace one or more missing teeth by anchoring to the adjacent teeth.
            </p>
          </Fade>
          <Fade direction="up">
          <div className="w-full h-[28rem] rounded-lg overflow-hidden shadow-lg mb-8">
  <img 
    src={cab1}
    alt="Professional Crowns and Bridges Overview"
    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
  />
</div>
          </Fade>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Benefits of Crowns and Bridges
            </h2>
          </Fade>
          <Fade direction="up">
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li>Restore your smile and confidence.</li>
              <li>Improve chewing and speaking abilities.</li>
              <li>Maintain the shape of your face.</li>
              <li>Prevent remaining teeth from drifting out of position.</li>
              <li>Durable and long-lasting with proper care.</li>
            </ul>
          </Fade>
        </div>
      </section>
      {/* Types of Crowns and Bridges Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Types of Crowns and Bridges We Offer
            </h2>
          </Fade>
          <div className="grid md:grid-cols-3 gap-6">
            <Fade direction="up">
              <div className="rounded-lg bg-white shadow-lg p-6 transform transition hover:scale-105">
                <h3 className="text-xl font-bold mb-4">Porcelain Crowns</h3>
                <p className="text-gray-700 mb-4">
                  Porcelain crowns are highly durable and provide a natural-looking appearance.
                </p>
                <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg">
  <img 
    src={cab2}
    alt="Porcelain Dental Crowns"
    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
  />
</div>
              </div>
            </Fade>
            <Fade direction="up">
              <div className="rounded-lg bg-white shadow-lg p-6 transform transition hover:scale-105">
                <h3 className="text-xl font-bold mb-4">Metal Crowns</h3>
                <p className="text-gray-700 mb-4">
                  Metal crowns are known for their strength and durability, making them ideal for back teeth.
                </p>
                <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg">
  <img 
    src={cab3}
    alt="Metal Dental Crowns"
    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
  />
</div>
              </div>
            </Fade>
            <Fade direction="up">
              <div className="rounded-lg bg-white shadow-lg p-6 transform transition hover:scale-105">
                <h3 className="text-xl font-bold mb-4">Ceramic Bridges</h3>
                <p className="text-gray-700 mb-4">
                  Ceramic bridges are a great option for replacing missing teeth with a natural look.
                </p>
                <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg">
  <img 
    src={cab4}
    alt="Ceramic Dental Bridges"
    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
  />
</div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Frequently Asked Questions
            </h2>
          </Fade>
          <Fade direction="up">
            <div className="space-y-8">
              <details className="border-b py-4">
                <summary className="cursor-pointer text-lg font-medium">
                  How long do crowns and bridges last?
                </summary>
                <p className="mt-2 text-gray-700">
                  With proper care, crowns and bridges can last for many years, often 10-15 years or longer.
                </p>
              </details>
              <details className="border-b py-4">
                <summary className="cursor-pointer text-lg font-medium">
                  Are crowns and bridges noticeable?
                </summary>
                <p className="mt-2 text-gray-700">
                  Modern crowns and bridges are designed to look natural and blend seamlessly with your existing teeth.
                </p>
              </details>
              <details className="border-b py-4">
                <summary className="cursor-pointer text-lg font-medium">
                  What is the process for getting crowns and bridges?
                </summary>
                <p className="mt-2 text-gray-700">
                  The process typically involves two visits: one to prepare the teeth and take impressions, and another to place the permanent crowns or bridges.
                </p>
              </details>
            </div>
          </Fade>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="py-8 bg-blue-700 text-white text-center">
        <p className="text-lg">
          Ready to restore your smile? Contact us today to schedule your appointment and explore your crowns and bridges options.
        </p>
      </footer>
    </main>
  );
};

export default CrownsAndBridges;
