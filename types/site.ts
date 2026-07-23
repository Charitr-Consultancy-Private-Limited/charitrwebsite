export type Capability = {
  slug: string;
  title: string;
  eyebrow: string;
  statement: string;
  overview: string;
  problems: string[];
  services: string[];
  customers: string[];
  example: string;
  approach: string[];
  relatedSolutions: string[];
  accent: "navy" | "teal" | "amber" | "blue";
};

export type Solution = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  users: string[];
  capabilities: string[];
  functionality: string[];
  approach: string[];
};

export type CaseStudy = {
  slug: string;
  placeholder: true;
  title: string;
  clientType: string;
  sector: string;
  challenge: string;
  approach: string;
  solution: string;
  outcome: string;
  capabilities: string[];
  technologies: string[];
  testimonial: string;
  relatedSolutions: string[];
};

