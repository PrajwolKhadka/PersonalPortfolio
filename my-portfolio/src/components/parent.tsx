import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./home.tsx"
import Navbar from "../header.tsx";
import About from "./about.tsx";
import Certifications from "./certifications.tsx";
const Parent: React.FC= () =>{
    const location= useLocation();
    return(
        <>
        <Navbar/>
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />             
        <Route path="/about" element={<About />} />       
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </AnimatePresence>
    </>
    );
}
export default Parent;