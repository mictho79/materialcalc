import type { APIRoute } from 'astro';
import { getLiveCalculators } from '@data/calculators';

const SITE = 'https://materialcal.com';

const STATIC_PAGES = [
  { path: '/',                priority: '1.0', changefreq: 'weekly'  },
  { path: '/calculators/',    priority: '0.9', changefreq: 'weekly'  },
  { path: '/about/',          priority: '0.5', changefreq: 'monthly' },
  { path: '/methodology/',    priority: '0.5', changefreq: 'monthly' },
  { path: '/contact/',        priority: '0.3', changefreq: 'monthly' },
  { path: '/privacy/',        priority: '0.2', changefreq: 'yearly'  },
  { path: '/terms/',          priority: '0.2', changefreq: 'yearly'  }
];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);
  const calculators = getLiveCalculators();

  const urls = [
    ...STATIC_PAGES.map(p => ({
      loc:        `${SITE}${p.path}`,
      lastmod:    today,
      changefreq: p.changefreq,
      priority:   p.priority
    })),
    ...calculators.map(c => ({
      loc:        `${SITE}/${c.slug}/`,
      lastmod:    today,
      changefreq: 'monthly',
      priority:   '0.8'
    }))
  ];

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(u =>
      `  <url>\n` +
      `    <loc>${u.loc}</loc>\n` +
      `    <lastmod>${u.lastmod}</lastmod>\n` +
      `    <changefreq>${u.changefreq}</changefreq>\n` +
      `    <priority>${u.priority}</priority>\n` +
      `  </url>`
    ).join('\n') +
    `\n</urlset>\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
};
