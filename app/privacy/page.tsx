import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Care Hands Overseas Education collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
      />

      <section className="py-20">
        <Container>
          <article className="mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-muted-foreground">
            <Section heading="1. Introduction">
              <p>
                Care Hands Overseas Education (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;the Agency&rdquo;) is
                committed to protecting the personal information of students and their families who engage our
                overseas education consultancy services. This Privacy Policy explains what information we
                collect, how we use it, and your rights in relation to it.
              </p>
            </Section>

            <Section heading="2. Information We Collect">
              <p>
                We collect the following categories of personal information when you register with or engage
                our services:
              </p>
              <SubSection title="Personal Identification">
                <p>
                  Name, date of birth, nationality, passport number and expiry date, address, phone number,
                  and email address.
                </p>
              </SubSection>
              <SubSection title="Family and Guardian Details">
                <p>
                  Names and contact numbers of parents or guardians, including emergency contacts.
                </p>
              </SubSection>
              <SubSection title="Academic and Professional Information">
                <p>
                  Academic transcripts, certificates, work experience records, test scores (IELTS, TOEFL, PTE,
                  GRE, GMAT, SAT, etc.), and Statements of Purpose.
                </p>
              </SubSection>
              <SubSection title="Financial Information">
                <p>
                  Financial statements, bank documents, and education loan-related records required for
                  university applications or visa processing.
                </p>
              </SubSection>
              <SubSection title="Immigration Information">
                <p>
                  Visa application history, immigration status, and any prior immigration decisions.
                </p>
              </SubSection>
            </Section>

            <Section heading="3. How We Use Your Information">
              <p>
                We use your personal information solely for the purpose of providing our consultancy services,
                which includes:
              </p>
              <BulletList
                items={[
                  "Assessing your academic profile and recommending suitable courses and universities",
                  "Preparing and submitting university applications on your behalf",
                  "Drafting Statements of Purpose (SOPs), Letters of Recommendation (LORs), and other application documents",
                  "Assisting with education loan applications",
                  "Preparing visa documentation and supporting your visa application process",
                  "Communicating with universities, embassies, and financial institutions on your behalf",
                  "Conducting mock interviews and pre-departure briefings",
                ]}
              />
            </Section>

            <Section heading="4. How We Share Your Information">
              <p>
                We do not sell, rent, or trade your personal information. Your data is shared only with the
                following parties, strictly as necessary to deliver our services:
              </p>
              <BulletList
                items={[
                  <>
                    <strong className="font-medium text-primary">Universities and institutions</strong> to
                    which you have given written consent for application submission
                  </>,
                  <>
                    <strong className="font-medium text-primary">Embassies and immigration authorities</strong>{" "}
                    for the purpose of visa processing
                  </>,
                  <>
                    <strong className="font-medium text-primary">Financial institutions</strong> for education
                    loan applications, where applicable
                  </>,
                ]}
              />
              <p>No information shall be shared with any other third party without your explicit consent.</p>
            </Section>

            <Section heading="5. Document Authenticity and Your Responsibility">
              <p>
                All documents and information you provide to us must be true, complete, and accurate. You are
                solely responsible for the authenticity of documents submitted. The Agency reviews documents
                for completeness and consistency only, and cannot independently verify the authenticity of
                every document provided.
              </p>
              <p>
                Submission of forged, tampered, or falsified documents may result in immediate termination of
                services and could have serious legal and immigration consequences.
              </p>
            </Section>

            <Section heading="6. Data Retention">
              <p>
                We retain your personal information for as long as is necessary to fulfil the purposes
                described in this policy, or as required by applicable law. Once your engagement with us
                concludes and retention is no longer necessary, your data will be securely disposed of.
              </p>
            </Section>

            <Section heading="7. Data Security">
              <p>
                We take reasonable technical and organisational measures to protect your personal information
                against unauthorised access, loss, or misuse. Access to your data is restricted to agency
                staff directly involved in delivering your services.
              </p>
            </Section>

            <Section heading="8. Your Rights">
              <p>You have the right to:</p>
              <BulletList
                items={[
                  "Request access to the personal information we hold about you",
                  "Request correction of inaccurate or incomplete information",
                  "Request that your data be deleted, subject to any legal obligations we may have to retain it",
                  "Withdraw consent for the use of your data at any time (noting that this may affect our ability to continue providing services)",
                ]}
              />
              <p>To exercise any of these rights, please contact us in writing.</p>
            </Section>

            <Section heading="9. Limitation of Liability">
              <p>
                We are not responsible for decisions made by universities, embassies, or immigration
                authorities regarding your application or visa. We do not guarantee admission or visa
                approval. Changes in government policies, immigration regulations, or university requirements
                after your engagement commences are beyond our control and we cannot be held liable for their
                consequences.
              </p>
            </Section>

            <Section heading="10. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. Any changes will be published on our
                website. We encourage you to review this policy periodically. Continued use of our services
                following any update constitutes your acceptance of the revised policy.
              </p>
            </Section>

            <Section heading="11. Contact Us">
              <p>
                If you have any questions about this Privacy Policy or how your data is handled, please
                contact us:
              </p>
              <div className="rounded-xl border border-border/60 bg-card/40 p-5 text-sm not-italic">
                <p className="font-medium text-primary">{siteConfig.companyName}</p>
                <p className="mt-2">
                  Email:{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
                <p>Address: {siteConfig.address}</p>
              </div>
            </Section>
          </article>
        </Container>
      </section>
    </>
  );
}

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-primary sm:text-xl">{heading}</h2>
      {children}
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-primary">{title}</h3>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2 pl-5">
      {items.map((item, i) => (
        <li key={i} className="list-disc marker:text-accent">
          {item}
        </li>
      ))}
    </ul>
  );
}
