import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Merci — Nous avons bien reçu votre message",
  description: "Merci pour votre demande. Notre équipe vous recontactera rapidement.",
  alternates: { canonical: "/contact/merci" },
};

export default function MerciPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Merci !</h1>
            <p className="text-muted-foreground mb-8">
              Votre message a bien été envoyé. Nous revenons vers vous dès que possible.
            </p>
            <div className="flex gap-3 justify-center">
              <Button asChild>
                <Link href="/">Retour à l'accueil</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">Voir nos services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
