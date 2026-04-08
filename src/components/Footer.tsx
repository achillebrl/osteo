import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="py-12 px-6 text-center"
      style={{ backgroundColor: "var(--noir)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <Image
          src="/images/logo-dark.jpg"
          alt="Vincent Magoni Ostéopathe"
          width={220}
          height={88}
          className="h-24 w-auto object-contain"
        />
        <p className="text-sm text-white/60">RPPS : 10110390886</p>
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Vincent Magoni — Ostéopathe. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
