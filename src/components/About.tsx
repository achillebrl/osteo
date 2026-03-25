import Image from "next/image";

export default function About() {
  return (
    <section id="apropos" className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--bordeaux)" }}
          >
            À propos
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--noir)",
            }}
          >
            Vincent Magoni
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            L&apos;ostéopathie est une approche thérapeutique manuelle douce qui
            se fonde sur une vision globale de la structure du corps humain.
            Vincent Magoni pratique des manipulations manuelles du système
            musculo-squelettique et utilise des techniques de relâchement
            myofascial afin de soulager les tensions, les déséquilibres et les
            douleurs.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Il peut traiter les maux de dos, les entorses, le stress, les règles
            douloureuses ou encore les migraines. L&apos;ostéopathie est à visée
            préventive et curative, et s&apos;adresse à tous : nourrissons,
            enfants, sportifs, femmes enceintes et seniors.
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: "var(--bordeaux)" }}
              />
              <span className="text-sm text-gray-700">
                <strong>Titre :</strong> Ostéopathe D.O.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: "var(--bordeaux)" }}
              />
              <span className="text-sm text-gray-700">
                <strong>Diplôme :</strong> Licence STAPS Éducation et
                Motricité — Université Bordeaux Montaigne (2019)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: "var(--bordeaux)" }}
              />
              <span className="text-sm text-gray-700">
                <strong>Langues :</strong> Français, Anglais
              </span>
            </div>
          </div>
        </div>

        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="relative w-72 h-80 md:w-80 md:h-96 overflow-hidden rounded-2xl shadow-md">
            <Image
              src="/images/about-consultation.jpg"
              alt="Vincent Magoni en consultation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
