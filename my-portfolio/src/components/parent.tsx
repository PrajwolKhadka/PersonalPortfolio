import React from "react";
import { Suspense,lazy } from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "../header.tsx";
const Home = lazy(() => import("./home.tsx"));
const About = lazy(() => import("./about.tsx"));
const Certifications = lazy(() => import("./certifications.tsx"));
const Media = lazy(() => import("./media.tsx"));
const Parent: React.FC= () =>{
    const location= useLocation();
    return(
         <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Suspense fallback={<div className="text-white text-center mt-20">Loading...</div>}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/media" element={<Media />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
    );
}
export default Parent;