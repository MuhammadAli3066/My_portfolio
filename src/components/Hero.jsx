import React, { useState, useEffect } from "react";
import { LiaLocationArrowSolid } from "react-icons/lia";

const Hero = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-slate-700 to-slate-100 text-slate-900 py-6 sm:py-16 lg:py-12">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-50">
          Innovative Frontend Web Developer
        </h2>
        <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-xl mx-auto text-slate-50">
          Crafting user-friendly and responsive websites with a passion for
          innovation.
        </p>
        <a
          href="#contact"
          className="bg-slate-800 text-slate-50 py-2 px-6 rounded-md hover:bg-slate-600 transition duration-300 text-sm sm:text-base lg:text-lg"
        >
          Contact Me
        </a>
      </div>
      <a
        href="#top"
        className={`fixed z-50 bottom-6 right-6 hover:scale-110 bg-slate-600 text-slate-300 rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out transform ${
          showScrollButton ? "" : "translate-x-24"
        }`}
      >
        <LiaLocationArrowSolid className="text-xl font-bold" />
      </a>
    </section>
  );
};

export default Hero;
