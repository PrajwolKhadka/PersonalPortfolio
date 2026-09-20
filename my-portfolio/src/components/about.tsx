import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/profile.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import Chatbot from "../components/chatbot.tsx";

const About: React.FC = () => {
  return (
    <motion.section
      className="flex flex-col lg:flex-row items-center-safe justify-between gap-10 lg:gap-12 px-5 sm:px-10 md:px-16 lg:px-20 py-8 md:py-10 overflow-hidden md:min-h-[85vh]"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Text column */}
      <div className="w-full lg:flex-1 space-y-6 sm:space-y-7 text-left">
        <h1
          className="text-4xl sm:text-5xl md:text-[4rem] text-white font-bold"
          style={{ fontFamily: "Poltawski Nowy, serif" }}
        >
          About Me
        </h1>
        <p
          className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl text-left sm:text-justify"
          style={{ fontFamily: "Merriweather, serif" }}
        >
          I’m <span className="text-white font-semibold">Prajwol Khadka</span>, a
          passionate software developer and VR enthusiast. I love building immersive,
          interactive experiences that merge technology and education to make
          learning more engaging and impactful.
        </p>
        <div>
          <h2
            className="text-xl sm:text-2xl font-semibold text-white mb-3"
            style={{ fontFamily: "Poltawski Nowy, serif" }}
          >
            Education
          </h2>
          <ul
            className="space-y-2 text-sm sm:text-base text-gray-300"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            <li>
              <span className="font-semibold text-white">Secondary School</span> —{" "}
              <a href="https://kavya.edu.np/" target="_blank" rel="noopener noreferrer" className="font-medium">
                Kavya School
              </a>
            </li>
            <li> Graduated: 2020</li>
            <li>
              <span className="font-semibold text-white">High School(+2)</span> —{" "}
              <a href="https://ccrc.edu.np/" target="_blank" rel="noopener noreferrer" className="font-medium">
                CCRC
              </a>
            </li>
            <li> Graduated: 2023</li>
            <li>
              <span className="font-semibold text-white">BSc (Hons) in Computing</span> —{" "}
              <a href="https://softwarica.edu.np/" target="_blank" rel="noopener noreferrer" className="font-medium">
                Softwarica College of IT & E-commerce
              </a>
            </li>
            <li> Expected Graduation: 2026</li>
          </ul>
        </div>
        <div>
          <h2
            className="text-xl sm:text-2xl font-semibold text-white mb-3"
            style={{ fontFamily: "Poltawski Nowy, serif" }}
          >
            Skills & Interests
          </h2>
          <p
            className="text-sm sm:text-base text-gray-300 max-w-2xl"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            React, Node.js, Python, PostgreSQL, Unity (VR Development), Data Analysis, and Educational Technology Design.
          </p>
        </div>
      </div>

      {/* Photo + social links */}
      <div className="w-full lg:flex-1 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center xl:ml-20"
        >
          <div className="relative p-2 rounded-xl bg-gray-800 shadow-2xl shadow-teal-500/10">
            <div className="absolute inset-0 rounded-xl border-2 border-teal-500 opacity-40"></div>
            <img
              src={myPhoto}
              alt="Prajwol Khadka - VR/Software Engineer"
              className="relative w-[240px] h-[320px] sm:w-[300px] sm:h-[390px] md:w-[340px] md:h-[440px] lg:w-[360px] lg:h-[460px] xl:w-[380px] xl:h-[480px] max-w-full object-cover rounded-xl"
            />
          </div>
          <div className="flex items-center justify-center gap-6 pt-6">
            <a
              href="https://www.linkedin.com/in/prajwol-khadka-12ba6b320/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <img
                src={linkedin}
                alt="LinkedIn / Prajwol Khadka"
                className="h-10 md:h-12 w-auto"
              />
            </a>
            <a
              href="https://github.com/PrajwolKhadka"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <img
                src={github}
                alt="GitHub / Prajwol Khadka"
                className="h-10 md:h-12 w-auto"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;