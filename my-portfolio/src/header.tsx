import React from "react"; 
import whatsapplogo from "./assets/whatsapp.png";
import { Link } from "react-router-dom";
const Navbar: React.FC= () => { 
    return( 
    <nav className=" px-6 py-0 flex justify-between sticky top-0 left-0 w-full"> 
    {/* Logo / Name */} {/* <div className="text-xl font-bold">Prajwol Khadka</div> */} {/* Navigation Links */} 
    <ul className=" flex space-x-8 items-center"> 
        <li> 
            <Link to="/" className="text-white uppercase tracking-widest"  style={{ fontFamily: "'Doto', sans-serif" }}> Home </Link> 
        </li> 
        <li> 
            <Link to="/about" className="text-white uppercase tracking-widest"  style={{ fontFamily: "'Doto', sans-serif" }}> About </Link> </li> 
        <li> 
            <a href="#projects" className="text-white uppercase tracking-widest"  style={{ fontFamily: "'Doto', sans-serif" }}> Projects </a> </li> 
        <li> 
            <Link to="/certifications" className="text-white uppercase tracking-widest"  style={{ fontFamily: "'Doto', sans-serif" }}> Certifications </Link> </li> 
         <li> 
            <Link to="#mediacoverage" className="text-white uppercase tracking-widest"  style={{ fontFamily: "'Doto', sans-serif" }}> Media Coverage </Link> </li>   
        </ul>
        <div className="ml-auto">
         <a href="https://wa.me/9841394638" 
            target="_blank" rel="noopener noreferrer" className=" px-3 py-1 rounded transition-colors" > <img src={whatsapplogo} alt="WhatsAppHandel" className="w-45 h-15"/> </a>
        </div>
         </nav> 
         );
         };
export default Navbar;