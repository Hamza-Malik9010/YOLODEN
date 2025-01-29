import { Fade } from "react-awesome-reveal";
const TeethCleaning = () => {
  return (
    <main className="bg-blue-50 text-gray-800 pt-16">
      {/* Hero Section */}
      <header className="bg-blue-700 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Fade direction="down">
            <h1 className="text-4xl md:text-5xl font-bold">Professional Teeth Cleaning Services</h1>
            <p className="mt-6 text-lg md:text-xl">
              Maintain a healthy smile and fresh breath with our advanced teeth cleaning solutions. Remove plaque, tartar, and bacteria for optimal oral health.
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
      {/* Why Teeth Cleaning Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Why Is Professional Teeth Cleaning Important?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
              <div className="text-center">
                <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="mt-6 text-xl font-semibold">Prevent Cavities</h3>
                <p className="mt-4 text-gray-700">
                  Regular teeth cleaning removes plaque, the leading cause of cavities, before it hardens into tartar.
                </p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 mx-auto bg-gradient-to-r from-purple-500 to-blue-800 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="mt-6 text-xl font-semibold">Avoid Gum Disease</h3>
                <p className="mt-4 text-gray-700">
                  Professional cleanings help prevent gum disease by removing bacteria and tartar that cause inflammation.
                </p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="mt-6 text-xl font-semibold">Freshen Your Breath</h3>
                <p className="mt-4 text-gray-700">
                  Eliminate bacteria and buildup that contribute to bad breath and keep your mouth feeling fresh.
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
              What Happens During a Teeth Cleaning Appointment?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Step 1: Examination</h3>
                <p className="text-gray-700">
                  Your dentist examines your teeth and gums for signs of decay, gum disease, and other issues.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Step 2: Plaque & Tartar Removal</h3>
                <p className="text-gray-700">
                  Using specialized tools, we gently remove plaque and tartar from your teeth, especially in hard-to-reach areas.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Step 3: Polishing & Flossing</h3>
                <p className="text-gray-700">
                  Teeth are polished to remove stains, and flossing ensures all debris is cleaned for a fresh finish.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Benefits of Regular Teeth Cleaning
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div>
                <div className="h-48 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center text-white text-lg font-bold">
                  Image
                </div>
                <p className="mt-6 text-gray-700">
                  Prevent long-term dental issues and save on expensive treatments with regular cleanings.
                </p>
              </div>
              <div>
                <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-lg font-bold">
                  Image
                </div>
                <p className="mt-6 text-gray-700">
                  Maintain a bright, healthy smile that boosts your confidence and overall well-being.
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
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Teeth Cleaning FAQs
            </h2>
            <div className="mt-12 space-y-8">
              <details className="p-4 bg-white border rounded-lg">
                <summary className="font-semibold">How often should I get my teeth cleaned?</summary>
                <p className="mt-2 text-gray-700">
                  It is recommended to get your teeth professionally cleaned every six months to maintain optimal oral health.
                </p>
              </details>
              <details className="p-4 bg-white border rounded-lg">
                <summary className="font-semibold">Does teeth cleaning hurt?</summary>
                <p className="mt-2 text-gray-700">
                  Teeth cleaning is generally painless. Some sensitivity may occur if you have gum inflammation or sensitivity.
                </p>
              </details>
              <details className="p-4 bg-white border rounded-lg">
                <summary className="font-semibold">Can teeth cleaning remove stains?</summary>
                <p className="mt-2 text-gray-700">
                  Yes, professional cleaning can remove surface stains caused by food and beverages, leaving your teeth brighter.
                </p>
              </details>
            </div>
          </Fade>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 bg-blue-700 text-white text-center">
        <p className="text-lg">
          Ready to keep your smile healthy and bright? Contact us today to schedule your teeth cleaning appointment!
        </p>
      </footer>
    </main>
  );
};
export default TeethCleaning;