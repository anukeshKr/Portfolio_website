// src/data/portfolioData.js
import QuickBlog from "../assets/Quickblog2.png"
import tomatoWeb from "../assets/tomato.png"
import youtubeClone from "../assets/youtubeClone.png"
import pokemonCard from "../assets/pokemonCard.png"

export const personalInfo = {
    name: "Anukesh Kumar",
    title: "Full-Stack Developer",
    location: "Bihar, India",
    email: "anukeshk573@gmail.com",
    phone: "7667583924",
    github: "https://github.com/anukeshKr",
    linkedin: "https://www.linkedin.com/in/anukesh-kumar/",
    email: "anukeshk573@gmail.com",
    summary: "Full-stack developer with hands-on experience building web applications using MongoDB, Express.js, React.js, Node.js, and Next.js. Experienced in developing REST APIs, integrating frontend and backend systems, and building responsive user interfaces."
};

export const skills = {
    Languages: ["JavaScript", "TypeScript", "SQL"],
    Frontend: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Material UI"],
    Backend: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
    Databases: ["MongoDB", "MySQL", "PostgreSQL"],
    Tools: ["Git", "GitHub", "Docker", "Linux", "AWS"],
};

export const experience = [
    {
        role: "MERN & Next.js Developer",
        company: "BITLYZE TECHNOLOGIES PVT. LTD",
        duration: "May 2025 – Present",
        points: [
            "Developed and maintained full-stack web applications using MongoDB, Express.js, React.js, Node.js, and Next.js.",
            "Built and integrated RESTful APIs for CRUD operations, authentication, and seamless data exchange.",
            "Leveraged Next.js features such as Server-Side Rendering (SSR) to improve page performance and SEO."
        ]
    }
];

export const projects = [
    {
        id: 1,
        title: "AI-Powered Full Stack Blog Platform",
        description: "Built a full-stack blog platform with admin controls and Google Gemini API to generate AI content from titles.",
        technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Next.js", "Tailwind CSS", "Gemini API"],
        liveLink: "https://quick-blog-seven-opal.vercel.app",
        codeLink: "https://github.com",
        image: QuickBlog
    },
    {
        id: 2,
        title: "E-commerce Website",
        description: "Full-stack application featuring JWT authentication, cart workflows, and scalable backend APIs managing 100+ menu items.",
        technologies: ["MERN Stack", "Tailwind CSS", "JWT Authentication", "REST APIs", "Git"],
        liveLink: "#",
        codeLink: "https://github.com/food-delivery",
        image: tomatoWeb
    },
    {
        id: 3,
        title: "YouTube Clone",
        description: "A video streaming platform application designed with a responsive multi-column layout, featuring video playback, real-time comment feeds, and dynamic content delivery.",
        technologies: ["React.js", "Tailwind CSS", "Google API", "Axios", "Git"],
        liveLink: "https://anukeshkr.github.io/Youtube-clone/",
        codeLink: "https://github.com",
        image: youtubeClone
    },
    {
        id: 4,
        title: "Pokémon Card Explorer",
        description: "An interactive digital catalog featuring instant client-side search filtering, pagination, and detailed card metrics compiled from external trading card datasets.",
        technologies: ["React.js", "Tailwind CSS", "Pokémon TCG API", "REST APIs", "Git"],
        liveLink: "https://anukeshkr.github.io/Pokemon-react-App/",
        codeLink: "https://github.com",
        image: pokemonCard
    },
];

export const education = [
    {
        institution: "Lovely Professional University",
        degree: "B.Tech in Computer Science",
        timeline: "Aug 2021 – Jul 2025",
        grade: "CGPA: 7.2"
    },
    {
        institution: "Sant Longowal Institute of Engineering & Technology",
        degree: "Diploma in Electronics & Technology",
        timeline: "Jun 2018 – Mar 2021",
        grade: "CGPA: 7.5"
    }
];
