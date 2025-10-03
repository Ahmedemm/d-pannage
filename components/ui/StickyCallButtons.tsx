"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { useEffect, useState } from "react";

export default function StickyCallButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_phone', {
        event_category: 'engagement',
        event_label: 'sticky_button'
      });
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_whatsapp', {
        event_category: 'engagement',
        event_label: 'sticky_button'
      });
    }
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="bg-white border-t shadow-lg">
        <div className="grid grid-cols-2 gap-2 p-3">
          <a
            href={`tel:${siteConfig.phone}`}
            onClick={handlePhoneClick}
            className="flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            aria-label="Appeler maintenant"
          >
            <Phone className="h-5 w-5" />
            <span>Appeler</span>
          </a>
          <a
            href={siteConfig.whatsapp}
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            aria-label="Contacter via WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
