import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "career-counseling",
    title: "Career Counseling",
    shortDescription:
      "Personalized guidance to help you choose the right course and country based on your goals, interests, and budget.",
    icon: "Compass",
    fullDescription:
      "Our expert career counselors work one-on-one with you to understand your aspirations, academic background, and financial situation. We help you identify the best-fit courses, universities, and countries that align with your long-term career goals. From initial assessment to final decision, we guide you every step of the way.",
    features: [
      "One-on-one counseling sessions with certified advisors",
      "Comprehensive aptitude and interest assessment",
      "Course and university shortlisting based on your profile",
      "Country comparison and cost-benefit analysis",
      "Career pathway mapping and industry insights",
      "Scholarship identification and application support",
    ],
    process: [
      { step: 1, title: "Initial Consultation", description: "Free 30-minute session to understand your goals and background" },
      { step: 2, title: "Profile Assessment", description: "Detailed analysis of your academic records, interests, and budget" },
      { step: 3, title: "Research & Shortlisting", description: "We research and present the best options for your profile" },
      { step: 4, title: "Decision Support", description: "Help you compare options and make an informed decision" },
      { step: 5, title: "Action Plan", description: "Create a step-by-step timeline for your application journey" },
    ],
    whoItsFor: "Students unsure about which course, university, or country to choose for their overseas education journey.",
  },
  {
    slug: "admission-processing",
    title: "Admission Support",
    shortDescription:
      "End-to-end university application assistance from document preparation to offer letter acceptance.",
    icon: "GraduationCap",
    fullDescription:
      "Navigating the university admission process can be complex and stressful. Our team handles everything from identifying the right universities to preparing your application documents, writing compelling SOPs, and following up until you receive your offer letter. We work with 500+ partner universities across 40+ countries.",
    features: [
      "University shortlisting and application strategy",
      "Statement of Purpose (SOP) and essay writing assistance",
      "Document verification and preparation",
      "Application submission and tracking",
      "Offer letter review and acceptance guidance",
      "Scholarship and financial aid applications",
    ],
    process: [
      { step: 1, title: "University Selection", description: "Choose target universities based on your profile and preferences" },
      { step: 2, title: "Document Preparation", description: "Gather, verify, and prepare all required documents" },
      { step: 3, title: "SOP & Essays", description: "Craft compelling personal statements tailored to each university" },
      { step: 4, title: "Application Submission", description: "Submit applications and track progress" },
      { step: 5, title: "Offer & Enrollment", description: "Review offers, accept, and complete enrollment formalities" },
    ],
    whoItsFor: "Students who need help with the entire university application process from start to finish.",
  },
  {
    slug: "visa-assistance",
    title: "Visa Processing",
    shortDescription:
      "Expert visa application support with high success rates across all major study destinations.",
    icon: "FileCheck",
    fullDescription:
      "Visa application is often the most critical and stressful part of studying abroad. Our visa experts have years of experience with immigration requirements across 40+ countries. We prepare your case meticulously, conduct mock interviews, and ensure every document meets the embassy's requirements. Our track record speaks for itself with a 98% visa success rate.",
    features: [
      "Complete visa application documentation",
      "Financial documentation guidance and review",
      "Mock visa interview preparation",
      "Embassy appointment scheduling",
      "Application tracking and follow-up",
      "Visa extension and renewal support",
    ],
    process: [
      { step: 1, title: "Eligibility Check", description: "Assess your eligibility and identify potential red flags" },
      { step: 2, title: "Document Collection", description: "Prepare all required documents including financial proof" },
      { step: 3, title: "Application Preparation", description: "Complete visa forms and compile the application package" },
      { step: 4, title: "Mock Interview", description: "Practice visa interview questions and build confidence" },
      { step: 5, title: "Submission & Follow-up", description: "Submit application and track until decision" },
    ],
    whoItsFor: "Students who need professional guidance through the visa application process for any country.",
  },
  {
    slug: "test-preparation",
    title: "Test Preparation",
    shortDescription:
      "Comprehensive coaching for IELTS, TOEFL, PTE, GRE, GMAT, SAT, and other standardized tests.",
    icon: "BookOpen",
    fullDescription:
      "Achieve your target score with our expert test preparation programs. Our experienced trainers use proven methodologies, practice materials, and personalized coaching to help you excel. Whether you need English proficiency tests (IELTS, TOEFL, PTE) or academic tests (GRE, GMAT, SAT), we have specialized programs for each.",
    features: [
      "Expert trainers with years of test prep experience",
      "Comprehensive study materials and practice tests",
      "Personalized study plans based on diagnostic assessment",
      "Small batch sizes for individual attention",
      "Online and offline coaching options",
      "Score improvement guarantee",
    ],
    process: [
      { step: 1, title: "Diagnostic Test", description: "Take a full-length diagnostic to identify strengths and weaknesses" },
      { step: 2, title: "Study Plan", description: "Receive a customized study plan with timeline and targets" },
      { step: 3, title: "Coaching Sessions", description: "Attend regular classes with expert trainers" },
      { step: 4, title: "Practice & Review", description: "Complete practice tests and review sessions" },
      { step: 5, title: "Test Day Prep", description: "Final revision, tips, and confidence building before the exam" },
    ],
    whoItsFor: "Students preparing for English proficiency tests or academic entrance exams for overseas universities.",
  },
  {
    slug: "language-classes",
    title: "Language Classes",
    shortDescription:
      "Learn German, French, Spanish, Japanese, and other languages required for your study destination.",
    icon: "Languages",
    fullDescription:
      "Many study destinations require or benefit from local language proficiency. Our language programs prepare you not just for exams but for real-life communication in your destination country. From beginner to advanced levels, we offer structured courses in German, French, Spanish, Japanese, Korean, Mandarin, and more.",
    features: [
      "Native and certified language instructors",
      "Courses from A1 to C2 levels",
      "Exam-focused preparation (TestDaF, DELF/DALF, DELE, JLPT)",
      "Cultural orientation alongside language training",
      "Flexible schedules with weekend and evening batches",
      "Online and in-person options",
    ],
    process: [
      { step: 1, title: "Level Assessment", description: "Determine your current language level" },
      { step: 2, title: "Course Selection", description: "Choose the right program based on your goals and timeline" },
      { step: 3, title: "Structured Learning", description: "Attend regular classes with progressive curriculum" },
      { step: 4, title: "Practice & Immersion", description: "Conversation practice, media immersion, and cultural learning" },
      { step: 5, title: "Certification", description: "Prepare for and take the official language proficiency exam" },
    ],
    whoItsFor: "Students planning to study in non-English speaking countries or wanting to add language skills to their profile.",
  },
  {
    slug: "placement-guidance",
    title: "Placement Guidance",
    shortDescription:
      "Pre-departure and post-arrival support to help you settle and find career opportunities abroad.",
    icon: "Briefcase",
    fullDescription:
      "Our support doesn't end with your visa approval. We provide comprehensive pre-departure orientation and ongoing placement guidance to help you succeed in your new country. From accommodation assistance to CV preparation and job search strategies, we ensure you're prepared for life and career abroad.",
    features: [
      "Pre-departure orientation and travel assistance",
      "Accommodation search and setup support",
      "CV/resume writing and LinkedIn optimization",
      "Job search strategies for international students",
      "Interview preparation and coaching",
      "Alumni network connections in destination countries",
    ],
    process: [
      { step: 1, title: "Pre-Departure Briefing", description: "Comprehensive orientation about your destination country" },
      { step: 2, title: "Arrival Support", description: "Airport pickup, accommodation, and initial settlement assistance" },
      { step: 3, title: "Career Preparation", description: "CV writing, LinkedIn setup, and job market orientation" },
      { step: 4, title: "Job Search", description: "Active support in finding part-time work and internships" },
      { step: 5, title: "Post-Graduation", description: "Guidance on post-study work visas and career pathways" },
    ],
    whoItsFor: "Students who want support beyond admission and visa — for settling in and building a career abroad.",
  },
  {
    slug: "scholarship-support",
    title: "Scholarship Support",
    shortDescription:
      "Identify and apply for scholarships, grants, and financial aid to reduce your education costs.",
    icon: "Award",
    fullDescription:
      "Education abroad doesn't have to break the bank. Our scholarship specialists identify opportunities you qualify for and help you craft winning applications. From government scholarships (Chevening, DAAD, CSC) to university-specific grants and need-based aid, we maximize your chances of securing financial support.",
    features: [
      "Comprehensive scholarship database and matching",
      "Government scholarship applications (Chevening, DAAD, Fulbright, CSC)",
      "University-specific scholarship and grant applications",
      "Compelling scholarship essay writing",
      "Financial planning and budgeting guidance",
      "Loan assistance and documentation",
    ],
    process: [
      { step: 1, title: "Financial Assessment", description: "Understand your budget and funding needs" },
      { step: 2, title: "Scholarship Matching", description: "Identify scholarships you're eligible for" },
      { step: 3, title: "Application Preparation", description: "Prepare compelling scholarship applications and essays" },
      { step: 4, title: "Submission", description: "Submit applications before deadlines with complete documentation" },
      { step: 5, title: "Follow-up", description: "Track applications and prepare for scholarship interviews" },
    ],
    whoItsFor: "Students seeking financial support to fund their overseas education through scholarships, grants, or loans.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
