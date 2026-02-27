export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone?: string;
  website?: string;
  socials: SocialLink[];
}

export interface SocialLink {
  platform: "github" | "linkedin" | "telegram" | "email" | "twitter";
  url: string;
  label: string;
}

export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
}

export type SkillCategory =
  | "automation"
  | "languages"
  | "tools"
  | "ci-cd"
  | "methodologies";

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string | null;
  description?: string;
  achievements?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface CVData {
  personal: PersonalInfo;
  about: string;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
}
