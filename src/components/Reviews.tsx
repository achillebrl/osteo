import { reviews } from "@/lib/data";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} className="text-amber-400 text-sm">★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--bordeaux)" }}
          >
            Témoignages
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--noir)",
            }}
          >
            Ce que disent mes patients
          </h2>
          <div className="flex items-center justify-center gap-2 mb-10">
            <span className="text-amber-400 text-xl">★★★★★</span>
            <span className="font-semibold text-gray-800">5,0</span>
            <span className="text-gray-400">—</span>
            <span className="text-sm text-gray-500">7 avis vérifiés sur Doctolib</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              style={{ backgroundColor: "var(--creme)" }}
            >
              <StarRating rating={review.rating} />
              <p className="text-gray-700 text-sm leading-relaxed my-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm" style={{ color: "var(--noir)" }}>
                  {review.name}
                </p>
                <p className="text-xs text-gray-400">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
