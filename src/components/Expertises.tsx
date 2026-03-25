import { Brain, Baby, Dumbbell, Layers } from "lucide-react";
import { expertises } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Brain,
  Baby,
  Dumbbell,
  Layers,
};

export default function Expertises() {
  return (
    <section
      id="expertises"
      className="py-16 md:py-24 px-6"
      style={{ backgroundColor: "var(--creme)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--bordeaux)" }}
          >
            Spécialités
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--noir)",
            }}
          >
            Mes expertises
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertises.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(123, 28, 28, 0.08)" }}
                >
                  {Icon && (
                    <Icon size={24} strokeWidth={1.5} />
                  )}
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    color: "var(--noir)",
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
