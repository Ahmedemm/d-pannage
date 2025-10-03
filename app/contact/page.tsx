"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Phone, MessageCircle, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    defaultValues: { subject: "Demande d'intervention" },
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (values: FormValues) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: 'contact_form'
        });
      }
      // Redirect to thank you page
      if (typeof window !== 'undefined') {
        window.location.href = '/contact/merci';
      }
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact & Urgence 24/7</h1>
            <p className="text-xl text-blue-100 mb-6">
              Besoin d'un dépannage immédiat ? Contactez-nous par téléphone ou WhatsApp. 
              Pour une demande de devis ou d'information, utilisez le formulaire ci-dessous.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-white text-blue-700 hover:bg-blue-50">
                <a href={`tel:${siteConfig.phone}`}><Phone className="h-5 w-5" /> {siteConfig.phoneDisplay}</a>
              </Button>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" /> WhatsApp</a>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <a href={`mailto:${siteConfig.email}`}><Mail className="h-5 w-5" /> {siteConfig.email}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h2 className="text-2xl font-bold mb-6">Formulaire de contact</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Nom complet</label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        aria-invalid={!!errors.name}
                        {...register("name", { required: "Votre nom est requis" })}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Téléphone</label>
                      <input
                        type="tel"
                        className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        aria-invalid={!!errors.phone}
                        {...register("phone", { required: "Votre téléphone est requis" })}
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        aria-invalid={!!errors.email}
                        {...register("email", { required: "Votre email est requis" })}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Sujet</label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        {...register("subject")}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      rows={6}
                      className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      aria-invalid={!!errors.message}
                      {...register("message", { required: "Veuillez décrire votre besoin" })}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      id="consent"
                      type="checkbox"
                      className="mt-1 h-4 w-4"
                      aria-invalid={!!errors.consent}
                      {...register("consent", { required: "Vous devez consentir au traitement de vos données" })}
                    />
                    <label htmlFor="consent" className="text-sm text-slate-700">
                      J'accepte que mes données soient utilisées pour me recontacter, conformément à la
                      <a href="/confidentialite" className="text-primary underline ml-1">Politique de confidentialité</a>.
                    </label>
                  </div>
                  {errors.consent && (
                    <p className="text-sm text-red-600">{errors.consent.message}</p>
                  )}

                  <div className="pt-2">
                    <Button type="submit" disabled={isSubmitting}>
                      <Send className="h-4 w-4" />
                      {isSubmitting ? "Envoi..." : "Envoyer"}
                    </Button>
                    {status === "success" && (
                      <span className="text-green-600 text-sm ml-3">Message envoyé. Nous vous répondrons rapidement.</span>
                    )}
                    {status === "error" && (
                      <span className="text-red-600 text-sm ml-3">Une erreur est survenue. Réessayez plus tard.</span>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Coordonnées</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href={`tel:${siteConfig.phone}`} className="text-primary hover:underline">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                      {siteConfig.email}
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <MessageCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">
                      WhatsApp
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <div>{siteConfig.address.street}</div>
                      <div>{siteConfig.address.postal} {siteConfig.address.city}, Belgique</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-md overflow-hidden border">
                  <iframe
                    title="Google Maps"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address.city + ', Belgique')}&output=embed`}
                    width="100%"
                    height="240"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
