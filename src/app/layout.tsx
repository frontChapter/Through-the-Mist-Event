import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './designxhand.css';
import './globals.css';

const dana = localFont({
  src: [
    {
      path: '../../public/fonts/DanaVF.woff2',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-dana',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Design x Hand | طراحی با دست | دکتر مایکل آپا',
  description:
    'نخستین دوره عملی و جامع طراحی لبخند با هدایت دکتر مایکل آپا در نیویورک.',
  openGraph: {
    title: 'Design x Hand | طراحی با دست | دکتر مایکل آپا',
    description:
      'نخستین دوره عملی و جامع طراحی لبخند با هدایت دکتر مایکل آپا در نیویورک.',
    images: ['/assets/og-preview.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={dana.variable}>
      <body dir="rtl" className="bg-black text-white antialiased min-h-screen selection:bg-white/20 selection:text-white text-right font-sans">
        {children}
      </body>
    </html>
  );
}
