import React, { useState, useEffect} from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

interface Certificate {
  name: string;
  institute: string;
  link: string;
  date: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    name: "Career Essentials in Generative AI by Microsoft and Linkedin",
    institute: "Microsoft",
    link: "https://www.linkedin.com/learning/certificates/9b4585985382987de0506263843e44b6141002ae4a1891eb9a5aeb24fec42847?u=2039756",
    date: "Sep 2025",
    image: "/certificates/microsoftAI.png",
  },
  {
    name: "Career Essentials in Software Development by Microsoft and Linkedin",
    institute: "Microsoft",
    link: "https://www.linkedin.com/learning/certificates/cf05d25ff12da7b431b5986f5bc65444649f1f8b45bd9168f4f2fa6ffe26644c?u=2039756",
    date: "Nov 2025",
    image: "/certificates/sdmicrosoft.png",
  },
  {
    name: "Generative AI Fundamentals in Python Path",
    institute: "Dataquest",
    link: "https://app.dataquest.io/view_cert/82PR0UWJ1PIOZ1KN9CI1",
    date: "Oct 2025",
    image: "/certificates/genaipath.png",
  }, 
  {
    name: "Fundamentals of Python and Generative AI",
    institute: "Dataquest",
    link: "https://app.dataquest.io/view_cert/Q2EA1L8EKVJYN3FHJ7H6",
    date: "Sep 2025",
    image: "/certificates/fundamentals.png",
  },
  {
    name: "Governance and Professionalism",
    institute: "IOA",
    link: "",
    date: "Nov 2025",
    image: "/certificates/governance.png",
  },
  {
    name: "Communication",
    institute: "IOA",
    link: "",
    date: "Nov 2025",
    image: "/certificates/communication.png",
  },
  {
    name: "Advancing the Digital Economy for Sustainable Growth in Asia",
    institute: "ADBInstitute",
    link: "https://elearning-adbi.org/certificate-verifier/?code=140740-176-111-9367",
    date: "Oct 2025",
    image: "/certificates/adbi.png",
  },
  {
    name: "Intermediate Python and APIs",
    institute: "Dataquest",
    link: "https://app.dataquest.io/verify_cert/1YXSX8MP9AYPT6AKCP1F/",
    date: "Oct 2025",
    image: "/certificates/inpyapi.png",
  },
  {
    name: "APIs and Web Scraping for AI Applications",
    institute: "Dataquest",
    link: "https://app.dataquest.io/verify_cert/0J0FCDKL2FJGJ6G6WLV0/",
    date: "Oct 2025",
    image: "/certificates/webscrapai.png",
  },
   {
    name: "Understanding Augmented and Virtual Reality: An Introduction",
    institute: "Linkedin Learning",
    link: "https://www.linkedin.com/learning/certificates/2ad17926d15db56615795ab1273f9b0ae8c50afda304faaa6b7680eca2bfe445?u=2039756",
    date: "Nov 2025",
    image: "/certificates/image.png",
  },
  {
    name: "AI Aware Certificate",
    institute: "Intel",
    link: "https://ai-for-all.in/#/badge?id=U2FsdGVkX1s1L2a3S4h8u9x7PGkXetWSe2Mk5KFzKggH9TJLE6OsAjBK0W0RZcmZ7WLp1L2u3SFoA9",
    date: "Oct 2025",
    image: "/certificates/aiaware.png",
  },
  {
    name: "AI Appreciate Certificate",
    institute: "Intel",
    link: "https://ai-for-all.in/#/badge?id=U2FsdGVkX1958wmKvOc07bL4VwUvB82bqGSz1IFs1L2a3S4hFJdt796tWGP3HMpzbCp1L2u3S75YD3",
    date: "Oct 2025",
    image: "/certificates/aiapp.png",
  },
  {
    name: "Python Fundamentals for Web Development Program",
    institute: "Dataquest",
    link: "https://app.dataquest.io/verify_cert/3798S4SXYATL3T7FHN0N/",
    date: "Oct 2025",
    image: "/certificates/wdp.png",
  },
  {
    name: "Python Fundamentals for Web Development Program",
    institute: "Dataquest",
    link: "https://app.dataquest.io/verify_cert/3798S4SXYATL3T7FHN0N/",
    date: "Oct 2025",
    image: "/certificates/wdp.png",
  },
  {
    name: "Python Fundamentals for Web Development Program",
    institute: "Dataquest",
    link: "https://app.dataquest.io/verify_cert/3798S4SXYATL3T7FHN0N/",
    date: "Oct 2025",
    image: "/certificates/wdp.png",
  },
  {
    name: "Tooling Essentials for Python Users",
    institute: "Dataquest",
    link: "https://app.dataquest.io/verify_cert/YA7J5TB25X19LD0XG3SK/",
    date: "Oct 2025",
    image: "/certificates/tooling.png",
  },
  {
    name: "Intermediate Python",
    institute: "Dataquest",
    link: "https://app.dataquest.io/view_cert/MWQEH9NHH3AWIH28BG1U",
    date: "Sep 2025",
    image: "/certificates/inpy.png",
  },
  {
    name: "AI for Beginners",
    institute: "HPLife",
    link: "https://www.life-global.org/certificate/4ee8aafa-3693-404b-a44f-0acd144d46a6",
    date: "Sep 2025",
    image: "/certificates/hpAI.png",
  },
  {
    name: "Introduction to Python Programming",
    institute: "Dataquest",
    link: "https://www.coursera.org/certificate/ml",
    date: "Aug 2025",
    image: "/certificates/intropy.png",
  },
  {
    name: "Introduction to Git and Version Control",
    institute: "Dataquest",
    link: "https://app.dataquest.io/view_cert/3FHFB5ZPEXYJSNU6TVI0",
    date: "Sep 2025",
    image: "/certificates/git.png",
  },
  {
    name: "SEO",
    institute: "HubSpot Academy",
    link: "https://app-na2.hubspot.com/academy/achievements/vwmlnz5y/en/1/prajwol-khadka/seo",
    date: "Aug 2025",
    image: "/certificates/seo.png",
  },
  {
    name: "The Digital Teacher",
    institute: "UNESCO MGIEP",
    link: "https://www.framerspace.com/verifyCertificate?name=Prajwol%20Khadka&vcode=2c555088-cec8-4bf5-b6dd-85c7f3f16cfe",
    date: "Sep 2025",
    image: "/certificates/teach.png",
  },
  {
    name: "Agile Project Management",
    institute: "HPLife",
    link: "https://www.life-global.org/certificate/4ee8aafa-3693-404b-a44f-0acd144d46a6",
    date: "Sep 2025",
    image: "/certificates/agile.png",
  },
  {
    name: "AI Chatbots",
    institute: "Dataquest",
    link: "https://www.coursera.org/certificate/ml",
    date: "Aug 2025",
    image: "/certificates/chandra.png",
  },
  {
    name: "AI Fundamentals",
    institute: "Data Camp",
    link: "https://www.datacamp.com/skill-verification/AIF0022077527728",
    date: "Aug 2025",
    image: "/certificates/aifundamentals.png",
  },
  {
    name: "Data Literacy",
    institute: "Data Camp",
    link: "https://www.datacamp.com/skill-verification/DL0033501861677",
    date: "Oct 2025",
    image: "/certificates/dl.png",
  },
  {
    name: "Google Sheets",
    institute: "Google Cloud",
    link: "https://www.cloudskillsboost.google/public_profiles/55d89c23-ad45-4a5b-a1b1-a8dde96584b3/badges/12568430",
    date: "Nov 2024",
    image: "/certificates/google.png",
  },
  {
    name: "IOA Membership Certificate",
    institute: "Institute of Analytics",
    link: "",
    date: "Jun 2025",
    image: "/certificates/IOA.png",
  },
];


