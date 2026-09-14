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

export type WorkItem = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  homeDescription: string;
  activityHeading: "What we worked on" | "Typical areas of work";
  activities: string[];
  objective?: string;
  tags: string[];
  relatedCapabilities: string[];
  relatedSolutions: string[];
};
