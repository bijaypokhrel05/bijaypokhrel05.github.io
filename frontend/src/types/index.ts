export type Theme = 'light' | 'dark';

export interface Project {
  id: string;
  title: string;
  problem: string;
  approach: string;
  result: string;
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
