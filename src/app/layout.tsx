import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './designxhand.css';
import './globals.css';
import { getAssetPath } from '@/utils/basePath';

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

const siteUrl = 'https://mist.frontchapter.ir';
const ogImageUrl = `${siteUrl}/assets/dar-miyan-e-meh-og-preview.jpg`;

export const metadata: Metadata = {
  title: 'در میان مه | رویداد حضوری فرانت‌چپتر',
  description:
    'رویداد تعاملی فرانت‌چپتر برای طراحان، برنامه‌نویسان و متخصصان محصول؛ مواجهه با بحران هوش مصنوعی، کارگاه پشتیبانی گروهی و ترسیم مسیرهای عملی آینده حرفه‌ای در کارخانه نوآوری آزادی.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'در میان مه | رویداد حضوری فرانت‌چپتر',
    description:
      '«پارادایم عوض شده؛ باید خودم را با شرایط جدید وفق بدهم، نه اینکه منتظر برگشتن شرایط قبلی باشم.» رویدادی تعاملی برای خروج از درماندگی و ترسیم مسیرهای عملی آینده حرفه‌ای.',
    url: siteUrl,
    siteName: 'فرانت‌چپتر • در میان مه',
    locale: 'fa_IR',
    type: 'website',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'رویداد در میان مه - فرانت‌چپتر',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'در میان مه | رویداد حضوری فرانت‌چپتر',
    description:
      'رویدادی تعاملی برای خروج از درماندگی و ترسیم مسیرهای عملی آینده حرفه‌ای در دنیای هوش مصنوعی.',
    images: [ogImageUrl],
  },
};

const jsonLdEvent = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'در میان مه | رویداد سالانه فرانت‌چپتر',
  description:
    'رویدادی تعاملی برای طراحان، برنامه‌نویسان و متخصصان وب؛ مواجهه با عدم‌قطعیت و موج هوش مصنوعی، کارگاه تعاملی Group Support و پنل گفت‌وگوی تخصصی در کارخانه نوآوری آزادی.',
  startDate: '2026-09-24T15:00:00+03:30',
  endDate: '2026-09-24T19:30:00+03:30',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'فضای کار اشتراکی زاویه • کارخانه نوآوری آزادی',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'تهران',
      addressCountry: 'IR',
      streetAddress: 'کارخانه نوآوری آزادی، روبه‌روی ایستگاه مترو بیمه',
    },
  },
  image: [ogImageUrl],
  organizer: {
    '@type': 'Organization',
    name: 'فرانت‌چپتر (FrontChapter)',
    url: siteUrl,
  },
  performer: [
    {
      '@type': 'Person',
      name: 'دکتر مهیار پویامهر',
      jobTitle: 'روان‌شناس بالینی و مدرس دانشگاه',
    },
    {
      '@type': 'Person',
      name: 'صالح شجاعی',
      jobTitle: 'بنیان‌گذار فرانت‌چپتر و توسعه‌دهنده ارشد وب',
    },
    {
      '@type': 'Person',
      name: 'امیر کریمی',
      jobTitle: 'مهندس ارشد نرم‌افزار و مدیر فناوری InteliCraft',
    },
    {
      '@type': 'Person',
      name: 'پویا صبرآموز',
      jobTitle: 'برنامه‌نویس ارشد',
    },
  ],
  offers: [
    {
      '@type': 'Offer',
      name: 'بلیت عادی',
      price: '455000',
      priceCurrency: 'IRR',
      availability: 'https://schema.org/InStock',
      url: 'https://gateway.frontchapter.ir/link/779598',
    },
    {
      '@type': 'Offer',
      name: 'بلیت حامی باش',
      price: '755000',
      priceCurrency: 'IRR',
      availability: 'https://schema.org/InStock',
      url: 'https://gateway.frontchapter.ir/link/779934',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={dana.variable}>
      <head>
        {/* Favicon & Apple Touch Icons */}
        <link rel="icon" href={getAssetPath('/favicon.ico')} sizes="any" />
        <link
          rel="icon"
          href={getAssetPath('/icon-192.png')}
          type="image/png"
          sizes="192x192"
        />
        <link
          rel="icon"
          href={getAssetPath('/icon-512.png')}
          type="image/png"
          sizes="512x512"
        />
        <link
          rel="apple-touch-icon"
          href={getAssetPath('/apple-touch-icon.png')}
        />

        {/* Preload critical LCP Hero Poster Image */}
        <link
          rel="preload"
          as="image"
          href={getAssetPath('/videos/hero_section-poster.webp')}
          type="image/webp"
          fetchPriority="high"
        />

        {/* Schema.org Event JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEvent) }}
        />
      </head>
      <body
        dir="rtl"
        className="bg-black text-white antialiased min-h-screen selection:bg-white/20 selection:text-white text-right font-sans"
      >
        {children}
      </body>
    </html>
  );
}
