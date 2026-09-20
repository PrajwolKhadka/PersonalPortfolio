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
    link: "https://www.youtube.com/watch?v=Jx3FyqrfnKo",
    website: "",
    image: "/projects/xvr.png",
  },
  {
    name: "AI Powered Adaptive Quiz System",
    desc: "An intelligent quiz platform that adapts to each user’s performance and provides personalized feedback using AI. The system dynamically adjusts question difficulty based on previous responses, enhancing learning efficiency. It also includes features like quiz creation, real-time scoring, and AI-generated explanations for incorrect answers.",
    link: "https://github.com/PrajwolKhadka/AI-powered-adaptive-quiz-system",
    website: "",
    image: "/projects/Apply21.png",
  },
  {
    name: "Global Superstore Sales Analysis",
    desc: "An interactive Power BI dashboard analyzing $3.9M in global retail sales across 8,031 orders, built to surface profitability trends, regional performance, and product-level insights. Applied data cleaning, DAX calculations, and exploratory analysis to transform raw transactional data into actionable insights, with a focus on storytelling through interactive business intelligence.",
    link: "https://github.com/PrajwolKhadka/Global-Sales-Analysis",
    website: "",
    image: "/projects/image.png",
  },
  {
    name: "DataWave Music: Customer Engagement & Churn Analysis",
    desc: "An IOA Datasprint winning project. A comprehensive data analysis project examining customer churn patterns and retention strategies for DataWave Music, a streaming platform serving global markets.",
    link: "https://github.com/PrajwolKhadka/DataSprint",
    website: "https://www.instagram.com/p/DVqLa0Dk2-M/",
    image: "/projects/datawave.png",
  },
  {
    name: "DataForGood Nepal Hackathon: Sahachari a legal companion platform for domestic violence victims",
    desc: "10 Hour hackathon winning project. An intelligent legal companion for survivors of domestic violence in Nepal",
    link: "https://github.com/softwarica-college-class/softwarica-hackathon-2026-bsc-in-error",
    website: "",
    image: "/projects/sahachari.png",
  },
  {
    name: "AI Powered Adaptive Quiz System -Android",
    desc: "An intelligent quiz platform that adapts to each user’s performance and provides personalized feedback using AI. The system dynamically adjusts question difficulty based on previous responses, enhancing learning efficiency. It also includes features like quiz creation, real-time scoring, and AI-generated explanations for incorrect answers.",
    link: "https://github.com/PrajwolKhadka/adaptive_quiz",
    website: "",
    image: "/projects/Apply21.png",
  },
  {
    name: "Bajagaja: Web-Based Virtual Instrument Player ",
    desc: "Interactive browser-based application for playing traditional and modern instruments virtually,showcasing web development and audio engineering skills. Built using Next.js for the frontend, Node.js and Express.js for the backend, and integrated with Web Audio API to create a responsive and immersive musical experience. The platform allows users to play various instruments using their keyboard or touch input, making music creation accessible to everyone.",
    link: "https://github.com/PrajwolKhadka/bajagaja",
    website: "https://bajagaja.vercel.app",
    image: "/projects/bajagaja.png",
  },
  {
    name: "Tenant Rent Reminder System",
    desc: "A web-based application designed to help landlords and property managers automatically remind tenants about upcoming rent payments, maintenance schedules, and lease renewals. The system ensures timely notifications through Whatsapp, reducing manual follow-ups and missed payments.",
    link: "https://github.com/PrajwolKhadka/TenantRentReminderSystem",
    website: "",
    image: "/projects/apply22.png",
  },
  {
    name: "Basic AI Chatbot",
    desc: "An intelligent chatbot designed to interact with users in natural language and provide personalized responses. It uses AI and NLP techniques to understand user queries, assist with common tasks, and deliver context-aware answers.",
    link: "https://github.com/PrajwolKhadka/AI_Chatbot",
    website: "",
    image: "/projects/apply23.png",
  },
  {
    name: "KaryaYojana: Online Job Portal",
    desc: "A full-stack web platform designed to connect Employers and Job Seekers through three interconnected portals — Job Seeker, Employer, and Admin. It includes scalable features such as a CV Builder and the ability to send CVs directly to employers via email. Built using React, Node.js, Express.js, and PostgreSQL.",
    link: "https://github.com/b-shhhh/KaryaYojana",
    website: "",
    image: "/projects/Apply.png",
  },
  {
    name: "ByayamKendra: Online Workout Suggestion Platform",
    desc: "A fitness-focused web application designed to generate personalized workout plans and track user progress. The app suggests exercises based on user data such as height, weight, age, and gender, and integrates a Nepali diet plan for localized fitness guidance. Built using React, Node.js, Express.js, and PostgreSQL.",
    link: "https://github.com/PrajwolKhadka/ByayamKendra",
    website: "",
    image: "/projects/work.png",
  },
  {
    name: "Personal Portfolio",
    desc: "A responsive personal portfolio website built to showcase projects, certifications, and professional achievements. Designed with a modern UI using React and Tailwind CSS, featuring smooth animations with Framer Motion and deployed on a custom domain using Netlify. The site highlights academic and technical accomplishments through a structured, minimal design.",
    link: "https://github.com/PrajwolKhadka/PersonalPortfolio",
    website: "https://prajwolkhadka.com.np",
    image: "/projects/port.png",
  },
  {
    name: "VR Chemistry Lab Simulation Quiz Dashboard",
    desc: "A comprehensive dashboard for a VR Chemistry Lab simulation that tracks and visualizes student quiz performance. Built with a focus on clarity and usability, it allows educators to monitor pass/fail ratios, gender-wise performance, and commonly missed questions. The dashboard is designed for seamless data interpretation, supporting better insights into student learning outcomes.",
    link: "https://github.com/PrajwolKhadka/Vr-Chemistry-lab-dashboard",
    website: "",
    image: "/projects/dash.png",
  },
  {
    name: "ByayamSetu: Fitness Companion UI/UX",
    desc: "A mobile fitness companion app concept focused on enhancing workout consistency and user engagement. Designed as part of a UI/UX project, it features intuitive navigation, personalized workout insights, and a clean, minimal interface optimized for daily usability. The design was created using Figma, emphasizing accessibility and visual balance.",
    link: "https://www.figma.com/proto/PA9WRHco8mm3Qd0SjZVYuZ/ByayamSetu?page-id=0%3A1&node-id=1-2062&starting-point-node-id=1%3A2062&t=Y0tJvXEiFDUnNsWO-1",
    website: "",
    image: "/projects/ui.png",
  },
  {
    name: "CarSubhida: Car Rental System",
    desc: "A basic Java-based desktop application made during my first year for managing car rentals, designed to handle bookings, vehicle inventory, and customer data efficiently. Built as an academic project, it demonstrates object-oriented programming principles, modular design, and basic CRUD operations to simulate a real-world car rental workflow.",
    link: "https://github.com/SparshapaudelB35/CarSubhida-35A-4",
    website: "",
    image: "/projects/car.png",
  },
  {
    name: "KataGarne?: Event Booking System",
    desc: "A simple Python-based desktop application designed to manage event bookings. Built as an early-semester academic project, it demonstrates foundational programming skills, basic CRUD operations, and user interface design using Python.",
    link: "https://github.com/PrajwolKhadka/Kata-GARNE-",
    website: "",
    image: "/projects/event.png",
  },
];

const Project: React.FC = () => {
  return (
    <div className="py-8 px-4 sm:px-6 md:px-10 min-h-screen text-white">
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
        className="mb-8 sm:mb-10 text-sm sm:text-base text-gray-300"
        style={{ fontFamily: "Merriweather, serif" }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        A collection of projects highlighting my journey in software development and innovation.
      </motion.p>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-gray-50 text-black flex flex-col sm:flex-row sm:items-center gap-4 shadow-md rounded-2xl p-4 sm:p-5 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={proj.image}
              alt={proj.name}
              className="w-full h-48 sm:w-44 sm:h-36 object-cover rounded-xl shrink-0"
            />
            <div className="flex flex-col text-left min-w-0">
              <h2
                className="text-lg sm:text-xl font-semibold break-words"
                style={{ fontFamily: "Poltawski Nowy, serif" }}
              >
                {proj.name}
              </h2>
              <p
                className="text-gray-600 mt-1 text-sm sm:text-justify"
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