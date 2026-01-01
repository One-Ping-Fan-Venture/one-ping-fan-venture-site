import type { Metadata } from 'next';
import ThemeRegistry from '@/theme/ThemeRegistry';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js Starter',
  description: 'A Next.js application with Material UI',
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
