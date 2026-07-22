const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shunsenwaraku-sanai.vercel.app';
export const dynamic = 'force-static';
export default function sitemap() {
  return [{ url: siteUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 }];
}
