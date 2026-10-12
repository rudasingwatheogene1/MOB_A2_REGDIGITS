import { Education, Project, Skill } from "./types";

/*
 * ==========================================================
 * CHANGE THESE VALUES TO YOUR REAL STUDENT INFORMATION
 * ==========================================================
 */

export const STUDENT_NAME = "CHANGE_ME_FULL_NAME";

export const REGISTRATION_NUMBER = "CHANGE_ME_REGISTRATION_NUMBER";

/*
 * Example:
 * Registration number: 24/24671
 * Verification code: MOB-A2-4671
 *
 * Replace with the last four digits of YOUR registration number.
 */
export const VERIFICATION_CODE = "MOB-A2-XXXX";

export const APP_NAME = "RPortfolio";

export const APP_VERSION = "1.0.0";

export const skills: Skill[] = [
  {
    id: "1",
    name: "TypeScript",
    level: "Intermediate",
  },
  {
    id: "2",
    name: "React Native",
    level: "Intermediate",
  },
  {
    id: "3",
    name: "PHP",
    level: "Intermediate",
  },
  {
    id: "4",
    name: "MySQL",
    level: "Intermediate",
  },
  {
    id: "5",
    name: "Git & GitHub",
    level: "Intermediate",
  },
];

export const education: Education[] = [
  {
    id: "1",
    period: "2024 - Present",
    institution: "Institut d'Enseignement Supérieur de Ruhengeri",
    qualification: "Software Engineering",
    description:
      "Studies focused on software development, databases, mobile applications and software engineering principles.",
  },
  {
    id: "2",
    period: "Previous",
    institution: "CHANGE_ME",
    qualification: "CHANGE_ME",
    description: "CHANGE_ME",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Hospital Management System",
    problem:
      "Hospitals need an organized way to manage patients, appointments and medical information.",
    contribution:
      "I designed and developed the system structure, database and user interfaces for managing patients and appointments.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    description:
      "A web-based hospital management system designed to help organize patient registration, appointments and hospital information.",
  },
  {
    id: "2",
    title: "Personal Portfolio Mobile App",
    problem:
      "Students need a simple way to present their skills, education and projects to recruiters.",
    contribution:
      "I developed the React Native application, navigation, local persistence and profile editing functionality.",
    technologies: ["React Native", "Expo", "TypeScript", "AsyncStorage"],
    description:
      "An offline-capable mobile portfolio application that presents a student's professional profile, skills, education and projects.",
  },
];