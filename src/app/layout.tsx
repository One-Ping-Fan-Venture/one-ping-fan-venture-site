import type { Metadata } from 'next';
import Script from 'next/script';
import ThemeRegistry from '@/theme/ThemeRegistry';
import './globals.css';

export const metadata: Metadata = {
  title: 'One Ping Fan Ventures',
  description: 'Building resilient companies with balanced innovation and execution.',
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
