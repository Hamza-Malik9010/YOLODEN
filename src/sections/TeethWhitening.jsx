import { Fade } from "react-awesome-reveal";
const TeethWhitening = () => {
  return (
    <main className="bg-blue-50 text-gray-800 pt-16">
      {/* Hero Section */}
      <header className="bg-blue-700 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Fade direction="down">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Transform Your Smile with Teeth Whitening
            </h1>
            <p className="mt-6 text-lg md:text-xl">
              Brighten your smile with our professional teeth whitening solutions, designed to safely and effectively enhance the natural beauty of your teeth. Rediscover your confidence with a radiant smile that turns heads.
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
                Call (866) 264-9482
              </a>
            </div>
          </Fade>
        </div>
      </header>
      {/* In-Office Whitening Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Professional In-Office Teeth Whitening
            </h2>
            <p className="text-lg text-center text-gray-700">
              Achieve a brilliant smile in as little as one appointment with our advanced in-office whitening treatments. Using cutting-edge LED technology and professional-grade whitening gels, we can lighten your teeth by several shades in under two hours.
            </p>
          </Fade>
          <div className="mt-12 flex justify-center">
            <div className="h-64 w-full max-w-3xl bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center text-white text-lg font-bold shadow-md">
              [Image Placeholder for Whitening Process]
            </div>
          </div>
        </div>
      </section>
      {/* At-Home Whitening Section */}
      <section className="py-16 bg-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="right">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Convenient At-Home Whitening Kits
            </h2>
            <p className="text-lg text-center text-gray-700">
              Prefer to brighten your smile on your schedule? Our custom-fit at-home whitening kits are tailored to your teeth and come with professional-grade gels for maximum effectiveness.
            </p>
          </Fade>
          <div className="mt-12 flex justify-center">
            <div className="h-64 w-full max-w-3xl bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-lg font-bold shadow-md">
              [Image Placeholder for At-Home Whitening Kit]
            </div>
          </div>
        </div>
      </section>
      {/* Whitening vs. Bleaching Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Teeth Whitening vs. Teeth Bleaching
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 p-6 rounded-lg text-white shadow-md">
                <h3 className="text-xl font-bold mb-2">Teeth Whitening</h3>
                <p>
                  Teeth whitening focuses on removing stains and discoloration from the surface of your teeth. Its an excellent option for restoring your teeths natural color and brightness.
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg text-white shadow-md">
                <h3 className="text-xl font-bold mb-2">Teeth Bleaching</h3>
                <p>
                  Teeth bleaching involves using peroxide-based solutions to lighten teeth beyond their natural shade. This option is best for individuals looking for a dramatic transformation.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      {/* Cost Section */}
      <section className="py-16 bg-blue-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How Much Does Teeth Whitening Cost?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The cost of teeth whitening varies based on the treatment type and your specific needs. Pricing starts at $250 and goes up to $425 per arch. Financing options are available to make your brighter smile affordable for everyone.
            </p>
          </Fade>
        </div>
      </section>
      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Tips for Maintaining a Whiter Smile</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
              <li>Avoid foods and drinks that stain, like coffee, tea, and red wine.</li>
              <li>Maintain a consistent oral hygiene routine, including brushing and flossing.</li>
              <li>Use a straw when drinking dark beverages to minimize contact with your teeth.</li>
              <li>Consider touch-up whitening treatments every six months.</li>
              <li>Visit your dentist regularly for professional cleanings and check-ups.</li>
            </ul>
          </Fade>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <details className="bg-white shadow p-6 rounded-lg">
                <summary className="text-lg font-semibold">How long does teeth whitening last?</summary>
                <p className="mt-4 text-gray-700">
                  The results of professional teeth whitening can last anywhere from six months to two years, depending on your diet and oral hygiene habits.
                </p>
              </details>
              <details className="bg-white shadow p-6 rounded-lg">
                <summary className="text-lg font-semibold">Is teeth whitening safe?</summary>
                <p className="mt-4 text-gray-700">
                  Yes, our teeth whitening treatments are safe and conducted under the supervision of experienced professionals.
                </p>
              </details>
              <details className="bg-white shadow p-6 rounded-lg">
                <summary className="text-lg font-semibold">Can I whiten my teeth at home?</summary>
                <p className="mt-4 text-gray-700">
                  Absolutely! Our at-home whitening kits are an excellent option for patients who prefer to whiten their teeth on their own schedule.
                </p>
              </details>
            </div>
          </Fade>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="py-8 bg-blue-700 text-white text-center">
        <p className="text-lg">
          Ready to enhance your smile? Contact us today to schedule an appointment and learn more about our teeth whitening options!
        </p>
      </footer>
    </main>
  );
};
export default TeethWhitening;