import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./home.tsx"
import Navbar from "../header.tsx";
const Parent: React.FC= () =>{
    return(
        <>
            <Navbar/>
            <Routes>
        <Route path="/" element={<Home />} />             
        {/* <Route path="/about" element={<About />} />       
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/certifications" element={<Certifications />} />  */}
      </Routes>
    </>
    );
}
export default Parent;