import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-50 text-slate-900 py-8 sm:py-10 lg:py-12"
    >
      <div className="container mx-auto px-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 text-center text-slate-800">
          Contact Me
        </h2>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="mb-8 lg:mb-0">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-slate-800">
              Contact Information
            </h3>
            <ul className="list-none space-y-4">
              <li className="text-base sm:text-lg flex items-center space-x-2">
                <FaEnvelope className="text-slate-700" />
                <span className="font-medium text-slate-700"> Email: </span>
                <a
                  href="mailto:alikhan3066@gmail.com"
                  className="text-slate-600 hover:text-slate-800 transition duration-300"
                >
                  alikhan202202032@gmail.com
                </a>
                
              </li>
              <li className="text-base sm:text-lg flex items-center space-x-2">
                <FaPhoneAlt className="text-slate-700" />
                <span className="font-medium text-slate-700"> Phone: </span>
                <a
                  href="tel:+923330476538"
                  className="text-slate-600 hover:text-slate-800 transition duration-300"
                >
                  +92 333 0476538 / +971 545771236
                </a>
              </li>
              <li className="text-base sm:text-lg flex items-center space-x-2">
                <FaLinkedin className="text-slate-700" />
                <span className="font-medium text-slate-700"> LinkedIn: </span>
                <a
                  href="https://www.linkedin.com/in/muhammadali80ba401b5"
                  className="text-blue-800 hover:text-blue-900 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Muhammad Ali
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-slate-800">
              Location
            </h3>
            <p className="text-base sm:text-lg flex items-center space-x-2 text-slate-700">
              <FaMapMarkerAlt className="text-slate-700" />
              <span> Qadeer Garden, House 51, Street A,, Distict Islamabad</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
