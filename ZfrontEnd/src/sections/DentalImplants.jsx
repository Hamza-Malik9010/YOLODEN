import { Fade } from "react-awesome-reveal";
import di1 from "../../public/images/DI/di1.avif";
import di2 from "../../public/images/DI/di2.avif";
import di3 from "../../public/images/DI/di3.jpg";
import di4 from "../../public/images/DI/di4.png";
import di5 from "../../public/images/DI/di5.png";









const ExploreDentalImplants = () => {
  return (
    <main className="bg-blue-50 text-gray-800 pt-16">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Fade direction="down">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Dental Implants Made Simple
            </h1>
            <p className="mt-6 text-lg md:text-xl">
              Eat what you love and love how you live with a permanent solution for
              tooth loss—designed to last a lifetime.
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
                Call  (386) 574-7272
              </a>
            </div>
          </Fade>
        </div>
      </section>
      {/* What Are Dental Implants Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              What Are Dental Implants?
            </h2>
            <p className="text-lg text-center mb-6">
              Dental implants are the most advanced long-term solution for missing teeth. Each
              implant consists of three parts: the implant itself, which fuses with your
              jawbone; the connector, which holds the crown; and the crown itself, designed to
              look and function just like a natural tooth.
            </p>
          </Fade>
          <Fade direction="up">




            
          <div className="w-full h-[28rem] rounded-lg overflow-hidden shadow-lg">
    <img 
      src={di1}
      alt="Dental Implant Diagram"
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </div>






          </Fade>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Discover the Benefits of Dental Implants
            </h2>
          </Fade>
          <Fade direction="up">
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li>Improved oral health—preventing bone loss and maintaining jaw structure.</li>
              <li>Natural appearance—implants seamlessly match your existing teeth.</li>
              <li>Comfortable and secure—no slipping or discomfort during daily activities.</li>
              <li>Durable—implants can last for decades with proper care.</li>
            </ul>
          </Fade>
        </div>
      </section>
      {/* Affordable Options Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Your Affordable Implant Options
            </h2>
            <p className="text-lg text-center mb-6">
              Experience life-changing benefits at half the cost of traditional options. Our
              durable titanium implants snap securely into place without adhesives, giving you
              the confidence to eat, smile, and live freely.
            </p>
          </Fade>
          <Fade direction="up">









          <div className="w-full h-[28rem] rounded-lg overflow-hidden shadow-lg">
    <img 
      src={di2}
      alt="Secure Fit Dental Implants"
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </div>












          </Fade>
        </div>
      </section>
      {/* Explore Other Options Section */}
<section className="py-16 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6">
    <Fade direction="left">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Explore Other Implant Options
      </h2>
    </Fade>
    <div className="grid md:grid-cols-3 gap-6">
      <Fade direction="up">
        <div className="rounded-lg bg-white shadow-lg p-6 transform transition hover:scale-105">
          <h3 className="text-xl font-bold mb-4">Single Tooth Implant</h3>
          <p className="text-gray-700 mb-4">
            Replace a single missing tooth with a natural-looking, functional implant.
          </p>
          <div className="w-full h-48 rounded-md overflow-hidden">
            <img 
              src={di3}
              alt="Single Tooth Implant Procedure"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </Fade>
      <Fade direction="up">
        <div className="rounded-lg bg-white shadow-lg p-6 transform transition hover:scale-105">
          <h3 className="text-xl font-bold mb-4">Implant Bridge</h3>
          <p className="text-gray-700 mb-4">
            Replace multiple missing teeth while preserving your jaw structure.
          </p>
          <div className="w-full h-48 rounded-md overflow-hidden">
            <img 
              src={di4}
              alt="Dental Implant Bridge"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </Fade>
      <Fade direction="up">
        <div className="rounded-lg bg-white shadow-lg p-6 transform transition hover:scale-105">
          <h3 className="text-xl font-bold mb-4">Full Fixed Arch Implants</h3>
          <p className="text-gray-700 mb-4">
            Restore an entire upper or lower arch of teeth with fixed, durable implants.
          </p>
          <div className="w-full h-48 rounded-md overflow-hidden">
            <img 
              src={di5}
              alt="Full Fixed Arch Dental Implants"
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
                  What are dental implants made of?
                </summary>
                <p className="mt-2 text-gray-700">
                  Dental implants are typically made of titanium, a biocompatible material that fuses with the jawbone.
                </p>
              </details>
              <details className="border-b py-4">
                <summary className="cursor-pointer text-lg font-medium">
                  Are dental implants painful?
                </summary>
                <p className="mt-2 text-gray-700">
                  Most patients report minimal discomfort during the procedure and recovery period, thanks to modern anesthesia techniques.
                </p>
              </details>
              <details className="border-b py-4">
                <summary className="cursor-pointer text-lg font-medium">
                  How long do dental implants last?
                </summary>
                <p className="mt-2 text-gray-700">
                  With proper care, dental implants can last a lifetime, making them a cost-effective, long-term solution.
                </p>
              </details>
            </div>
          </Fade>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="py-8 bg-blue-700 text-white text-center">
        <p className="text-lg">
          Ready to take the next step? Contact us today to schedule your appointment and explore your dental implant options.
        </p>
      </footer>
    </main>
  );
};
export default ExploreDentalImplants;
