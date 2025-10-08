import React from "react";
import myPhoto from "../assets/profile.png"; 

const Home: React.FC = () => {
  return (
    <section className=" flex flex-col md:flex-row items-start justify-between px-10 md:px-27 py-13"> 
      <div className="flex-1 text-center md:text-left space-y-7 mb-12 md:mb-0">
        <p className="text-xl md:text-2xl text-gray-400 font-medium tracking-wider">
            Hello, I'm
        </p>

        <h1 className="text-7xl md:text-[8.5rem]  text-white font-bold" style={{ fontFamily: 'Poltawski Nowy, serif' }}>
        Hello, I'm Prajwol Khadka
        </h1>

        <p className="mt-4 text-lg text-gray-300" style={{fontFamily: 'Merriweather, serif'}}>
       Crafting Software | Immersive VR Experiences | Empowering Learning 
        </p>
      </div>
      <div className="flex-1 flex justify-center mt-12 md:mt-0 ml-20">
        <div className="relative p-2 rounded-xl bg-gray-800 shadow-2xl shadow-teal-500/10"> 
          <div className="absolute inset-0 rounded-xl border-2 border-teal-500 opacity-40"></div> 
          <img
            src={myPhoto}
            alt="Prajwol Khadka - VR/Software Engineer"
            className="relative w-[320px] h-[420px] md:w-[380px] md:h-[480px] object-cover rounded-xl transform" 
          />
        </div>
      </div>
    </section>
  );
};

export default Home;