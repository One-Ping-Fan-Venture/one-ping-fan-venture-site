import type { Metadata } from 'next';
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
