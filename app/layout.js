import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shunsenwaraku-sanai.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: '旬鮮和楽 さな井｜難波・心斎橋・東心斎橋の日本料理・割烹',
  description: '旬鮮和楽 さな井（しゅんせんわらく さない）は大阪・東心斎橋の日本料理・割烹。旬の近畿食材を用いた会席料理、営業時間、予約、アクセスをご案内します。',
  alternates: { canonical: '/' },
  openGraph: {
    title: '旬鮮和楽 さな井｜難波・心斎橋の日本料理・割烹',
    description: '大阪・東心斎橋で、旬の味覚と大阪の食文化を会席で味わう日本料理店。',
    url: '/', siteName: '旬鮮和楽 さな井', locale: 'ja_JP', type: 'website'
  },
  twitter: { card: 'summary', title: '旬鮮和楽 さな井｜大阪・東心斎橋の日本料理', description: '会席料理、営業時間、予約、アクセスのご案内。' },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return <html lang="ja"><body>{children}</body></html>;
}
