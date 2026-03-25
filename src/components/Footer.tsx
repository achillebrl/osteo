import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="py-10 px-6 text-center"
      style={{ backgroundColor: "var(--noir)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <Image
          src="/images/logo-dark.jpg"
          alt="Vincent Magoni Ostéopathe"
          width={140}
          height={56}
          className="h-14 w-auto object-contain"
        />
        <p className="text-sm text-gray-400">RPPS : 10110390886</p>
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Vincent Magoni — Ostéopathe. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
