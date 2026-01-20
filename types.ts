
export type ProjectCategory = 'UX' | 'UI' | 'Web' | 'Mobile' | 'All';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  category: ProjectCategory[];
  imageUrl: string;
  context: string;
  problem: string;
  process: string[];
  wireframes: string[];
  finalUI: string[];
  results: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface MethodologyStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}
