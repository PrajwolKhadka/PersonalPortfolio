import React from "react";
import myPhoto from "../assets/profile2.jpeg";

const Home: React.FC = () => {
  return (
    <section className="min-h-screen flex items-start px-20 pt-10">
      {/* Left side: Text */}
      <div className="flex-1 pt-10">
        <h1 className="text-7xl md:text-[8.5rem]  text-white font-bold" style={{ fontFamily: 'Poltawski Nowy, serif' }}>
          Hello, I'm Prajwol Khadka
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Crafting Software | Immersive VR Experiences | Empowering Learning 
        </p>
      </div>

      {/* Right side: Photo */}
      <div className="flex-1 flex justify-center">
        <img
          src={myPhoto}
          alt="Prajwol Khadka"
           className="w-[500px] h-[580px] py-6"
        />
      </div>
    </section>
  );
};

export default Home;