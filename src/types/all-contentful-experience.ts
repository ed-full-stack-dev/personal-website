export default interface ContentfulExperience {
    jobTitle: string;
    company: string;
    duties: string[];
    startingDate: string;
    endingDate: string;
    id: string;
}

export interface ContentfulPersonalInfo {
    story: {
        story: string;
    }
    webDesign: string[];
    frontEnd: string[];
    backEnd: string[];
    softSkills: string[];
}