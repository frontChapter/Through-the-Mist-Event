import type { Metadata } from 'next';
import './designxhand.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Design x Hand | September 18-19 | New York, NY',
  description:
    'The first ever hands-on course in cosmetic dentistry led by Dr. Michael Apa.',
  openGraph: {
    title: 'Design x Hand | September 18-19 | New York, NY',
    description:
      'The first ever hands-on course in cosmetic dentistry led by Dr. Michael Apa.',
    images: ['https://framerusercontent.com/images/ru3JYJkJjwugZXqDPji7aEIhCDg.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body dir="ltr" className="bg-black text-white antialiased min-h-screen selection:bg-white/20 selection:text-white text-left">
        {children}
      </body>
    </html>
  );
}
