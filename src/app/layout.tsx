import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Link from 'next/link';

import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: {
    default: 'TypeScript Next.js Stripe',
    template: '%s | Next.js + TypeScript',
  },
  description: 'Next.js Stripe',
  twitter: {
    card: 'summary_large_image',
    description: 'Full-stack TypeScript example using Next.js, react-stripe-js, and stripe-node.',
    images: [
      {
        url: 'https://nextjs-typescript-react-stripe-js.vercel.app/social_card.png',
      },
    ],
    site: '@StripeDev',
    title: 'TypeScript Next.js Stripe',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className='container'>
          <header>
            <div className='header-content'>
              <Link href='/' className='logo'>
                <img src='https://nextjs-typescript-react-stripe-js.vercel.app/logo.png' alt='' />
              </Link>
              <h1>
                <span className='light'>Stripe Sample</span>
                <br />
                Next.js, TypeScript, and Stripe 🔒💸
              </h1>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
