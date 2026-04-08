import { tarifs } from "@/lib/data";
import { DOCTOLIB_URL } from "@/lib/data";

export default function Pricing() {
  return (
    <section
      id="tarifs"
      className="py-16 md:py-24 px-6"
      style={{ backgroundColor: "var(--creme)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--bordeaux)" }}
          >
            Honoraires
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--noir)",
            }}
          >
            Tarifs
          </h2>
        </div>

        {/* Info non remboursement */}
        <div
          className="text-center text-sm font-medium py-3 px-6 rounded-lg mb-8 max-w-lg mx-auto"
          style={{
            backgroundColor: "rgba(123, 28, 28, 0.08)",
            color: "var(--bordeaux)",
          }}
        >
          Non remboursée par l&apos;Assurance Maladie —{" "}
          <strong>remboursable par les mutuelles</strong>
        </div>

        {/* Tarif cards */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto mb-8">
          {tarifs.map((t) => (
            <div
              key={t.label}
              className="flex-1 bg-white rounded-2xl p-8 text-center shadow-sm"
            >
              <p className="text-gray-600 text-sm mb-3">{t.label}</p>
              <p
                className="text-4xl font-bold"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--bordeaux)",
                }}
              >
                {t.price}
              </p>
            </div>
          ))}
        </div>

        {/* Paiement */}
        <div className="text-center mb-3">
          <p className="text-sm font-medium text-gray-700">
            Modes de paiement acceptés :{" "}
            <strong>espèces</strong>, <strong>chèque</strong> et{" "}
            <strong>virement bancaire</strong>
          </p>
        </div>
        <p className="text-center text-xs text-gray-400 max-w-xl mx-auto mb-8">
          Ces honoraires vous sont communiqués à titre indicatif. Ils peuvent
          varier selon le type de soins réalisés, le nombre de consultations et
          les actes additionnels nécessaires.
        </p>

        <div className="text-center">
          <a
            href={DOCTOLIB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--bordeaux)" }}
          >
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </section>
  );
}
