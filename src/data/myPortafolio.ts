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
            name: "Backend MTIS",
            description: "A backend system for managing tasks and projects, built with Node.js and Express.",
            link: "https://github.com/MauriNestor/BackendTIS",
            technologies: ["NodeJs", "JavaScript", "PostgreSQL"],
            imageUrl: "src/assets/mtis.jpg",
            completed: true,
        },
        {
            id: 2,
            name: "Comic Nexus",
            description: "An online platform for comic enthusiasts to share and discuss their favorite comics.",
            link: "https://github.com/Developers-ComixNexus/ComicNext_laravel",
            technologies: ["Laravel", "React", "PostgreSQL"],
            imageUrl: "src/assets/comicnexus.jpg",
            completed: true,
        },
    ],
};
