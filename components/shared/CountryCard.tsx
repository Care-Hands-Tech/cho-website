import Link from "next/link";
import Image from "next/image";
import type { Country } from "@/lib/types";
import { countryImages } from "@/data/images";

export function CountryCard({ country }: { country: Country }) {
  const image = countryImages[country.slug];

  return (
    <Link
      href={`/study-destinations/${country.slug}`}
      className="group flex flex-col items-center overflow-hidden rounded-2xl transition-all duration-300 hover:bg-muted"
    >
      {image ? (
        <div className="relative h-24 w-full overflow-hidden">
          <Image
            src={image}
            alt={country.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      ) : (
        <div className="flex h-24 w-full items-center justify-center bg-muted text-4xl transition-transform duration-300 group-hover:scale-110">
          {country.flagEmoji}
        </div>
      )}
      <div className="px-3 py-3 text-center">
        <h3 className="text-xs font-medium text-primary">{country.name}</h3>
      </div>
    </Link>
  );
}
