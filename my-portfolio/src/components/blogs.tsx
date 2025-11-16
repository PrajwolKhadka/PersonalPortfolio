import React, { useState } from "react";
// import Not from "../assets/identity.png"
import { motion } from "framer-motion";
// import { Document, Page } from 'react-pdf';

interface BlogPost {
    id: number;
    title: string;
    summary: string;
    file: string;
}

interface BlogThumb{
  image: string;
}

const blogThumb : BlogThumb={
  image: "/thumbnails/image.png"
}

const blogPosts: BlogPost[] = [
    {
    id: 1,
    title: "Education, Fear & Technology",
    summary: "A in-depth look at how education systems can adapt to technological advancements while addressing fears.",
    file: "/blogs/EFT.pdf"
    }
];

const Blog: React.FC=()=>{
    const [selectedPdf, setSelectedPdf] = useState<BlogPost | null>(null);
    return(
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
      <div className="p-8 text-center">
      <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-5 gap-15 justify-items-center">
        {blogPosts.map((pdf) => (
          <div
            key={pdf.id}
            className="w-40 h-40 bg-black text-white items-center justify-center cursor-pointer rounded-lg shadow-lg "
            onClick={() => setSelectedPdf(pdf)}
          >
            <img
              src={blogThumb.image}
              alt="Blog thumbnail"
              className="w-40 h-40 object-cover rounded-lg shadow-lg"
            />

            <p className="font-semibold">{pdf.title}</p>
          </div>
        ))}
      </div>

      {selectedPdf && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelectedPdf(null)}
          >
            <div
              // className="bg-white p-4 rounded-lg max-w-5xl w-full max-h-[100vh] overflow-auto"
              className=" bg-white/10backdrop-blur-2xl border border-white/20 shadow-xl rounded-2xl p-6 max-w-5xl w-full max-h-[100vh] overflow-auto bg-gradient-to-br from-white/20 via-white/10 to-transparent" 
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4 text-white">{selectedPdf.title}</h2>
              <div className="w-full h-[600px]">
                <iframe
                  src={selectedPdf.file}
                  width="100%"
                  height="100%"
                  className="border-0"
                  title={selectedPdf.title}
                ></iframe>
              </div>

              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                onClick={() => setSelectedPdf(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.section>
    );
}

export default Blog;