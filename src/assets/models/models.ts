// Objects for page content

export interface AboutMe {
    myData: string[][];
    aboutMe: string[];
    link: string;
};

export interface Education {
    institute: string;
    title: string;
    courses: string[];
    description: string[];
};

export interface Work {
    title: string;
    description: string[];
    skillsApplied: string[];
    workType: 'professional' | 'personal';
    link: string | null;
};

export interface SkillList {
    name: string;
    level: string;
    rating: number;
};


//COMPONENT CONTENT

export interface HeaderContent {
    navbarItems:string[];
}

export interface HomeContent {
    subtitles: string[];
}

export interface AboutContent {
    title:string;
    content: AboutMe;
}

export interface SkillContent {
    title: string;
    subTitle1: string;
    subTitle2: string;
    education: Education[];
    skillList: SkillList[];
}

export interface WorkContent {
    title: string;
    subTitle1: string;
    subTitle2: string;
    experienceList:Work[];
}

export interface ContactContent {
    title: string;
    buttonCV: string;
}