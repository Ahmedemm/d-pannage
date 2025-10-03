import type { MetadataRoute } from 'next';
import { siteConfig, services, cities, countries } from '@/lib/config';
import { posts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, '');

  const staticRoutes = [
    '',
    '/services',
    '/zones',
    '/international',
    '/tarifs',
    '/avis',
    '/faq',
    '/blog',
    '/contact',
    '/mentions-legales',
    '/confidentialite',
    '/cgv',
  ].map((path) => ({ url: `${base}${path || '/'}`, lastModified: new Date() }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const cityRoutes = cities.flatMap((c) => ([
    { url: `${base}/depannage/${c.slug}`, lastModified: new Date() },
    { url: `${base}/depannage-${c.slug}`, lastModified: new Date() },
  ]));

  const countryRoutes = countries.map((c) => ({
    url: `${base}/international/${c.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...countryRoutes, ...blogRoutes];
}
