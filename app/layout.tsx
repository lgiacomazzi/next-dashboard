import '@/components/global.css';
import { ibm_Plex_Mono } from '../components/fonts';
import type { Metadata } from 'next';
import { twMerge } from 'tailwind-merge';
import Header from '@/components/header/header';

export const metadata: Metadata = {
  title: 'Joana Brum Brasil',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge('antialised', ibm_Plex_Mono.className)}>
        {children}
      </body>
    </html>
  );
}
