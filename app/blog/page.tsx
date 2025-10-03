import { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Conseils & Guides Dépannage",
  description: "Guides pratiques et conseils pour le dépannage automobile en Belgique et à l’étranger.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <div className="pt-24 pb-20">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Blog — Guides & Conseils</h1>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Articles evergreen SEO pour vous aider en cas de panne en Belgique ou à l’étranger.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sorted.map((p) => (
              <article key={p.slug} className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-semibold mb-2">
                  <Link href={`/blog/${p.slug}`} className="hover:text-primary">
                    {p.title}
                  </Link>
                </h2>
                <div className="text-xs text-muted-foreground mb-3">
                  {new Date(p.date).toLocaleDateString('fr-BE')}
                </div>
                <p className="text-sm text-slate-700 mb-4">{p.excerpt}</p>
                <Link href={`/blog/${p.slug}`} className="text-primary font-medium">
                  Lire l’article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
