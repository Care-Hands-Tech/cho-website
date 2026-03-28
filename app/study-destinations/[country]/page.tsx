import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { countries, getCountryBySlug } from "@/data/countries";
import { countryImages } from "@/data/images";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/shared/Container";
import { CountryContent } from "./CountryContent";

export function generateStaticParams() {
  return countries.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country: slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) return { title: "Not Found" };
  return {
    title: `Study in ${country.name}`,
    description: country.tagline,
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country: slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) notFound();

  const image = countryImages[country.slug];

  return (
    <>

      {/* Hero with country image */}
      <section className="relative overflow-hidden bg-card pt-32 pb-20 sm:pb-24">
        {image && (
          <>
            <Image src={image} alt={country.name} fill className="object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-card/80 to-card" />
          </>
        )}
        <div className="noise-bg absolute inset-0" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block text-5xl">{country.flagEmoji}</span>
            <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Study in {country.name}
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {country.tagline}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-dark px-6 py-3 text-sm font-medium text-white shadow-md shadow-accent/25 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30"
              >
                Get free counseling
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20studying%20in%20${encodeURIComponent(country.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/25"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>

      <CountryContent country={country} />
    </>
  );
}
