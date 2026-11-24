import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.lumeagroup.in';
  const currentDate = new Date().toISOString().split('T')[0];

  const routes = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/brands', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/brands/lumeacyber', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/brands/lumeanursing', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/brands/lumeaskill', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/brands/lumeago', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/solutions/cybersecurity', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/solutions/technology', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/solutions/learning', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/industries', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/directors', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/advisors', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/insights', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/privacy', priority: 0.4, changeFrequency: 'yearly' as const },
    { url: '/cookies', priority: 0.4, changeFrequency: 'yearly' as const },
    { url: '/terms', priority: 0.4, changeFrequency: 'yearly' as const },
  ];

  return routes.map(route => ({
    url: `${baseUrl}${route.url}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
