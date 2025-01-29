import { useRef, useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import PrivacyPolicy from "./PrivacyPolicy";
import PropTypes from "prop-types";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

  useEffect(() => {
    let timeout;
    if (error) {
      timeout = setTimeout(() => {
        setError("");
      }, 8000);
    }
    return () => clearTimeout(timeout);
  }, [error]);

  useEffect(() => {
    if (showPrivacyPolicy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPrivacyPolicy]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate email sending
    setTimeout(() => {
      setIsSent(true);
      setIsLoading(false);
      form.current.reset();
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    }, 2000);
  };

  const handleAgree = () => {
    setIsPrivacyChecked(true);
    setShowPrivacyPolicy(false);
  };

  return (
    <Fade>
      <div className="max-w-screen-lg mx-auto p-6 my-12">
        <div className="max-w-xl mb-10 mx-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div className="text-center">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Contact Us
            </p>
          </div>
          <Fade direction="left">
            <h2 className="max-w-md mb-0 font-sans text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-2 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
                <span className="relative">Get In </span>
              </span>{" "}
              <span className="text-blue-800">Touch</span>
            </h2>
          </Fade>
        </div>
        <form ref={form} onSubmit={sendEmail} className="px-10 pt- pb-8">
          <div className="mb-6" name="contact" id="contact">
            <label
              htmlFor="user_email"
              className="mb-1 block text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 sm:w-1/2 order-1 sm:order-2">
              <label
                htmlFor="user_phone"
                className="mb-1 block text-base font-medium text-[#07074D]"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="user_phone"
                id="user_phone"
                placeholder="Enter your phone number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
            <div className="w-full px-3 sm:w-1/2 order-2 sm:order-1">
              <label
                htmlFor="user_name"
                className="mb-1 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
          </div>
          <div className="w-full mb-6">
            <label
              className="mb-1 block text-base font-medium text-[#07074D]"
              htmlFor="user_message"
            >
              Message
            </label>
            <textarea
              id="user_message"
              name="user_message"
              rows="4"
              placeholder="Enter your message"
              className="resize-none w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            ></textarea>
          </div>
          <div className="mb-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                required
                checked={isPrivacyChecked}
                onChange={() => setIsPrivacyChecked(!isPrivacyChecked)}
              />
              <span className="ml-2 text-gray-700">
              I agree to receive SMS messages. For details, refer to our{" "}
                <button
                  type="button"
                  className="text-blue-600 underline"
                  onClick={() => setShowPrivacyPolicy(true)}
                >
                  Privacy Policy
                </button>
                .
              </span>
            </label>
          </div>
          <div className="mt-4 text-center">
            <Fade>
              <button
                type="submit"
                value="Send"
                className="mb-3 inline-flex h-12 items-center justify-center rounded-lg bg-blue-900 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-white hover:text-blue-900 border border-blue-900"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </Fade>
            {isSent && (
              <p className="text-green-500 mt-1">
                Message sent successfully, Thank you!
              </p>
            )}
            {error && <p className="text-red-500 mt-1">{error}</p>}
          </div>
        </form>
        {showPrivacyPolicy && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-hidden">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full relative overflow-y-auto max-h-[50vh] mt-8 mb-8">
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                onClick={() => setShowPrivacyPolicy(false)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} onAgree={handleAgree} />
            </div>
          </div>
        )}
      </div>
    </Fade>
  );
};

Contact.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAgree: PropTypes.func.isRequired,
};

export default Contact;
