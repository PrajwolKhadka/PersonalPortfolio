import React from "react";
import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "../header.tsx";
const Home = lazy(() => import("./home.tsx"));
const About = lazy(() => import("./about.tsx"));
const Certifications = lazy(() => import("./certifications.tsx"));
const Media = lazy(() => import("./media.tsx"));
const Project = lazy(() => import("./projects.tsx"));
const Blog = lazy(() => import("./blogs.tsx"));
import Chatbot from "../components/chatbot.tsx";

const Parent: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      {/* overflow-x-clip is a safety net so no page can ever cause sideways scrolling on mobile */}
      <main className="w-full overflow-x-clip">
        <AnimatePresence mode="wait">
          <Suspense
            fallback={<div className="text-white text-center mt-20">Loading...</div>}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/media" element={<Media />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/chat" element={<Chatbot/>}/>
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      {/* <Chatbot/> */}
    </>
  );
};
export default Parent;