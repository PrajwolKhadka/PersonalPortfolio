// import React from "react";
// import myPhoto from "../assets/profile.png"; 

// const Home: React.FC = () => {
//   return (
//     <section className="min-h-screen flex flex-col md:flex-row items-start justify-between px-10 md:px-27 py-13"> 
//       <div className="flex-1 text-center md:text-left space-y-7 mb-12 md:mb-0">
//         <p className="text-xl md:text-2xl text-gray-400 font-medium tracking-wider">
//         </p>

//         <h1 className="text-7xl md:text-[8.5rem]  text-white font-bold" style={{ fontFamily: 'Poltawski Nowy, serif' }}>
//         Hello, I'm Prajwol Khadka
//         </h1>

//         <p className="mt-4 text-lg text-gray-300" style={{fontFamily: 'Merriweather, serif'}}>
//        Crafting Software | Immersive VR Experiences | Empowering Learning 
//         </p>
//       </div>
//       <div className="flex-1 flex justify-center mt-12 md:mt-0 ml-20">
//         <div className="relative p-2 rounded-xl bg-gray-800 shadow-2xl shadow-teal-500/10"> 
//           <div className="absolute inset-0 rounded-xl border-2 border-teal-500 opacity-40"></div> 
//           <img
//             src={myPhoto}
//             alt="Prajwol Khadka - VR/Software Engineer"
//             className="relative w-[320px] h-[420px] md:w-[380px] md:h-[480px] object-cover rounded-xl transform" 
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;

// import React from "react";
// import myPhoto from "../assets/profile.png";

// const Home: React.FC = () => {
//   return (
//    <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 py-10 md:py-16 lg:py-15 overflow-hidden md:min-h-[80vh]">

//       {/* Left side: Text */}
//       <div className="flex-1 text-center md:text-left space-y-7 mb-12 md:mb-0 max-w-xl">
//         <h1
//           className="text-5xl md:text-7xl lg:text-[8rem] text-white font-bold leading-tight"
//           style={{ fontFamily: "Poltawski Nowy, serif" }}
//         >
//           Hello, I'm <br className="hidden md:block" /> Prajwol Khadka
//         </h1>

//         <p
//           className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed"
//           style={{ fontFamily: "Merriweather, serif" }}
//         >
//           Crafting Software | Immersive VR Experiences | Empowering Learning
//         </p>
//       </div>

//       {/* Right side: Image */}
//       <div className="flex-1 flex justify-center md:justify-end">
//         <div className="relative p-2 rounded-xl bg-gray-800 shadow-2xl shadow-teal-500/10">
//           <div className="absolute inset-0 rounded-xl border-2 border-teal-500 opacity-40"></div>
//           <img
//             src={myPhoto}
//             alt="Prajwol Khadka - VR/Software Engineer"
//             className="relative w-[260px] h-[340px] md:w-[340px] md:h-[440px] lg:w-[420px] lg:h-[520px] object-cover rounded-xl transform"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;
import React from "react";
import myPhoto from "../assets/profile.png";

const Home: React.FC = () => {
  return (
    <section className="flex  items-center justify-center gap-12 xl:gap-16 px-6 md:px-16 lg:px-24 xl:px-32 py-12 md:py-10 overflow-hidden md:min-h-[85vh]">
      
      {/* Left side: Text */}
      <div className="flex-1 text-center lg:text-left space-y-6 max-w-3xl">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8rem] text-white font-bold leading-tight"
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

      {/* Right side: Image */}
      <div className="flex-1 flex justify-center">
        <div className="relative p-3 rounded-2xl bg-gray-800 shadow-2xl shadow-teal-500/10 hover:shadow-teal-400/20 transition-all duration-500">
          <div className="absolute inset-0 rounded-2xl border border-teal-500/50"></div>
          <img
            src={myPhoto}
            alt="Prajwol Khadka - VR/Software Engineer"
            className="relative w-[240px] sm:w-[280px] md:w-[340px] lg:w-[360px] xl:w-[400px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;


