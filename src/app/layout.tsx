import type { Metadata } from 'next';
import Script from 'next/script';
import ThemeRegistry from '@/theme/ThemeRegistry';
import './globals.css';

export const metadata: Metadata = {
  title: 'One Ping Fan | AI Venture Studio',
  description:
    'One Ping Fan is an AI venture studio designing, validating, and scaling purposeful AI companies with durable fundamentals.',
  openGraph: {
    title: 'One Ping Fan | AI Venture Studio',
    description:
      'Partner with One Ping Fan to build AI-native ventures with strong product strategy, rapid experimentation, and enterprise readiness.',
    url: 'https://onepingfan.com',
    siteName: 'One Ping Fan',
    type: 'website',
  },
};

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {plausibleDomain ? (
          <Script
            id="plausible-analytics"
            src="https://plausible.io/js/script.js"
            data-domain={plausibleDomain}
            strategy="afterInteractive"
          />
        ) : null}
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
