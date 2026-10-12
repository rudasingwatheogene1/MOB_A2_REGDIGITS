export type AvailabilityStatus =
  | "Available for internship"
  | "Available for freelance"
  | "Not currently available";

export interface Profile {
  fullName: string;
  registrationNumber: string;
  headline: string;
  biography: string;
  primarySkill: string;
  availability: AvailabilityStatus;
  imageUri: string | null;
}

export interface Skill {
  id: string;
  name: string;
  level: string;
}

export interface Education {
  id: string;
  period: string;
  institution: string;
  qualification: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  problem: string;
  contribution: string;
  technologies: string[];
  description: string;
}