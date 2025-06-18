import React from "react";

const Header = () => {
  return (
    <header className="bg-black  text-white shadow-md p-4 sm:p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-semibold">Muhammad Ali</h1>
        <nav>
          <ul className="flex flex-row space-x-3 md:space-x-4 lg:space-x-4">
            <li>
              <a
                href="#about"
                className="text-white hover:text-slate-400 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-white hover:text-slate-400 transition duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white hover:text-slate-400 transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-slate-400 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
