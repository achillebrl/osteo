export default function PolynésienDivider({ inverted = false }: { inverted?: boolean }) {
  return (
    <div
      className="w-full overflow-hidden leading-none"
      style={{ height: "32px", opacity: 0.18 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 32"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "100%",
          height: "100%",
          transform: inverted ? "scaleY(-1)" : undefined,
        }}
      >
        {/* Motif de vagues polynésiennes répétées */}
        <pattern id="wave-poly" x="0" y="0" width="120" height="32" patternUnits="userSpaceOnUse">
          {/* Vague principale */}
          <path
            d="M0 20 C10 12, 20 8, 30 16 C40 24, 50 28, 60 20 C70 12, 80 8, 90 16 C100 24, 110 28, 120 20"
            fill="none"
            stroke="#7B1C1C"
            strokeWidth="2"
          />
          {/* Vague secondaire (décalée) */}
          <path
            d="M0 26 C10 20, 20 16, 30 22 C40 28, 50 30, 60 26 C70 20, 80 16, 90 22 C100 28, 110 30, 120 26"
            fill="none"
            stroke="#7B1C1C"
            strokeWidth="1"
          />
          {/* Points décoratifs polynésiens */}
          <circle cx="30" cy="6" r="1.5" fill="#7B1C1C" />
          <circle cx="60" cy="6" r="1.5" fill="#7B1C1C" />
          <circle cx="90" cy="6" r="1.5" fill="#7B1C1C" />
          {/* Petits triangles (motif tiki) */}
          <path d="M14 4 L18 10 L10 10 Z" fill="#7B1C1C" />
          <path d="M74 4 L78 10 L70 10 Z" fill="#7B1C1C" />
        </pattern>
        <rect width="1200" height="32" fill="url(#wave-poly)" />
      </svg>
    </div>
  );
}
