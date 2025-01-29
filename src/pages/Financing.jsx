import Fade from "react-awesome-reveal";
import {
  CheckCircle,
  Clock,
  DollarSign,
  HeartPulse,
  CalendarCheck,
  CreditCard,
} from "lucide-react";


const DentalFinancing = () => {
  return (
    <main className="bg-blue-50 text-gray-800 pt-16 pb-12">
      {/* Hero Section */}
      <header className="bg-blue-700 text-white py-16 px-6 mb-6">
        <div className="max-w-7xl mx-auto text-center">
          <Fade direction="down">
            <h1 className="text-4xl md:text-5xl font-bold">
              Affordable Financing for Your Dental Care
            </h1>
            <p className="mt-6 text-lg md:text-xl">
              We believe everyone deserves a healthy smile. Our flexible
              financing options make high-quality dental treatments accessible,
              with plans tailored to fit your budget and lifestyle.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button className="mb-3 h-12 items-center justify-center rounded-lg bg-blue-900 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-white hover:text-blue-900 border border-blue-900">
                Apply Now
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
      <Fade direction="left">
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Is Dental Financing Right for You?
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Dental financing is a flexible way to manage the cost of dental
            treatments. It allows you to spread payments over time, making it
            easier to afford the care you need. Below, we break down how it
            works and why it might be the right choice for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white">
                <CheckCircle className="h-10 w-10" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">
                Great Approval Rating
              </h3>
              <p className="mt-4 text-gray-700">
                Our financing options are designed to be accessible, with a high
                approval rate for patients from all financial backgrounds.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white">
                <Clock className="h-10 w-10" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Same-Day Financing</h3>
              <p className="mt-4 text-gray-700">
                Need urgent dental care? Get approved for financing on the same
                day, so you don’t have to delay your treatment.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white">
                <HeartPulse className="h-10 w-10" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">
                Flexible Payment Plans
              </h3>
              <p className="mt-4 text-gray-700">
                Choose from a variety of payment plans to fit your budget,
                allowing you to spread the cost over manageable installments.
              </p>
            </div>
          </div>
        </section>
      </Fade>
      <Fade direction="left">
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Apply for Financing
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our financing options are designed to make dental care affordable
            and stress-free. Explore how you can get started today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white">
                <CreditCard className="h-10 w-10" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">
                Apply for Your Visit
              </h3>
              <p className="mt-4 text-gray-700">
                Start your financing journey by filling out a simple application
                online or during your visit.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white">
                <DollarSign className="h-10 w-10" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Explore Your Offer</h3>
              <p className="mt-4 text-gray-700">
                Receive personalized financing options tailored to your needs
                and budget.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white">
                <CalendarCheck className="h-10 w-10" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">
                Low Payments Over Time
              </h3>
              <p className="mt-4 text-gray-700">
                Enjoy flexible payment plans that fit your budget and let you
                focus on your dental health.
              </p>
            </div>
          </div>
          <div className=" rounded-2xl shadow-lg p-8 text-center my-12 max-w-7xl mx-auto bg-white">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">
              Get Started Today!
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Apply online or speak with one of our representatives to get
              started on your journey to stress-free financing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-blue-800 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">
                Apply Online
              </button>
              <a
                href="tel:1234567890"
                className="text-blue-600 font-semibold hover:underline"
              >
                Call Us: (123) 456-7890
              </a>
            </div>
          </div>
        </section>
      </Fade>
    </main>
  );
};

export default DentalFinancing;
