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
        role: "Trainee Developer",
        email: "barriga.rios.michelle@gmail.com",
        location: "Cochabamba, Bolivia",
        isStudent: false,
        description: "Hi my name is Michelle Barriga and I'm a Systems Engineer student with hands-on experience in backend, web development, and databases. Passionate about creating efficient and scalable solutions. Seeking oportunities to contribute and grow in a dynamic tech environment.",
        profilePicture: "https://example.com/profile.jpg",
    },
    profilePicture: "https://example.com/cover.jpg",
    socialLinks: {
        github: "https://github.com/michellebarrigaIT/",
        linkedin: "https://www.linkedin.com/in/michelle-barriga-3b4b2520b/",
    },
    skills: [
        { id: 1, name: "JavaScript", isSoftSkill: false },
        { id: 2, name: "React", isSoftSkill: false },
        { id: 3, name: "CSS", isSoftSkill: false },
        { id: 4, name: "Teamwork", isSoftSkill: true },
        { id: 5, name: "Problem Solving", isSoftSkill: true },
        { id: 6, name: "Clear and Concise communication", isSoftSkill: true },
        { id: 7, name: "Emphatic and ctive Listening ", isSoftSkill: true },
        { id: 8, name: "Multitasking and Task Priorization ", isSoftSkill: true },
        { id: 9, name: "TypeScript", isSoftSkill: false },
        { id: 10, name: "NodeJs", isSoftSkill: false },
        { id: 11, name: "PostgreSQL", isSoftSkill: false },
        { id: 12, name: "Git", isSoftSkill: false },
        { id: 13, name: "RESTful APIs", isSoftSkill: false },
        { id: 14, name: "GraphQL", isSoftSkill: false },
        { id: 15, name: "Laravel", isSoftSkill: false },
        { id: 16, name: "NextJs", isSoftSkill: false },
        { id: 17, name: "NestJs", isSoftSkill: false },
        { id: 18, name: "gRPC", isSoftSkill: false },
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
            imageUrl: "src/assets/comic.jpg",
            completed: true,
        },
        {
            id: 3,
            name: "GraphQL API",
            description: "A GraphQL API for a polling application, allowing users to create and vote on polls.",
            link: "https://github.com/michellebarrigaIT/GraphQL-Polls",
            technologies: ["NextJs", "GraphQL", "PostgreSQL"],
            imageUrl: "src/assets/graphql-reasons.png",
            completed: true,
        },
        {
            id: 4,
            name: "Backend NestJs",
            description: "A backend application built with NestJS framework, focusing on scalability and maintainability.",
            link: "https://github.com/michellebarrigaIT/Bakend-NestJs",
            technologies: ["NextJs", "RestFul", "PostgreSQL"],
            imageUrl: "src/assets/rest-api.png",
            completed: true,
        },
        {
            id: 5,
            name: "gRPC",
            description: "A gRPC service for efficient communication between microservices in a distributed system.",
            link: "https://github.com/michellebarrigaIT/gRPC",
            technologies: ["NextJs", "gRPC", "PostgreSQL"],
            imageUrl: "src/assets/grpc.png",
            completed: true,
        },
    ],
};
