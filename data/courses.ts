import type { CourseCategory } from "@/lib/types";

export const courseCategories: CourseCategory[] = [
  {
    slug: "nursing",
    name: "Nursing",
    description:
      "Nursing is one of the most in-demand professions worldwide. Study nursing abroad to gain internationally recognized qualifications, hands-on clinical experience, and access to excellent healthcare systems. Many countries offer post-study work visas and permanent residency pathways for qualified nurses.",
    countries: ["england", "australia", "canada", "new-zealand", "ireland", "uae"],
    duration: "3 – 4 years (Bachelor's) | 1 – 2 years (Master's)",
    feeRange: "£8,000 – $45,000/year depending on country",
    careerScope: [
      "Registered Nurse (RN) in hospitals and clinics",
      "Community health nurse",
      "Aged care and disability support nurse",
      "Mental health nurse specialist",
      "Nurse practitioner (advanced practice)",
      "Healthcare management roles",
    ],
    popularSpecializations: [
      "Adult Nursing",
      "Mental Health Nursing",
      "Pediatric Nursing",
      "Midwifery",
      "Community Health Nursing",
      "Critical Care Nursing",
    ],
  },
  {
    slug: "engineering",
    name: "Engineering",
    description:
      "Engineering remains one of the most versatile and rewarding fields of study. With rapidly evolving technology, engineers are in high demand across the globe. Study abroad to access cutting-edge labs, industry partnerships, and internship opportunities with leading companies.",
    countries: ["england", "germany", "australia", "canada", "united-states", "japan", "south-korea"],
    duration: "3 – 4 years (Bachelor's) | 1 – 2 years (Master's)",
    feeRange: "€0 (Germany public) – $60,000/year (US private)",
    careerScope: [
      "Software engineer at top tech companies",
      "Civil and structural engineer",
      "Mechanical and automotive engineer",
      "Electrical and electronics engineer",
      "Environmental and sustainability engineer",
      "Aerospace and robotics engineer",
    ],
    popularSpecializations: [
      "Computer Science & Software Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical & Electronics Engineering",
      "Chemical Engineering",
      "Aerospace Engineering",
      "Biomedical Engineering",
    ],
  },
  {
    slug: "business",
    name: "Business & Management",
    description:
      "A business degree opens doors to leadership roles in every industry. Studying business abroad gives you global perspectives, international networking opportunities, and exposure to diverse business cultures. MBA programs abroad are particularly valued by top employers worldwide.",
    countries: ["england", "united-states", "france", "australia", "canada", "singapore", "netherlands"],
    duration: "3 – 4 years (Bachelor's) | 1 – 2 years (MBA/Master's)",
    feeRange: "£10,000 – $70,000/year depending on program and country",
    careerScope: [
      "Management consultant",
      "Financial analyst and investment banker",
      "Marketing and brand manager",
      "Supply chain and operations manager",
      "Entrepreneur and startup founder",
      "Human resources director",
    ],
    popularSpecializations: [
      "MBA (Master of Business Administration)",
      "International Business",
      "Finance & Accounting",
      "Marketing",
      "Entrepreneurship",
      "Supply Chain Management",
      "Human Resource Management",
    ],
  },
  {
    slug: "information-technology",
    name: "Information Technology",
    description:
      "IT professionals are among the most sought-after in the global job market. Studying IT abroad gives you access to the latest technologies, industry-connected programs, and excellent post-study work opportunities. Many countries have special visa pathways for tech professionals.",
    countries: ["united-states", "canada", "australia", "germany", "ireland", "singapore", "england"],
    duration: "3 – 4 years (Bachelor's) | 1 – 2 years (Master's)",
    feeRange: "€0 (Germany public) – $55,000/year (US private)",
    careerScope: [
      "Software developer and full-stack engineer",
      "Data scientist and AI/ML engineer",
      "Cybersecurity specialist",
      "Cloud architect and DevOps engineer",
      "UX/UI designer",
      "IT project manager and product manager",
    ],
    popularSpecializations: [
      "Artificial Intelligence & Machine Learning",
      "Cybersecurity",
      "Data Science & Analytics",
      "Cloud Computing",
      "Web & Mobile Development",
      "Blockchain & Fintech",
      "Game Development",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Medicine",
    description:
      "Healthcare is a recession-proof field with global demand for qualified professionals. Studying medicine or healthcare abroad gives you exposure to different healthcare systems, advanced facilities, and internationally recognized qualifications. Many countries actively recruit international healthcare graduates.",
    countries: ["england", "australia", "ireland", "hungary", "georgia", "canada", "germany"],
    duration: "4 – 6 years (Medicine) | 2 – 4 years (Allied Health)",
    feeRange: "€4,000 – £45,000/year depending on program and country",
    careerScope: [
      "Medical doctor (GP or specialist)",
      "Pharmacist",
      "Physiotherapist and occupational therapist",
      "Biomedical scientist",
      "Public health specialist",
      "Hospital administrator",
    ],
    popularSpecializations: [
      "Medicine (MBBS/MD)",
      "Dentistry",
      "Pharmacy",
      "Physiotherapy",
      "Biomedical Science",
      "Public Health",
      "Veterinary Science",
    ],
  },
];

export function getCourseBySlug(slug: string): CourseCategory | undefined {
  return courseCategories.find((c) => c.slug === slug);
}
