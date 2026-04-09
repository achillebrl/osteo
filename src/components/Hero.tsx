import Image from "next/image";
import { DOCTOLIB_URL, PHONE, PHONE_DISPLAY } from "@/lib/data";

export default function Hero() {
  return (
    <section
      className="py-16 md:py-24 px-6"
      style={{ backgroundColor: "var(--creme)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--bordeaux)" }}
          >
            Ostéopathe D.O. — La Possession, La Réunion
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--noir)",
            }}
          >
            Votre ostéopathe à La Possession,
            <br />La Réunion
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Approche manuelle globale pour soulager vos douleurs et retrouver
            votre équilibre. Consultations pour adultes, enfants, sportifs et
            femmes enceintes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href={DOCTOLIB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--bordeaux)" }}
            >
              Prendre RDV sur Doctolib
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold transition-all hover:opacity-80"
              style={{
                color: "var(--bordeaux)",
                border: "2px solid var(--bordeaux)",
              }}
            >
              Appeler — {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="relative w-64 h-80 md:w-80 md:h-96 overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/hero-portrait.jpg"
              alt="Vincent Magoni, ostéopathe"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
