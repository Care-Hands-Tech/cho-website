import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/shared/Container";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Book Free Consultation",
  description: "Enquire about studying abroad. Book a free consultation with Care Hands.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero with image */}
      <section className="relative overflow-hidden bg-card pt-32 pb-20 sm:pb-24">
        <Image
          src="/images/pages/contact.svg"
          alt=""
          fill
          unoptimized
          className="object-cover opacity-5"
        />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.08] blur-[80px]" />
        <div className="noise-bg absolute inset-0" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Let&apos;s plan your future
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Fill out the enquiry form below or chat with us directly on WhatsApp.
              Our counselors will get back to you within 24 hours.
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20studying%20abroad.%20Can%20you%20help%3F`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/25"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-[1fr_1.4fr]">
            {/* Contact details */}
            <div>
              <h2 className="text-lg font-semibold text-primary">Contact details</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Prefer to reach out directly? Here&apos;s how.
              </p>

              <div className="mt-8 space-y-6">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl bg-[#25D366]/5 p-4 transition-colors hover:bg-[#25D366]/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10">
                    <MessageCircle className="h-5 w-5 text-[#25D366]" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary">WhatsApp</div>
                    <div className="text-xs text-muted-foreground">{siteConfig.phone}</div>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-muted"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary">Phone</div>
                    <div className="text-xs text-muted-foreground">{siteConfig.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-muted"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary">Email</div>
                    <div className="text-xs text-muted-foreground">{siteConfig.email}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-xl p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary">Office</div>
                    <div className="text-xs text-muted-foreground">{siteConfig.address}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary">Hours</div>
                    <div className="text-xs text-muted-foreground">
                      Mon–Fri: 9am–6pm &middot; Sat: 10am–2pm
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enquiry form */}
            <div>
              <h2 className="text-lg font-semibold text-primary">Enquiry form</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us about your study plans and we&apos;ll guide you from here.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
