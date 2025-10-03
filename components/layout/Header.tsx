"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { Button } from "@/components/ui/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Sortie de fourrière", href: "/services/sortie-de-fourriere" },
    { name: "Zones", href: "/zones" },
    { name: "International", href: "/international" },
    { name: "Tarifs", href: "/tarifs" },
    { name: "Avis", href: "/avis" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top bar - Desktop only */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b">
          <div className="flex items-center gap-6 text-muted-foreground">
            <span className="font-semibold text-primary">24/7 Disponible</span>
            <span>Intervention rapide en {siteConfig.delai}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold">{siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="font-semibold">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2" aria-label={siteConfig.name}>
            <Image
              src="/logo.png"
              alt={`${siteConfig.name} logo`}
              width={72}
              height={72}
              priority
            />
            <span className="text-2xl font-bold text-primary">{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild variant="outline" size="sm">
              <a href={`tel:${siteConfig.phone}`}>
                <Phone className="h-4 w-4" />
                Appeler
              </a>
            </Button>
            <Button asChild size="sm">
              <a href="/contact">Urgence 24/7</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium hover:text-primary transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-sm font-semibold"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.phoneDisplay}
                </a>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-green-600"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
