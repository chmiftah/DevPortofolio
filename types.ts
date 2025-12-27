export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  featured?: boolean;
  version?: string;
  type?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  tags: string[];
  type: 'work' | 'education';
}

export interface Skill {
  name: string;
  percentage: number;
  description: string;
  icon: string;
}