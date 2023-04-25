export interface Education {
    institute: string;
    title: string;
    courses: string[];
    description: string[];
}

export interface Work {
    title: string;
    description: string[];
    skillsApplied: string[];
}

export interface Skill {
    name: string;
    level: string;
}