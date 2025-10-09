import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface MediaItem {
  title: string;
  source?: string;
  type: "image" | "video" | "website";
  url?: string;
  thumbnail: string;
  date?: string;
  description?: string;
}

const media: MediaItem[] = [
  {
    title: "From Assignment to Innovation : VR Chemistry Lab Changing Classroomss",
    type: "video",
    url: "https://www.youtube.com/embed/NNokAFDUAvU?start=0",
    thumbnail: "/media/ictcover.jpg",
    date: "Sep 2025",
  },
  {
    title: "Tech-X 3.0: Innovation Showcase at Softwarica College",
    type: "video",
    url: "https://www.youtube.com/embed/4j9Qdg2VwWs?start=162",
    thumbnail: "/media/techxict.png",
    date: "Jul 2025",
  },
  {
    title: "EXPERIENCE CHEMISTRY LIKE NEVER BEFORE | CHEM LAB VR | SOFTWARICA COLLEGE | TECH X ELEVATE 2025",
    type: "video",
    url: "https://www.youtube.com/embed/Jx3FyqrfnKo?start=162",
    thumbnail: "/media/softwarica.png",
    date: "Jul 2025",
  },
  {
    title: "Softwarica Tech X: विद्यार्थीले बनाएको एआई रोबोटदेखि सेक्युरिटी एआई क्यामेरासम्मको प्रदर्शनी",
    type: "video",
    url: "https://www.youtube.com/embed/joaG0oAOZUU?start=195",
    thumbnail: "/media/techpana.png",
    date: "Jul 2024",
  },
   {
    title: "VR Chemistry Lab Demonstration at School",
    type: "image",
    thumbnail: "/media/demo.jpg",
  },
    {
    title: "VR Chemistry Lab Demonstration at TechX@Softwarica",
    type: "image",
    thumbnail: "/media/doc33.png",
  },
   {
    title: "VR Chemistry Lab Demonstration at School",
    type: "image",
    thumbnail: "/media/demo2.jpg",
  },
 
  {
    title: "Idea Pitching Session @Softwarica",
    type: "image",
    thumbnail: "/media/demo4.png",
  },
   {
    title: "Idea Pitching Session @Softwarica",
    type: "image",
    thumbnail: "/media/demo5.png",
  },
  {
    title: "VR Chemistry Lab Demonstration at TechX@Softwarica",
    type: "image",
    thumbnail: "/media/demo3.png",
  },
];

interface MediaCarouselProps {
  title: string;
  items: MediaItem[];
  onItemClick: (index: number) => void;
  startIndex: number;
}

const MediaCarousel: React.FC<MediaCarouselProps> = ({ title, items, onItemClick, startIndex }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const card = containerRef.current.querySelector("div:first-child"); 
    if (!card) return;
    const style = window.getComputedStyle(card as HTMLElement);
    const cardWidth = (card as HTMLElement).offsetWidth + 16; 
    
    containerRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
    <section className="mb-0 relative px-4 ">
      <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Poltawski Nowy, serif" }}>{title}</h2>

      {items.length > 0 && (
        <>
          <button
            onClick={() => scroll("left")}
            className="absolute -left-2 top-38 -translate-y-1/2 z-20 p-2 sm:p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 hidden sm:block"
            aria-label="Scroll Left"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-2 top-38 -translate-y-1/2 z-20 p-2 sm:p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 hidden sm:block"
            aria-label="Scroll Right"
          >
            <FaChevronRight />
          </button>
        </>
      )}

      <div
        ref={containerRef}
        className="flex overflow-x-auto space-x-7 gap-4 sm:gap-6 hide-scrollbar snap-x snap-mandatory scroll-smooth text-white" 
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onItemClick(startIndex + idx)}
            className="min-w-[250px] rounded-xl p-4 flex-shrink-0 flex flex-col items-center cursor-pointer snap-start"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h3 className="text-0xl font-normal text-center break-words max-w-[250px]" style={{ fontFamily: "Poltawski Nowy, serif" }} >{item.title}</h3>
            {item.date && <p className="text-sm text-gray-400 mt-1" style={{ fontFamily: "Poltawski Nowy, serif" }} >{item.date}</p>}
          </div>
        ))}
      </div>
    </section>
    </motion.section>
  );
};

const Modal: React.FC<{ item: MediaItem | null; onClose: () => void }> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4 ">
      <div className= "max-w-4xl w-full p-9">
        <button
          onClick={onClose}
          className="absolute top-6 right-10 text-white text-2xl hover:text-gray-400 z-10 p-2"
          aria-label="Close"
        >
          <FaTimes />
        </button>
        <div className="relative w-full">
          {item.type === "video" && item.url ? (
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={item.url}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : item.type === "image" ? (
            <img
              src={item.thumbnail}
              alt={item.title}
              loading="lazy"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
          ) : (
            <p className="text-white">Content type not supported for modal viewing yet.</p>
          )}
        </div>

        {item.title && (
          <h3 className="text-white text-lg font-semibold mt-4 text-center">{item.title}</h3>
        )}
      </div>
    </div>
  );
};


const Media: React.FC = () => {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const openModal = (index: number) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);

  const videos = media.filter((m) => m.type === "video");
  const images = media.filter((m) => m.type === "image");
  const websites = media.filter((m) => m.type === "website");
  let currentIndex = 0;
  const videoStartIndex = currentIndex;
  currentIndex += videos.length;

  const imageStartIndex = currentIndex;
  currentIndex += images.length;

  const websiteStartIndex = currentIndex;
  currentIndex += websites.length;
  return (
    <section className="px-6 md:px-16 lg:px-12 py-9 min-h-screen ">
      <h1 className="text-white font-bold text-3xl sm:text-4xl mb-10" style={{ fontFamily: "Poltawski Nowy, serif" }}>
        Media & Coverage
      </h1>

      {videos.length > 0 && (
        <>
          <MediaCarousel 
            title="YouTube Videos" 
            items={videos} 
            onItemClick={openModal} 
            startIndex={videoStartIndex}
          />
        </>
      )}
      
      {images.length > 0 && (
        <>
          <MediaCarousel 
            title="Images" 
            items={images} 
            onItemClick={openModal} 
            startIndex={imageStartIndex}
          />
        </>
      )}
      
      {websites.length > 0 && (
        <>
          <MediaCarousel 
            title="Websites" 
            items={websites} 
            onItemClick={openModal} 
            startIndex={websiteStartIndex}
          />
        </>
      )}
      <Modal 
        item={modalIndex !== null ? media[modalIndex] : null} 
        onClose={closeModal} 
      />
    </section>
  );
};

export default Media;