import { StackItem } from "../data/stack";

export type ResumeContact = {
    label: string;
    href?: string;
  };
  
  export type ResumeStack = {
    label: string;
    items: StackItem[];
  };
  
  export type ResumeExperience = {
    company: string;
    href?: string;
    role: string;
    start: string;
    end: string;
    details: string[];
  };
  
  export type ResumeProject = {
    id: number;
    name: string;
    href: string;
    repo: string;
    summary: string;
  };

  export type Resume = {
    name: string;
    slogan: string;
    objective: string;
    contacts: ResumeContact[];
    tech: {
      title: string;
      stacks: {
        languages: ResumeStack;
        tools: ResumeStack;
        frameworks: ResumeStack;
        services: ResumeStack;
      };
    };
    experience: {
      title: string;
      items: ResumeExperience[];
    };
    projects: {
      title: string;
      items: ResumeProject[];
    };
    skills: {
      title: string;
      hard: StackItem[];
      soft: string;
    }
  };