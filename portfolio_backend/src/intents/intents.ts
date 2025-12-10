import Fuse from "fuse.js";
import { portfolioData } from "../data/portfolioData";

interface Intent {
    name: string;
    keywords: string[];
    response: () => string;
}

export const intents: Intent[] = [
    {
         name: "greetings",
        keywords: [
            "hello", "namaste", "hi"
        ],
        response: () => `Hello!🤗 I'm a chatbot assistant here to assist you. You can ask me Name, Education, Skills, Certificates, Projects, Blogs, and How to reach out`,
    },
     {
         name: "reachout",
        keywords: [
            "how to contact", "contact", "talk", "reach out", "conversation"
        ],
        response: () => `Nice to hear that! You can reach out via Linkedin in the About Section\nWhatsapp on the top\n or mail prazolkhadka67@gmail.com😁`,
    },
    {
        name: "education",
        keywords: [
            "education", "degree", "study", "studying",
            "what is your education", "tell me about your education",
            "your studies", "school", "college", "university", "academic",
            "educaton", "edu", "edcation"
        ],
        response: () => `My education: ${portfolioData.education}`,
    },
    {
        name: "skills",
        keywords: [
            "skill", "skills", "expertise", "mastery",
            "what are your skills", "tell me your skills",
            "what skills do you have", "what are you good at",
            "abilities", "competence", "proficiencies", "skils"
        ],
        response: () => `My skills are: ${portfolioData.skills.join(", ")}`,
    },
    {
        name: "certificates",
        keywords: [
            "certificate", "certificates", "certified", "credential",
            "show certificates", "your certificates", "list certificates",
            "certifcate", "proof of learning", "certs", "certificate list"
        ],
        response: () =>
            `Proof of Learning: ${portfolioData.certificate
                .map(c => `${c.name} (${c.institute})`).join("\n")} \nThere are more in the certification section 😊`,
    },
    {
        name: "name",
        keywords: [
            "name", "your name", "who are you", "what is your name",
            "naam", "identify", "who am I talking to", "your identity"
        ],
        response: () => `My name: ${portfolioData.name}. Nice to meet you! 🤘`,
    },
    {
        name: "projects",
        keywords: [
            "projects", "proof of work", "prj", "work samples",
            "portfolio projects", "your projects", "project list",
            "project showcase", "projcts"
        ],
        response: () => `My projects include: ${portfolioData.projects}. More in the project section of the portfolio 😊`,
    },
    {
        name: "blogs",
        keywords: [
            "blog", "reports", "report", "research", "research topics",
            "articles", "blogs", "publications", "research titles",
            "blog posts", "writing", "articles list"
        ],
        response: () => `My blogs or research titles include: ${portfolioData.blogs}.\nYou can read them in the Blogs section on the site 😊`,
    },
];

export const fuse = new Fuse(
    intents.map(intent=> ({
        ...intent,
        keywordString : intent.keywords.join(" "),
    })), 
    {
    keys: ["keywords"],
    threshold: 0.5,
    distance: 100,
    ignoreLocation: true
});
