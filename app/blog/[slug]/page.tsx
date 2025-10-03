import { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/blog";
import { siteConfig } from "@/lib/config";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article" };
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    description: post.excerpt,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <div className="pt-24 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="py-12">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-4 text-muted-foreground">
            <Link href="/" className="hover:text-primary">Accueil</Link> / <Link href="/blog" className="hover:text-primary">Blog</Link> / <span>{post.title}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{post.title}</h1>
          <div className="text-xs text-muted-foreground mb-6">{new Date(post.date).toLocaleDateString('fr-BE')}</div>
          <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </div>
      </section>
    </div>
  );
}
