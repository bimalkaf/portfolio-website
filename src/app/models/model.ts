export interface EducationModel{
    institute: string;
    course : string;
    duration: string;
    score: string;
}

export interface ExperienceModel{
    role: string,
    company: string,
    duration: string,
    description : string[]
}

export interface SkillModel{
    name: string;
    level: string;
    rating: number;
}

export interface ProjectModel{
    title: string;
    technologies: string;
    description : string[];
}