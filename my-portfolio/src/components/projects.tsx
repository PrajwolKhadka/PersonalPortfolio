import React from "react";
import { motion } from "framer-motion";

interface project {
  name: string;
  desc: string;
  link: string;
  website: string;
  image: string;
}

const projects: project[] = [
  {
    name: "XVRments: VR-based Chemistry Lab Simulation",
    desc: "Experience chemistry like never before with an immersive learning experience made prioritizing safe and feasible learning experience with four different experiments, summarization, and a Quiz to evaluate learning outcomes. Made using Unity Engine, Scripted using C# and Backend using Django and PostgresSQL.",
    link: "https://www.youtube.com/embed/Jx3FyqrfnKo",
    website:"",
    image: "/projects/xvr.png",
  },
    {
  name: "KaryaYojana: Online Job Portal",
  desc: "A full-stack web platform designed to connect Employers and Job Seekers through three interconnected portals — Job Seeker, Employer, and Admin. It includes scalable features such as a CV Builder and the ability to send CVs directly to employers via email. Built using React, Node.js, Express.js, and PostgreSQL.",
  link: "https://github.com/b-shhhh/KaryaYojana",
  website:"",
  image: "/projects/Apply.png",
},
   {
    name: "ByayamKendra: Online Workout Suggestion Platform",
    desc: "A fitness-focused web application designed to generate personalized workout plans and track user progress. The app suggests exercises based on user data such as height, weight, age, and gender, and integrates a Nepali diet plan for localized fitness guidance. Built using React, Node.js, Express.js, and PostgreSQL.",
    link: "https://github.com/PrajwolKhadka/ByayamKendra",
    website:"",
    image: "/projects/work.png",
  },
     {
    name: "Personal Portfolio",
    desc: "A responsive personal portfolio website built to showcase projects, certifications, and professional achievements. Designed with a modern UI using React and Tailwind CSS, featuring smooth animations with Framer Motion and deployed on a custom domain using Netlify. The site highlights academic and technical accomplishments through a structured, minimal design.",
    link: "https://github.com/PrajwolKhadka/PersonalPortfolio",
    website:"https://prajwolkhadka.com.np",
    image: "/projects/port.png",
  },
     {
    name: "ByayamSetu: Fitness Companion UI/UX",
    desc: "A mobile fitness companion app concept focused on enhancing workout consistency and user engagement. Designed as part of a UI/UX project, it features intuitive navigation, personalized workout insights, and a clean, minimal interface optimized for daily usability. The design was created using Figma, emphasizing accessibility and visual balance.",
    link: "https://www.figma.com/proto/PA9WRHco8mm3Qd0SjZVYuZ/ByayamSetu?page-id=0%3A1&node-id=1-2062&starting-point-node-id=1%3A2062&t=Y0tJvXEiFDUnNsWO-1",
    website:"",
    image: "/projects/ui.png",
  },
     {
    name: "CarSubhida: Car Rental System",
    desc: "A basic Java-based desktop application made during my first year for managing car rentals, designed to handle bookings, vehicle inventory, and customer data efficiently. Built as an academic project, it demonstrates object-oriented programming principles, modular design, and basic CRUD operations to simulate a real-world car rental workflow.",
    link: "https://github.com/SparshapaudelB35/CarSubhida-35A-4",
    website:"",
    image: "/projects/car.png",
  },
     {
    name: "KataGarne?: Event Booking System",
    desc: "A simple Python-based desktop application designed to manage event bookings. Built as an early-semester academic project, it demonstrates foundational programming skills, basic CRUD operations, and user interface design using Python.",
    link: "https://github.com/PrajwolKhadka/Kata-GARNE-",
    website:"",
    image: "/projects/event.png",
  },
];

const Project: React.FC = () => {
  return (
    <div className="py-8 px-10 min-h-screen text-white">
       <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-4"
        style={{ fontFamily: "Poltawski Nowy, serif" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        Projects
      </motion.h1>

      {/* Animated page description */}
      <motion.p
        className="mb-10 text-sm sm:text-base text-gray-300"
        style={{ fontFamily: "Merriweather, serif" }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{duration: 0.6, ease: "easeInOut" }}
      >
        A collection of projects highlighting my journey in software development and innovation.
      </motion.p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3=8xl mx-auto">
  {projects.map((proj, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="bg-gray-50 text-black flex flex-row items-center gap-4 shadow-md rounded-2xl p-5 hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={proj.image}
        alt={proj.name}
        className="w-45 h-36 object-cover rounded-xl flex-shrink-0"
      />
      <div className="flex flex-col text-left">
        <h2
          className="text-xl font-semibold"
          style={{ fontFamily: "Poltawski Nowy, serif" }}
        >
          {proj.name}
        </h2>
        <p
          className="text-gray-600 mt-1 text-sm text-justify"
          style={{ fontFamily: "Poltawski Nowy, serif" }}
        >
          {proj.desc}
        </p>

        <div className="mt-2 grid gap-2">
          <a
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium"
            style={{ fontFamily: "Poltawski Nowy, serif" }}
          >
            View Project
          </a>
          {proj.website && (
            <a
              href={proj.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium"
              style={{ fontFamily: "Poltawski Nowy, serif" }}
            >
              View Website
            </a>
          )}
        </div>
      </div>
    </motion.div>
      ))}
    </div>
   </div>
      );
    };

export default Project;
