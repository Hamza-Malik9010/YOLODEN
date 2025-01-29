const Footer = () => {
  return (
    <footer className="w-full bg-blue-900 text-white px-4 py-16">
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <svg
                className="w-8 text-white"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide uppercase">
                ZFC Dentistry
              </span>
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm">
                We are dedicated to providing comprehensive, quality dental
                care. Our team of experienced professionals is committed to
                ensuring your oral health and creating beautiful smiles.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide">Contacts</p>
            <div className="flex">
              <p className="mr-1">Phone:</p>
              <a
                href="tel:(386)574-7272"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 hover:text-gray-400"
              >
                (386)574-7272              </a>
            </div>
            <div className="flex">
              <p className="mr-1">Email:</p>
              <a
                href="mailto:Info@deltonafldentist.com"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 hover:text-gray-400"
              >
                Info@deltonafldentist.com
              </a>
            </div>
            <div className="flex">
              <p className="mr-1">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 hover:text-gray-400"
              >
                WR3H+C7P Deltona, Florida, USA
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide">Social</span>
            <div className="flex items-center mt-1 space-x-3">
              <a
                href="/"
                className="transition-colors duration-300 hover:text-gray-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.99,3.66,9.12,8.44,9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.51,1.49-3.89,3.77-3.89c1.09,0,2.23,0.2,2.23,0.2v2.45h-1.26c-1.24,0-1.63,0.77-1.63,1.56v1.88h2.78l-0.44,2.89h-2.34v6.99C18.34,21.12,22,16.99,22,12z" />
                </svg>
              </a>
              <a
                href="/"
                className="transition-colors duration-300 hover:text-gray-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.99,3.66,9.12,8.44,9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.51,1.49-3.89,3.77-3.89c1.09,0,2.23,0.2,2.23,0.2v2.45h-1.26c-1.24,0-1.63,0.77-1.63,1.56v1.88h2.78l-0.44,2.89h-2.34v6.99C18.34,21.12,22,16.99,22,12z" />
                </svg>
              </a>
              <a
                href="/"
                className="transition-colors duration-300 hover:text-gray-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.99,3.66,9.12,8.44,9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.51,1.49-3.89,3.77-3.89c1.09,0,2.23,0.2,2.23,0.2v2.45h-1.26c-1.24,0-1.63,0.77-1.63,1.56v1.88h2.78l-0.44,2.89h-2.34v6.99C18.34,21.12,22,16.99,22,12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-white sm:flex-row">
          <p className="text-sm">
            © 2023 ZFC Dentistry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
