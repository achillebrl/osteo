import { DOCTOLIB_URL } from "@/lib/data";

export default function FloatingCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 py-3 shadow-[0_-2px_12px_rgba(0,0,0,0.12)]"
      style={{ backgroundColor: "var(--creme)" }}
    >
      <a
        href={DOCTOLIB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-3 rounded-md text-sm font-semibold text-white text-center transition-opacity hover:opacity-90 active:opacity-80"
        style={{ backgroundColor: "var(--bordeaux)" }}
      >
        Prendre rendez-vous
      </a>
    </div>
  );
}