const Certifications: React.FC = () => {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("cert-container");
    if (container) {
      const card = container.querySelector("div");
      if (!card) return;
      const cardWidth = (card as HTMLElement).offsetWidth + 24;
      container.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
    }
  };

  const openModal = (index: number) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);
  const prevModal = () =>
    setModalIndex((prev) => (prev !== null ? (prev === 0 ? certificates.length - 1 : prev - 1) : null));
  const nextModal = () =>
    setModalIndex((prev) => (prev !== null ? (prev === certificates.length - 1 ? 0 : prev + 1) : null));

   useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalIndex !== null) {
        if (e.key === "ArrowLeft") prevModal();
        if (e.key === "ArrowRight") nextModal();
        if (e.key === "Escape") closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalIndex]);
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="px-6 sm:px-10 py-8 sm:py-12 text-center sm:text-left">
        <h1
          className="text-white font-bold text-3xl sm:text-4xl mb-2"
          style={{ fontFamily: "Poltawski Nowy, serif" }}
        >
          Proof of Learning
        </h1>
        <p
          className="text-gray-300 text-sm sm:text-base"
          style={{ fontFamily: "Merriweather, serif" }}
        >
          Every certificate tells a story of dedication and growth.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full py-8 px-4 sm:px-6 lg:px-10">
        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-40 -translate-y-1/2 z-10 p-2 sm:p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-40 -translate-y-1/2 z-10 p-2 sm:p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700"
        >
          <FaChevronRight />
        </button>

        {/* Certificates */}
        <div
          id="cert-container"
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar px-2"
        >
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="min-w-[220px] sm:min-w-[250px] lg:min-w-[280px] bg-gray-900 text-white rounded-xl p-4 flex flex-col items-center snap-start transition-transform hover:scale-105"
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-36 sm:h-40 lg:h-44 object-contain rounded-md mb-4 cursor-pointer"
                onClick={() => openModal(idx)}
              />
              <h3
                className="text-base sm:text-lg font-semibold text-center break-words max-w-[220px]"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                {cert.name}
              </h3>
              <p
                className="text-xs sm:text-sm text-gray-400"
                style={{ fontFamily: "'Doto', sans-serif" }}
              >
                {cert.institute}
              </p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-xs sm:text-sm underline mt-1"
                >
                  Credential
                </a>
              )}
              <p className="text-xs sm:text-sm text-gray-500 mt-1">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 p-4">
          <button
            className="absolute top-5 right-5 text-white text-2xl p-2 hover:text-gray-300"
            onClick={closeModal}
          >
            <FaTimes />
          </button>
          <button
            className="absolute left-5 text-white text-3xl p-2 hover:text-gray-300"
            onClick={prevModal}
          >
            <FaChevronLeft />
          </button>
          <button
            className="absolute right-5 text-white text-3xl p-2 hover:text-gray-300"
            onClick={nextModal}
          >
            <FaChevronRight />
          </button>
          <h2 className="text-2xl flex font-bold text-white mb-4 pr-10" style={{ fontFamily: "Merriweather, serif" }} >{certificates[modalIndex].name}</h2>
          <img
            src={certificates[modalIndex].image}
            alt={certificates[modalIndex].name}
            className="max-h-[80vh] max-w-[90vw] sm:max-h-[85vh] sm:max-w-[85vw] object-contain rounded-lg shadow-lg"
          />
        </div>
      )}
    </motion.section>
  );
};

export default Certifications;
