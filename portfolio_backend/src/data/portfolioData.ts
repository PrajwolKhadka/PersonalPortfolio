export const portfolioData = {
    name: "Prajwol Khadka",
    title: "Software Developer & Data Analyst",
    tagline: "Building technology that creates real impact — from VR Chemistry Labs eliminating classroom hazards to AI powered legal support apps for domestic violence survivors in Nepal.",
    location: "Bhaktapur, Nepal",
    contact: {
        email: "prazolkhadka67@gmail.com",
        phone: "+977 9841394638",
        linkedin: "linkedin.com/in/prajwol-khadka",
        github: "github.com/PrajwolKhadka",
        portfolio: "prajwolkhadka.com.np"
    },
    education: [
        "MSc in Data Science and Computational Intelligence (Ongoing)",
        "BSc(Hons) in Computing, Softwarica College of IT & E-commerce, Kathmandu, Nepal (Sep 2023 - Sep 2026)"
    ],
    skills: {
        languages: ["Python", "JavaScript", "SQL"],
        frameworks: ["React", "Next.js", "Node.js", "Express", "Django", "MongoDB"],
        dataAndAnalytics: ["Power BI", "Excel", "Data Engineering", "Statistical Modeling", "DAX"],
        other: ["VR Development (Unity)", "Full Stack Web Development", "Project Management", "IT Infrastructure Management"],
        spokenLanguages: ["English (Professional)", "Nepali (Native)", "Hindi (Conversational)"]
    },
    experience: [
        {
            role: "Teaching Assistant",
            organization: "Softwarica College of IT & E-commerce, Kathmandu",
            period: "Aug 25, 2026 - Present",
            points: [
                "Teaching VR development, drawing on Unity and Meta Quest 3 experience to design a scaffolded curriculum.",
                "Curriculum covers C#, Unity fundamentals, OVRRaycaster, and facilitated student builds."
            ]
        },
        {
            role: "IT Manager",
            organization: "Rose Garden Homestay, Balkot, Bhaktapur",
            period: "Nov 2025 - Apr 2026",
            points: [
                "Managed IT infrastructure and day to day technical operations for resort facilities.",
                "Implemented data management and record keeping solutions, improving operational efficiency.",
                "Provided technical support and troubleshooting across hardware, software, and network issues.",
                "Managed 3 team members to coordinate and ensure smooth operations."
            ]
        },
        {
            role: "Computer Operator",
            organization: "York Educational Consultancy, New Thimi",
            period: "Jun 2024 - Nov 2024",
            points: [
                "Managed data entry and maintained accurate records for 100+ students across administrative systems.",
                "Streamlined document workflows, reducing processing time and improving data accuracy."
            ]
        }
    ],
    awards: [
        "DataForGood Nepal 2026 Hackathon Winner - Institute of Analytics X Softwarica College of IT & E-commerce",
        "IOA Student Analytics Challenge Winner - Institute of Analytics (2025)",
        "Tech X Elevate Best Project Award - Softwarica College of IT & E-commerce (2025)"
    ],
    certificate: [
        { name: "IT Manager Certification", institute: "micro1.ai" },
        { name: "Project Manager", institute: "Broadway Infosys" },
        { name: "Data Engineer Certification", institute: "DataCamp" },
        { name: "Career Essentials in Generative AI by Microsoft and LinkedIn", institute: "Microsoft" },
        { name: "Career Essentials in Software Development by Microsoft and LinkedIn", institute: "Microsoft" },
        { name: "Generative AI Fundamentals in Python Path", institute: "Dataquest" },
        { name: "Fundamentals of Python and Generative AI", institute: "Dataquest" },
        { name: "Governance and Professionalism", institute: "IOA" },
        { name: "Communication", institute: "IOA" },
        { name: "Advancing the Digital Economy for Sustainable Growth in Asia", institute: "ADBInstitute" },
        { name: "Intermediate Python and APIs", institute: "Dataquest" },
        { name: "APIs and Web Scraping for AI Applications", institute: "Dataquest" },
        { name: "Understanding Augmented and Virtual Reality: An Introduction", institute: "LinkedIn Learning" },
        { name: "AI Aware Certificate", institute: "Intel" },
        { name: "AI Appreciate Certificate", institute: "Intel" },
        { name: "Python Fundamentals for Web Development Program", institute: "Dataquest" },
        { name: "Tooling Essentials for Python Users", institute: "Dataquest" },
        { name: "Intermediate Python", institute: "Dataquest" },
        { name: "AI for Beginners", institute: "HPLife" },
        { name: "Introduction to Python Programming", institute: "Dataquest" },
        { name: "Introduction to Git and Version Control", institute: "Dataquest" },
        { name: "SEO", institute: "HubSpot Academy" },
        { name: "The Digital Teacher", institute: "UNESCO MGIEP" },
        { name: "Agile Project Management", institute: "HPLife" },
        { name: "AI Chatbots", institute: "Dataquest" },
        { name: "AI Fundamentals", institute: "Data Camp" },
        { name: "Data Literacy", institute: "Data Camp" },
        { name: "Google Sheets", institute: "Google Cloud" },
        { name: "IOA Membership Certificate", institute: "Institute of Analytics" }
    ],
    projects: [
        {
            name: "VR Chemistry Lab Simulation v2.0",
            desc: "A next iteration of the VR Chemistry Lab for Meta Quest 3, integrating AI-driven feedback into the experiment and evaluation flow, built on a Django/DRF/PostgreSQL backend with a multi-model AI fallback chain for conceptual, understanding-based assessment.",
            tech: ["Unity", "C#", "Meta Quest 3", "Django", "PostgreSQL"]
        },
        {
            name: "Sojho or Fatah (WhoIsTheFatah): Social Deduction Game",
            desc: "A real-time multiplayer, web-based imposter/social deduction game with server-authoritative game state, following clean architecture principles.",
            tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Socket.io"]
        },
        {
            name: "Maanak VLP: AI-Powered Virtual Learning Platform",
            desc: "A virtual learning platform for Nepal +2 Chemistry students where teachers upload lecture videos and AI generates summaries and quizzes automatically. Backed by a 5000-word UX design report covering personas, prototypes, and heuristic evaluation across 5 Agile Scrum sprints.",
            tech: ["Next.js", "Node.js", "MongoDB", "Gemini API"]
        },
        {
            name: "XVRments: VR-based Chemistry Lab Simulation",
            desc: "An immersive VR application simulating chemistry laboratory experiments, eliminating 100% of physical chemical handling risk across 5+ simulated experiments, with summarization and a quiz to evaluate learning outcomes. Winner - Tech X Elevate 2025 Best Project Award.",
            tech: ["Unity", "VR SDK", "C#", "Django", "PostgreSQL"]
        },
        {
            name: "Sahachari (सहचरी) - Nepali Legal Assistance App",
            desc: "A RAG powered AI application that helps domestic violence survivors in Nepal find relevant support organizations and generate personalized legal letters in Nepali, with intelligent organization matching, Gemini AI letter generation, and Devanagari PDF export. Winner - DataForGood Nepal 2026 Hackathon.",
            tech: ["Next.js", "Node.js", "Express", "Flutter", "Gemini API"]
        },
        {
            name: "AI Powered Adaptive Quiz System (Web & Android)",
            desc: "An intelligent quiz platform that adapts question difficulty in real time across 3 difficulty levels based on user performance, using Item Response Theory and the Google Gemini API, reducing average question drop off rate. Delivered as both a web application and a Flutter based Android/iOS app.",
            tech: ["Next.js", "Node.js", "Express", "MongoDB", "Flutter", "Gemini API"]
        },
        {
            name: "KaryaYojana: Online Job Portal",
            desc: "A full stack job portal supporting an end to end hiring workflow across 3 user roles (admin, employer, applicant) with full CRUD operations, a CV builder, and the ability to send CVs directly to employers via email. Completed as a collaborative team project.",
            tech: ["Django", "Python", "SQL", "JavaScript"]
        },
        {
            name: "Tenant Rent Reminder System",
            desc: "A Django application with automated WhatsApp reminders across 100% of tenant payment cycles, eliminating manual follow up for rent payments, maintenance schedules, and lease renewals.",
            tech: ["Django", "Python", "Twilio API", "SQL"]
        },
        {
            name: "DataWave Music: Customer Engagement & Churn Analysis",
            desc: "An end to end churn analysis for a music streaming dataset, identifying key churn drivers across 6+ behavioral features using statistical modeling and data visualization. Winner - IOA Student Analytics Challenge 2025.",
            tech: ["Python", "Pandas", "Statistical Modeling", "Data Visualization"]
        },
        {
            name: "Global Superstore Sales Dashboard",
            desc: "An interactive Power BI dashboard surfacing profitability trends, regional performance, and product insights using DAX measures and calculated columns.",
            tech: ["Power BI", "DAX", "Excel"]
        },
        {
            name: "Bajagaja: Web-Based Virtual Instrument Player",
            desc: "A browser based application supporting 8+ traditional and modern instruments, playable entirely in browser with zero latency setup.",
            tech: ["JavaScript", "Web Audio API", "HTML/CSS"]
        },
        {
            name: "Basic AI Chatbot",
            desc: "An intelligent chatbot that interacts with users in natural language, using AI and NLP techniques to understand user queries, assist with common tasks, and deliver context aware answers."
        },
        {
            name: "ByayamKendra: Online Workout Suggestion Platform",
            desc: "A fitness focused web application generating personalized workout plans and tracking user progress based on height, weight, age, and gender, integrating a Nepali diet plan for localized fitness guidance.",
            tech: ["React", "Node.js", "Express.js", "PostgreSQL"]
        },
        {
            name: "VR Chemistry Lab Simulation Quiz Dashboard",
            desc: "A dashboard for the VR Chemistry Lab simulation tracking and visualizing student quiz performance, allowing educators to monitor pass/fail ratios, gender wise performance, and commonly missed questions."
        },
        {
            name: "ByayamSetu: Fitness Companion UI/UX",
            desc: "A mobile fitness companion app concept focused on enhancing workout consistency and user engagement, with intuitive navigation, personalized workout insights, and a clean, minimal interface. Designed in Figma with an emphasis on accessibility and visual balance."
        },
        {
            name: "Personal Portfolio",
            desc: "A responsive personal portfolio website showcasing projects, certifications, and professional achievements, with a modern UI, smooth animations, and a structured, minimal design.",
            tech: ["React", "Tailwind CSS", "Framer Motion", "Netlify"]
        },
        {
            name: "CarSubhida: Car Rental System",
            desc: "A Java based desktop application for managing car rentals, handling bookings, vehicle inventory, and customer data, demonstrating object oriented programming principles and modular design."
        },
        {
            name: "KataGarne?: Event Booking System",
            desc: "A Python based desktop application for managing event bookings, built as an early semester academic project demonstrating foundational programming skills and CRUD operations."
        }
    ],
    blogs: [
        "Education, Fear, and Technology - A comprehensive report on how they relate."
    ]
};