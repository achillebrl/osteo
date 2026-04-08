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
            L&apos;ostéopathie est une <strong>approche thérapeutique manuelle douce</strong> qui
            se fonde sur une <strong>vision globale de la structure du corps humain</strong>.
            Je pratique des manipulations manuelles du système
            musculo-squelettique et utilise des techniques de <strong>relâchement
            myofascial</strong> afin de soulager les tensions, les déséquilibres et les
            douleurs.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Je peux traiter les <strong>maux de dos</strong>, les entorses, le stress, les règles
            douloureuses ou encore les migraines. L&apos;ostéopathie est à visée
            <strong> préventive et curative</strong>, et s&apos;adresse à tous :{" "}
            <strong>nourrissons, enfants, sportifs, femmes enceintes et seniors</strong>.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Originaire d&apos;Inde, de Polynésie française et de La Réunion, j&apos;apporte dans ma pratique
            une sensibilité au <strong>soin global</strong> héritée de mes cultures — où le corps,
            l&apos;esprit et l&apos;environnement forment un tout indissociable.
            Cette <strong>vision holistique</strong> nourrit mon approche ostéopathique au quotidien.
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
                <strong>Origines :</strong> Inde, Polynésie française, La Réunion
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: "var(--bordeaux)" }}
              />
              <span className="text-sm text-gray-700 flex flex-col gap-1">
                <span><strong>Diplôme :</strong> Licence STAPS Éducation et Motricité — Université Bordeaux Montaigne (2019)</span>
                <span>Diplôme d&apos;État d&apos;Ostéopathe — École d&apos;Ostéopathie de Bordeaux</span>
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
