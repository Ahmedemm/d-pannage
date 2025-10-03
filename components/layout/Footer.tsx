import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig, services, cities } from "@/lib/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-slate-300 mb-4 text-sm">
              Service de dépannage et remorquage automobile 24/7 en Belgique et à l'international.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                <div>
                  <div>{siteConfig.address.street}</div>
                  <div>{siteConfig.address.postal} {siteConfig.address.city}</div>
                  <div>{siteConfig.address.country}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-primary transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>24/7 - Disponible jour et nuit</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-300 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Zones d'intervention</h3>
            <ul className="space-y-2 text-sm">
              {cities.slice(0, 6).map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/depannage-${city.slug}`}
                    className="text-slate-300 hover:text-primary transition-colors"
                  >
                    Dépannage {city.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/zones"
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Voir toutes les zones →
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tarifs" className="text-slate-300 hover:text-primary transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/international" className="text-slate-300 hover:text-primary transition-colors">
                  Remorquage international
                </Link>
              </li>
              <li>
                <Link href="/avis" className="text-slate-300 hover:text-primary transition-colors">
                  Avis clients
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <div>
              © {currentYear} {siteConfig.name}. Tous droits réservés. | TVA: {siteConfig.vat}
            </div>
            <div className="flex gap-6">
              <Link href="/mentions-legales" className="hover:text-primary transition-colors">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="hover:text-primary transition-colors">
                Confidentialité
              </Link>
              <Link href="/cgv" className="hover:text-primary transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
