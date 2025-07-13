import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-300 py-6 sm:py-8 lg:py-10">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-slate-200">Connect with Me</h2>
            <p className="text-base sm:text-lg text-slate-400">
              Feel free to reach out via email or connect with me on social media.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/muhammadali80ba401b5"
              className="text-slate-400 hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/MuhammadAli3066"
              className="text-slate-400 hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Muhammad Ali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
