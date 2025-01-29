import { Fade } from "react-awesome-reveal";
const CompareDenture = () => {
  return (
    <main className="bg-gray-50 text-gray-800 pt-16">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Fade direction="down">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Compare Types of Dentures
            </h1>
            <p className="mt-6 text-lg md:text-xl">
              Every smile is unique, and every solution should be too. Compare our
              denture options to find the best fit for your needs, from full dentures
              to implant-supported solutions.
            </p>
          </Fade>
        </div>
      </section>
      
      {/* Full Dentures Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Full Dentures Comparison
            </h2>
            <p className="text-center text-gray-700 md:text-lg mb-8">
              Full dentures are ideal for replacing an entire arch of missing teeth. Discover how different options cater to your comfort, budget, and lifestyle.
            </p>
          </Fade>
          <div className="overflow-x-auto">
            <table className="table-auto w-full bg-white shadow-md rounded-lg">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Overview</th>
                  <th className="px-4 py-3 text-left">Customization</th>
                  <th className="px-4 py-3 text-left">Fit & Function</th>
                  <th className="px-4 py-3 text-left">Durability</th>
                  <th className="px-4 py-3 text-left">Warranty</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3">Implant Denture</td>
                  <td className="px-4 py-3">Securely snaps onto dental implants for unparalleled stability and functionality.</td>
                  <td className="px-4 py-3">Highly customizable gum and tooth options.</td>
                  <td className="px-4 py-3">Closest to natural teeth in feel and function.</td>
                  <td className="px-4 py-3">Extremely durable against wear and stains.</td>
                  <td className="px-4 py-3">7 years</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">Signature Elite</td>
                  <td className="px-4 py-3">Premium dentures with maximum customization for a natural appearance.</td>
                  <td className="px-4 py-3">Custom gum shades and tooth alignment.</td>
                  <td className="px-4 py-3">Excellent fit with premium comfort.</td>
                  <td className="px-4 py-3">Resistant to cracking and chipping.</td>
                  <td className="px-4 py-3">5 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* Partial Dentures Section */}
      <section className="py-16 bg-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="right">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Partial Dentures Comparison
            </h2>
            <p className="text-center text-gray-700 md:text-lg mb-8">
              Partial dentures are a great solution for replacing multiple missing teeth while preserving your remaining healthy teeth. Compare our options below.
            </p>
          </Fade>
          <div className="overflow-x-auto">
            <table className="table-auto w-full bg-white shadow-md rounded-lg">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Overview</th>
                  <th className="px-4 py-3 text-left">Customization</th>
                  <th className="px-4 py-3 text-left">Durability</th>
                  <th className="px-4 py-3 text-left">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3">Flexilytes Combo</td>
                  <td className="px-4 py-3">Lightweight and flexible with a natural appearance.</td>
                  <td className="px-4 py-3">Multiple gum and tooth shade options.</td>
                  <td className="px-4 py-3">Highly durable and crack-resistant.</td>
                  <td className="px-4 py-3">Moderate</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">Cast Partial</td>
                  <td className="px-4 py-3">Metal-based framework for added strength and stability.</td>
                  <td className="px-4 py-3">Limited customization options.</td>
                  <td className="px-4 py-3">Very durable with a long lifespan.</td>
                  <td className="px-4 py-3">Affordable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-gray-700 md:text-lg mb-8">
              Have questions about our denture options? Check out our FAQs below for more information.
            </p>
          </Fade>
          <div className="space-y-8">
            <details className="border-b py-4">
              <summary className="cursor-pointer text-lg font-medium">
                How do I know which denture type is best for me?
              </summary>
              <p className="mt-2 text-gray-700">
                The best denture type depends on your specific needs, lifestyle, and budget. Our dental professionals can help guide you in making the right choice.
              </p>
            </details>
            <details className="border-b py-4">
              <summary className="cursor-pointer text-lg font-medium">
                Are implant dentures worth the cost?
              </summary>
              <p className="mt-2 text-gray-700">
                Implant dentures offer superior stability, functionality, and aesthetics, making them a worthwhile investment for many patients.
              </p>
            </details>
            <details className="border-b py-4">
              <summary className="cursor-pointer text-lg font-medium">
                How long do dentures last?
              </summary>
              <p className="mt-2 text-gray-700">
                With proper care, dentures can last anywhere from 5 to 10 years. Regular check-ups and maintenance can extend their lifespan.
              </p>
            </details>
          </div>
        </div>
      </section>
      
    </main>
  );
};
export default CompareDenture;