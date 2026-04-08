"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { DOCTOLIB_URL } from "@/lib/data";

const navLinks = [
  { label: "À propos", href: "#apropos" },
  { label: "Expertises", href: "#expertises" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: "var(--creme)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-32 flex items-center justify-between">
        {/* Logo */}
        <a href="#" aria-label="Accueil">
          <Image
            src="/images/logo-light.jpg"
            alt="Vincent Magoni Ostéopathe"
            width={280}
            height={112}
            className="h-28 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: "var(--noir)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={DOCTOLIB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--bordeaux)" }}
          >
            Prendre RDV
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2"
          aria-label="Ouvrir le menu"
        >
          <Menu size={24} style={{ color: "var(--bordeaux)" }} />
        </button>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8"
          style={{ backgroundColor: "var(--creme)" }}
        >
          <button
            onClick={closeMenu}
            className="absolute top-4 right-6 p-2"
            aria-label="Fermer le menu"
          >
            <X size={28} style={{ color: "var(--bordeaux)" }} />
          </button>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-2xl font-medium transition-opacity hover:opacity-70"
              style={{ color: "var(--noir)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={DOCTOLIB_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="px-6 py-3 rounded-md text-base font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--bordeaux)" }}
          >
            Prendre RDV
          </a>
        </div>
      )}
    </header>
  );
}
