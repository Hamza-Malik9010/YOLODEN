import { Fade } from "react-awesome-reveal";
const CavityFilling = () => {
  return (
    <main className="bg-blue-50 text-gray-800 pt-16">
      {/* Hero Section */}
      <header className="bg-blue-700 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Fade direction="down">
            <h1 className="text-4xl md:text-5xl font-bold">Cavity Filling Services</h1>
            <p className="mt-6 text-lg md:text-xl">
              Restore your smile and protect your teeth with professional cavity fillings. Our treatments are quick, effective, and designed to last.
            </p>
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
      </header>
      {/* What Is a Cavity Filling Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              What Is a Cavity Filling?
            </h2>
            <p className="mt-6 text-lg text-center text-gray-700">
              A cavity filling is a restorative dental procedure used to repair damage caused by tooth decay. It involves removing the decayed portion of the tooth and filling it with durable materials like composite resin, amalgam, or ceramic.
            </p>
            <div className="bg-gray-300 w-full h-64 flex items-center justify-center mt-8">
              <span className="text-gray-500">[Image Placeholder for Cavity Filling Process]</span>
            </div>
          </Fade>
        </div>
      </section>
      {/* Why Choose a Filling Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="right">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Why Are Cavity Fillings Necessary?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
              <div className="text-center">
                <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="mt-6 text-xl font-semibold">Stop Decay</h3>
                <p className="mt-4 text-gray-700">
                  Prevent cavities from worsening and spreading to other teeth, which could lead to more invasive treatments like root canals.
                </p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="mt-6 text-xl font-semibold">Restore Functionality</h3>
                <p className="mt-4 text-gray-700">
                  Regain the ability to chew, bite, and speak without discomfort or sensitivity.
                </p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="mt-6 text-xl font-semibold">Prevent Further Damage</h3>
                <p className="mt-4 text-gray-700">
                  Protect your tooth from fractures and avoid more costly procedures in the future.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      {/* Types of Fillings Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Types of Cavity Fillings We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Composite Resin</h3>
                <p className="text-gray-700">
                  Tooth-colored fillings that blend seamlessly with your natural teeth for a discreet look.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Amalgam</h3>
                <p className="text-gray-700">
                  Durable and cost-effective fillings made from a mixture of metals, ideal for back teeth.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Ceramic</h3>
                <p className="text-gray-700">
                  High-quality porcelain fillings that are stain-resistant and long-lasting.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      {/* The Process Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="right">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              What to Expect During a Cavity Filling
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Step 1: Examination</h3>
                <p className="text-gray-700">
                  Your dentist will examine the tooth, take X-rays, and determine the best filling material for you.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Step 2: Decay Removal</h3>
                <p className="text-gray-700">
                  The decayed portion of the tooth is removed to prepare the area for the filling.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Step 3: Filling & Polishing</h3>
                <p className="text-gray-700">
                  The cavity is filled, shaped, and polished to restore the tooth’s natural appearance and functionality.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Cavity Filling FAQs
            </h2>
            <div className="mt-12 space-y-8">
              <details className="p-4 bg-gray-100 border rounded-lg">
                <summary className="font-semibold">How long does a cavity filling last?</summary>
                <p className="mt-2 text-gray-700">
                  Composite fillings last 5-7 years, while ceramic and amalgam fillings can last up to 15 years with proper care.
                </p>
              </details>
              <details className="p-4 bg-blue-50 border rounded-lg">
                <summary className="font-semibold">Does the procedure hurt?</summary>
                <p className="mt-2 text-gray-700">
                  The procedure is painless, thanks to local anesthesia. Some sensitivity may occur afterward but subsides quickly.
                </p>
              </details>
              <details className="p-4 bg-blue-50 border rounded-lg">
                <summary className="font-semibold">Can children get cavity fillings?</summary>
                <p className="mt-2 text-gray-700">
                  Yes, cavity fillings are safe and effective for children to preserve their oral health.
                </p>
              </details>
            </div>
          </Fade>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 bg-blue-700 text-white text-center">
        <p className="text-lg">
          Ready to restore your smile? Contact us today to schedule your cavity filling appointment!
        </p>
      </footer>
    </main>
  );
};
export default CavityFilling;