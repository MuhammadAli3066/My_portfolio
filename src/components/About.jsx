import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-50 text-slate-900 py-10 sm:py-12 lg:py-16"
    >
      <div className="container px-4 flex flex-col lg:flex-row items-center lg:items-center max-w-5xl mx-4 lg:mx-auto">
        {/* Round Image */}
        <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-slate-300 mb-6 lg:mb-0 flex-shrink-0 transition-transform transform hover:scale-105">
          <img
            src="/myportfoliopic.png"
            alt="Muhammad Ali"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="lg:ml-8 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-center lg:text-left text-slate-800">
            About Me
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-justify max-w-2xl mx-auto mb-4 sm:mb-6 lg:mx-0 text-slate-700">
            An accomplished Frontend Developer with a good grip in developing
            responsive, high-performance user interfaces Websites using ReactJS,
            Redux, Tailwind CSS, and other modern technologies. Adept at
            optimizing user experiences through seamless UI design, efficient
            functionality, and performance enhancements. Proven ability to lead
            cross-functional teams in delivering scalable solutions that boost
            user engagement, support business growth, and drive operational
            excellence. Expertise in transforming complex requirements into
            efficient code while maintaining a strong focus on performance,
            scalability, and user-centric design. Dedicated to continuous
            learning and applying cutting-edge techniques to solve real-world
            challenges and create innovative solutions.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-justify max-w-2xl mx-auto text-slate-700">
            When I'm not coding, I enjoy exploring new technologies, working on
            personal projects, and contributing to open-source communities. My
            goal is to leverage my skills and expertise to help businesses and
            individuals bring their digital visions to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
