export interface SiteConfig {
  companyName: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  mapEmbedUrl: string;
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
    youtube: string;
    tiktok: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Country {
  slug: string;
  name: string;
  region: string;
  flagEmoji: string;
  tagline: string;
  whyStudy: string[];
  topUniversities: { name: string; ranking?: string }[];
  popularCourses: string[];
  costBreakdown: { item: string; range: string }[];
  visaProcess: { step: number; title: string; description: string }[];
  workOpportunities: string;
  prPathways: string;
  intakeMonths: string[];
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  fullDescription: string;
  features: string[];
  process: { step: number; title: string; description: string }[];
  whoItsFor: string;
}

export interface CourseCategory {
  slug: string;
  name: string;
  description: string;
  countries: string[];
  duration: string;
  feeRange: string;
  careerScope: string[];
  popularSpecializations: string[];
}

export interface Testimonial {
  id: string;
  studentName: string;
  country: string;
  course: string;
  university: string;
  quote: string;
  year: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "visa-updates" | "scholarships" | "country-guides" | "global-news";
  date: string;
  author: string;
  content: string;
}
