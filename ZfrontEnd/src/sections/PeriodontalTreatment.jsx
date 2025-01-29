import { Fade } from "react-awesome-reveal";



import unhealthygums from "../../public/images/P/pp1.png";
import unhealthy from "../../public/images/P/pp12.png";

import p2 from "../../public/images/P/p2.png";
import p3 from "../../public/images/P/p3.png";








const PeriodontalTreatment = () => {
  return (
    <main className="bg-blue-50 text-gray-800 pt-[7rem]">
      {/* Header Section */}
      <header className="text-center mb-10">
        <Fade direction="down">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">
            Periodontal Disease Treatment
          </h1>
          <p className="text-lg mb-6">
            Safeguard your gums with advanced treatments that not only restore gum health but also prevent further damage.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="mb-3 h-12 items-center justify-center rounded-lg bg-blue-900 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-white hover:text-blue-900 border border-blue-900">
              Book Appointment
            </button>
            <a
              href="tel:1234567890"
              className="font-bold text-BLACK flex items-center text-lg"
            >
              Call (866) 264-9482
            </a>
          </div>
        </Fade>
      </header>
      {/* What is Periodontal Disease Section */}
      <section className="mb-16 mx-8">
        <Fade direction="left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600 text-center">
            What is Periodontal Disease?
          </h2>
          <p className="text-lg mb-6 text-center">
            Periodontal disease is a serious gum infection caused by plaque and tartar buildup. If left untreated, it can
            damage the soft tissue and bone supporting your teeth, leading to tooth loss and other complications.
          </p>
        </Fade>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Fade direction="up">
            <div className="rounded-lg bg-white shadow-lg p-6 transform transition hover:scale-105 w-[32rem] h-[25rem] mx-auto">
              <h3 className="text-xl font-bold text-center">Healthy Gums</h3>
              <div className="h-40 rounded-md my-4 overflow-hidden shadow-lg">
                <img 
                  src={unhealthygums}
                  alt="Healthy Gums"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-4 text-gray-700 text-center">
                Healthy gums are firm, pink, and fit snugly around teeth. They're essential for maintaining overall oral health and preventing disease.
              </p>
            </div>
          </Fade>
          <Fade direction="up">
            <div className="rounded-lg bg-white shadow-lg p-6 transform transition hover:scale-105 w-[32rem] h-[25rem] mx-auto">
              <h3 className="text-xl font-bold text-center">Unhealthy Gums</h3>
              <div className="h-40 rounded-md my-4 overflow-hidden shadow-lg">
                <img 
                  src={unhealthy}
                  alt="Unhealthy Gums"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-4 text-gray-700 text-center">
                Unhealthy gums can appear red, swollen, and may bleed easily. This is often the first sign of periodontal disease.
              </p>
            </div>
          </Fade>
        </div>
      </section>
      {/* Treatment Options Section */}
      <section className="mb-16 mx-8">
        <Fade direction="right">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600 text-center">
            Treatment Options
          </h2>
        </Fade>
        <div className="grid md:grid-cols-2 mt-8">
          <Fade direction="up">
            <div className="bg-white shadow-lg p-6 rounded-lg transform transition hover:scale-105 w-[32rem] h-[25rem] mx-auto">
              <h3 className="text-xl font-bold mb-2 text-center">Scaling & Root Planing</h3>
              <div className="h-40 rounded-md my-4 overflow-hidden shadow-lg">
                <img 
                  src={p2}
                  alt="Periodontal Treatment Process"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-4 text-gray-700 text-center">
                This deep-cleaning procedure removes plaque and tartar below the gumline, promoting gum reattachment.
              </p>
            </div>
          </Fade>
          <Fade direction="up">
            <div className="bg-white shadow-lg p-6 rounded-lg transform transition hover:scale-105 w-[32rem] h-[25rem] mx-auto">
              <h3 className="text-xl font-bold mb-2 text-center">Antibiotic Therapy</h3>
              <div className="h-40 rounded-md my-4 overflow-hidden shadow-lg">
                <img 
                  src={p3}
                  alt="Advanced Periodontal Treatment"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-4 text-gray-700 text-center">
                Target bacterial infection with localized or systemic antibiotics to reduce inflammation and support healing.
              </p>
            </div>
          </Fade>
        </div>
      </section>
      {/* Why Treat Periodontal Disease Section */}
      <section className="mb-16 bg-gray-100 py-10 px-6 rounded-lg mx-8">
        <Fade direction="up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
            Why Treat Periodontal Disease?
          </h2>
          <p className="text-lg mb-6">
            Ignoring gum disease can lead to severe complications like tooth loss, jawbone deterioration, and increased risk of heart disease and diabetes.
            Early intervention not only restores gum health but also improves your overall quality of life.
          </p>
        </Fade>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 mx-8">
        <Fade direction="down">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Frequently Asked Questions
          </h2>
        </Fade>
        <div className="max-w-7xl mx-auto mt-12 space-y-8">
          <Fade direction="up">
            <details className="p-4 bg-white border rounded-lg">
              <summary className="font-semibold">What causes gum disease?</summary>
              <p className="mt-2 text-gray-700">
                Plaque buildup is the main cause, but factors like smoking, diabetes, and genetics also play a role.
              </p>
            </details>
            <details className="p-4 bg-white border rounded-lg">
              <summary className="font-semibold">
                How can I prevent periodontal disease?
              </summary>
              <p className="mt-2 text-gray-700">
                Regular brushing, flossing, and professional dental cleanings are essential for prevention. Avoid smoking and maintain a healthy diet.
              </p>
            </details>
            <details className="p-4 bg-white border rounded-lg">
              <summary className="font-semibold">
                How long does treatment take?
              </summary>
              <p className="mt-2 text-gray-700">
                Treatment duration varies depending on the severity of the condition. Most scaling and root planing procedures are completed in one to two visits.
              </p>
            </details>
          </Fade>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="text-center py-8 bg-blue-700 text-white">
        <p className="text-lg font-semibold">
          Take charge of your gum health today. Contact us to learn more about our periodontal treatments.
        </p>
      </footer>
    </main>
  );
};
export default PeriodontalTreatment;