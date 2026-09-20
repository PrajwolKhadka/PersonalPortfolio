import React, { useState } from "react";
// import Not from "../assets/identity.png"
import { motion } from "framer-motion";
// import { Document, Page } from 'react-pdf';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  image: string;
  file: string;
}

interface BlogThumb {
  image: string;
}

const blogThumb: BlogThumb = {
  image: "/thumbnails/image.png",
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Education, Fear & Technology",
    summary: "A in-depth look at how education systems can adapt to technological advancements while addressing fears.",
    image: "/thumbnails/image.png",
    file: "/blogs/EFT.pdf",
  },
  {
    id: 2,
    title: "Sahachari",
    summary: "An intelligent legal companion for survivors of domestic violence in Nepal.",
    image: "/thumbnails/sahachari.png",
    file: "/blogs/sahachari.pdf",
  },
];

const Blog: React.FC = () => {
  const [selectedPdf, setSelectedPdf] = useState<BlogPost | null>(null);
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
          Reports and Blogs
        </h1>
      </div>

      <div className="px-4 sm:px-8 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {blogPosts.map((pdf) => (
            <button
              type="button"
              key={pdf.id}
              className="w-full bg-black text-white cursor-pointer rounded-lg shadow-lg overflow-hidden text-left transition-transform hover:scale-[1.03]"
              onClick={() => setSelectedPdf(pdf)}
            >
              <img
                src={pdf.image}
                alt="Blog thumbnail"
                className="w-full aspect-square object-cover"
              />
              <p className="font-semibold text-sm sm:text-base p-3 text-center break-words">
                {pdf.title}
              </p>
            </button>
          ))}
        </div>

        {selectedPdf && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-3 sm:p-6"
            onClick={() => setSelectedPdf(null)}
          >
            <div
              className="bg-white/10 backdrop-blur-2xl border border-white/20 shadow-xl rounded-2xl p-4 sm:p-6 max-w-5xl w-full max-h-[95vh] overflow-auto bg-gradient-to-br from-white/20 via-white/10 to-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                {selectedPdf.title}
              </h2>
              <div className="w-full h-[60vh] sm:h-[70vh]">
                <iframe
                  src={selectedPdf.file}
                  width="100%"
                  height="100%"
                  className="border-0"
                  title={selectedPdf.title}
                ></iframe>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  className="px-4 py-2 bg-white text-red-500 rounded hover:bg-red-600 hover:text-white transition"
                  onClick={() => setSelectedPdf(null)}
                >
                  Close
                </button>
                {/* Mobile browsers (especially iOS Safari) often only show page 1 of a PDF in an iframe */}
                <a
                  href={selectedPdf.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-gray-900 rounded hover:bg-gray-200 transition"
                >
                  Open in new tab
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Blog;