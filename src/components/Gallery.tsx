import Image from "next/image";

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Examen du dos, patient assis" },
  { src: "/images/gallery-2.jpg", alt: "Traitement cervical, patient allongé" },
  { src: "/images/gallery-3.jpg", alt: "Traitement du dos" },
  { src: "/images/gallery-4.jpg", alt: "Traitement hanche et jambe" },
  { src: "/images/gallery-5.jpg", alt: "Bilan de l'épaule et du bras" },
  { src: "/images/gallery-6.jpg", alt: "Traitement ostéopathique" },
];

export default function Gallery() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--bordeaux)" }}
          >
            Cabinet
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--noir)",
            }}
          >
            En cabinet
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="relative aspect-square overflow-hidden rounded-xl group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
