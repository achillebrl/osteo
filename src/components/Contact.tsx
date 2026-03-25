import { DOCTOLIB_URL, PHONE, PHONE_DISPLAY } from "@/lib/data";
import { MapPin, Phone, Clock, AlertTriangle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-6"
      style={{ backgroundColor: "var(--bordeaux)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-white/60">
            Nous trouver
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Contact & Accès
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Infos */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-start">
              <div className="mt-1 text-white/70">
                <MapPin size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Adresse</p>
                <p className="text-white/80 text-sm leading-relaxed">
                  Maison de Santé Sakisoigne
                  <br />
                  Rue Moulin Joli
                  <br />
                  97419 La Possession, La Réunion
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="mt-1 text-white/70">
                <Phone size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Téléphone</p>
                <a
                  href={`tel:${PHONE}`}
                  className="text-white/80 text-sm hover:text-white transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="mt-1 text-white/70">
                <Clock size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Horaires</p>
                <p className="text-white/80 text-sm leading-relaxed">
                  Lundi – Samedi
                  <br />
                  09h00 – 12h00 / 13h30 – 20h00
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="mt-1 text-white/70">
                <AlertTriangle size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Urgences</p>
                <p className="text-white/80 text-sm">
                  En cas d&apos;urgence, contactez le{" "}
                  <a href="tel:15" className="text-white font-bold hover:underline">
                    15 (SAMU)
                  </a>
                </p>
              </div>
            </div>

            <a
              href={DOCTOLIB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold transition-opacity hover:opacity-90 mt-2"
              style={{
                backgroundColor: "#ffffff",
                color: "var(--bordeaux)",
              }}
            >
              Prendre RDV sur Doctolib
            </a>
          </div>

          {/* Google Maps */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Maison+de+Santé+Sakisoigne+Rue+Moulin+Joli+La+Possession+97419+La+Réunion&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation du cabinet"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
