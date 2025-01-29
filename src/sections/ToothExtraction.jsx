import { Fade } from "react-awesome-reveal";
import te1 from "../../public/images/TE/te1.avif";
import te2 from "../../public/images/TE/te2.jpg";




const ToothExtraction = () => {
  return (
    <main className="bg-blue-50 text-gray-800 pt-16">
      {/* Hero Section */}
      <header className="bg-blue-700 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Fade direction="down">
            <h1 className="text-4xl md:text-5xl font-bold">Get Relief with Tooth Extractions</h1>
            <p className="mt-6 text-lg md:text-xl">
              If you&apos;re struggling with tooth pain or need an urgent extraction, our experienced
              dental team is here to provide the care you need.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button className="mb-3 h-12 items-center justify-center rounded-lg bg-blue-900 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-white hover:text-blue-900 border border-blue-900">
                Book Appointment
              </button>
              <a
                href="tel:1234567890"
                className="font-bold text-white flex items-center text-lg"
              >
                Call (866) 123-4567
              </a>
            </div>
          </Fade>
        </div>
      </header>
      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Why Choose Us for Tooth Extractions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
              <div className="text-center">
                <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <h3 className="mt-6 text-xl font-semibold">Expert Dental Team</h3>
                <p className="mt-4 text-gray-700">
                  Our highly trained dentists have successfully performed thousands of tooth
                  extractions, ensuring a smooth and comfortable experience for you.
                </p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <h3 className="mt-6 text-xl font-semibold">Quick Relief</h3>
                <p className="mt-4 text-gray-700">
                  We offer same-day appointments for urgent cases, so you don&apos;t have to endure
                  unnecessary pain.
                </p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <h3 className="mt-6 text-xl font-semibold">Comprehensive Care</h3>
                <p className="mt-4 text-gray-700">
                  From consultation to post-extraction care, our team provides end-to-end dental
                  solutions tailored to your needs.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      {/* When to Remove a Tooth Section */}
      <section className="py-16 bg-blue-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Fade direction="right">
            <h2 className="text-3xl md:text-4xl font-bold">When Should You Consider a Tooth Extraction?</h2>
            <p className="mt-6 text-lg md:text-xl">
              While preserving your natural teeth is always a priority, certain situations make
              extraction the best option:
            </p>
            <ul className="mt-6 space-y-4 text-left max-w-2xl mx-auto text-gray-700">
              <li>- Severe tooth decay beyond repair</li>
              <li>- Advanced gum disease causing bone loss</li>
              <li>- Overcrowding that requires orthodontic correction</li>
              <li>- Impacted wisdom teeth causing discomfort</li>
              <li>- Fractured or broken teeth that can&apos;t be restored</li>
            </ul>
          </Fade>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="mb-3 h-12 items-center justify-center rounded-lg bg-blue-900 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-white hover:text-blue-900 border border-blue-900">
              Book Appointment
            </button>
            <a
              href="tel:1234567890"
              className="font-bold text-blue flex items-center text-lg"
            >
              Call (386) 574-7272
            </a>
          </div>
        </div>
      </section>
      {/* Benefits of Extraction */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <Fade direction="left">
      <h2 className="text-3xl md:text-4xl font-bold text-center">Benefits of Tooth Extraction</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div>
          <div className="h-48 rounded-lg overflow-hidden">
            <img 
              src={te1}
              alt="Tooth extraction preventing infection"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="mt-6 text-gray-700">
            Extracting a severely damaged or infected tooth prevents the spread of infection,
            alleviates pain, and improves overall oral health.
          </p>
        </div>
        <div>
          <div className="h-48 rounded-lg overflow-hidden">
            <img 
              src={te2}
              alt="Tooth extraction for orthodontic treatment"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="mt-6 text-gray-700">
            It creates space for orthodontic treatments or dental implants, ensuring a healthy
            and aligned smile.
          </p>
        </div>
      </div>
    </Fade>
  </div>
</section>
      {/* FAQ Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Tooth Extraction FAQs</h2>
            <div className="mt-12 space-y-8">
              <details className="p-4 bg-white border rounded-lg">
                <summary className="font-semibold">How much does a tooth extraction cost?</summary>
                <p className="mt-2 text-gray-700">
                  The cost varies based on the complexity of the procedure. We offer affordable
                  options and payment plans to suit your budget.
                </p>
              </details>
              <details className="p-4 bg-white border rounded-lg">
                <summary className="font-semibold">Will the procedure hurt?</summary>
                <p className="mt-2 text-gray-700">
                  With advanced anesthesia techniques, we ensure a pain-free experience. Some
                  discomfort is normal post-procedure, but it is manageable with medication.
                </p>
              </details>
              <details className="p-4 bg-white border rounded-lg">
                <summary className="font-semibold">What can I eat after an extraction?</summary>
                <p className="mt-2 text-gray-700">
                  Soft foods like soups, mashed potatoes, and yogurt are recommended for the first
                  few days. Avoid hard or spicy foods until you heal.
                </p>
              </details>
            </div>
          </Fade>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 bg-blue-700 text-white text-center">
        <p className="text-lg">
          Ready to take the next step? Contact us today to schedule your appointment and get relief from dental pain!
        </p>
      </footer>
    </main>
  );
};
export default ToothExtraction;