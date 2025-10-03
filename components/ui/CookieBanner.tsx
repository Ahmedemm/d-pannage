"use client";

import { useState, useEffect } from "react";
import { Button } from "./Button";
import { X } from "lucide-react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
    
    // Activer Google Analytics si configuré
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg p-4 md:p-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold mb-2">Cookies et confidentialité</h3>
            <p className="text-sm text-muted-foreground">
              Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic de notre site. 
              En cliquant sur "Accepter", vous consentez à l'utilisation de tous les cookies. 
              Consultez notre{" "}
              <Link href="/confidentialite" className="underline hover:text-primary">
                politique de confidentialité
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Button
              onClick={rejectCookies}
              variant="outline"
              className="flex-1 md:flex-none"
            >
              Refuser
            </Button>
            <Button
              onClick={acceptCookies}
              className="flex-1 md:flex-none"
            >
              Accepter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
