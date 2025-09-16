export type Portafolio = {
    id: number;
    user: User;
    profilePicture: string;
    socialLinks: {
        github: string;
        linkedin: string;
        twitter?: string;
    };
    skills: Skill[];
    projects: Project[];
};

export type User = {
    id: number;
    name: string;
    role: string;
    email?: string;
    location: string;
    isStudent: boolean;
    description: string;
    profilePicture: string;
};

export type Project = {
    id: number;
    name: string;
    description: string;
    link: string;
    technologies: string[];
    imageUrl: string;
    completed: boolean;
};

export type Skill = {
    id: number;
    name: string;
    isSoftSkill: boolean;
};

export const myPortafolio: Portafolio = {
    id: 1,
    user: {
        id: 1,
        name: "Michelle Barriga",
        role: "Frontend Developer",
        email: "barriga.rios.michelle@gmail.com",
        location: "Cochabamba, Bolivia",
        isStudent: false,
        description: "Passionate about creating beautiful and functional web applications.",
        profilePicture: "https://example.com/profile.jpg",
    },
    profilePicture: "https://example.com/cover.jpg",
    socialLinks: {
        github: "",
        linkedin: "https://www.linkedin.com/in/michelle-barriga-3b4b2520b/",
        twitter: "https://twitter.com/michelle_barriga",
    },
    skills: [
        { id: 1, name: "JavaScript", isSoftSkill: false },
        { id: 2, name: "React", isSoftSkill: false },
        { id: 3, name: "CSS", isSoftSkill: false },
        { id: 4, name: "Teamwork", isSoftSkill: true },
        { id: 5, name: "Problem Solving", isSoftSkill: true },
    ],
    projects: [
        {
            id: 1,
            name: "Portfolio Website",
            description: "A personal portfolio website to showcase my projects and skills.",
            link: "https://example.com/portfolio",
            technologies: ["React", "CSS", "JavaScript"],
            imageUrl: "https://example.com/project1.jpg",
            completed: true,
        },
        {
            id: 2,
            name: "E-commerce Store",
            description: "An online store for selling products.",
            link: "https://example.com/ecommerce",
            technologies: ["React", "Node.js", "MongoDB"],
            imageUrl: "https://example.com/project2.jpg",
            completed: false,
        },
    ],
};
