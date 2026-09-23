import React from "react";
import myPhoto from "../assets/profile.png";

const Home: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16 px-5 sm:px-8 md:px-16 xl:px-24 2xl:px-32 py-10 md:py-12 overflow-hidden md:min-h-[85vh]">
      {/* Text */}
      <div className="w-full lg:flex-1 text-center lg:text-left space-y-6 max-w-3xl">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[8rem] text-white font-bold leading-tight break-words"
          style={{ fontFamily: "Poltawski Nowy, serif" }}
        >
          Hello, I'm{" "}
          <br className="hidden md:block" />
          Prajwol Khadka
        </h1>

        <p
          className="mt-4 text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0"
          style={{ fontFamily: "Merriweather, serif" }}
        >
          Crafting Software | Immersive VR Experiences | Empowering Learning
        </p>
      </div>

      {/* Image */}
      <div className="flex justify-center lg:flex-1">
        <div className="relative p-3 rounded-2xl bg-gray-800 shadow-2xl shadow-teal-500/10 hover:shadow-teal-400/20 transition-all duration-500">
          <div className="absolute inset-0 rounded-2xl border border-teal-500/50"></div>
          <img
            src={myPhoto}
            alt="Prajwol Khadka - VR/Software Engineer"
            className="relative w-[240px] sm:w-[280px] md:w-[340px] lg:w-[360px] xl:w-[400px] max-w-full h-auto object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;