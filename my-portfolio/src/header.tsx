import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import whatsapplogo from "./assets/whatsapp.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/project", label: "Projects" },
  { to: "/certifications", label: "Certifications" },
  { to: "/media", label: "Media Coverage" },
  { to: "/blogs", label: "Blogs" },
];

const dotoFont = { fontFamily: "'Doto', sans-serif" };

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close the mobile menu with Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav className="sticky top-0 left-0 w-full bg-gray-900/90 backdrop-blur-sm z-50">
      <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6">
        {/* Mobile / tablet: hamburger */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="lg:hidden -ml-2 p-2 text-2xl text-white"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-5 xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="text-white uppercase tracking-widest text-sm xl:text-base"
                style={dotoFont}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* WhatsApp */}
        <a
          href="https://wa.me/9841394638"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded transition-colors"
        >
          <img
            src={whatsapplogo}
            alt="WhatsApp"
            className="h-9 sm:h-11 w-auto"
          />
        </a>
      </div>

      {/* Mobile / tablet menu (overlays the page instead of pushing it down) */}
      {open && (
        <ul
          id="mobile-menu"
          className="lg:hidden absolute top-full left-0 w-full flex flex-col bg-gray-900/95 backdrop-blur-sm border-t border-white/10 px-6 py-2 shadow-lg"
        >
          {navLinks.map((link) => (
            <li key={link.to} className="border-b border-white/5 last:border-b-0">
              <Link
                to={link.to}
                className="block py-3 text-white uppercase tracking-widest text-sm"
                style={dotoFont}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;