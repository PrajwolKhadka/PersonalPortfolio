import Fuse from "fuse.js";
import { portfolioData } from "../data/portfolioData";

interface Intent {
    name: string;
    keywords: string[];
    response: () => string;
}

export const intents: Intent[] = [
    {
        name: "education",
        keywords: [
            "education",
            "degree",
            "study",
            "studying",
            "what is your education",
            "tell me your education",
            "your studies"
        ],
        response: () => `My education: ${portfolioData.education}`,
    },
    {
        name: "skills",
        keywords: [
            "skill",
            "skills",
            "expertise",
            "mastery",
            "what are your skills",
            "tell me your skills",
            "what skills do you have",
            "what are you good at"
        ],
        response: () => `My skills are: ${portfolioData.skills.join(", ")}`,
    },
    {
        name: "certificates",
        keywords: [
            "certificate",
            "certificates",
            "certified",
            "credential",
            "show certificates",
            "your certificates",
            "list certificates"
        ],
        response: () =>
            `Proof of Learning: ${portfolioData.certificate
                .map(c => `${c.name} (${c.institute})`).join("\n")} \n There are more in the certification section😊`,
    },
    {
        name: "name",
        keywords: [
            "name",
            "your name",
            "who are you",
            "what is your name",
            "naam",
        ],
        response: () => `My name: ${portfolioData.name}. Nice to meet you!🤘`,
    },

    {
        name: "projects",
        keywords: [
            "projects",
            "proof of work",
            "prj",
            "projects",
        ],
        response: () => `My projects include: ${portfolioData.projects}. More in the project section of the portfolio 😊`,
    },
];

export const fuse = new Fuse(intents, {
    keys: ["keywords"],
    threshold: 0.5,
});
