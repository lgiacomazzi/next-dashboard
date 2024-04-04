import '@/app/ui/global.css';
import { ibm_Plex_Mono } from './ui/fonts';
import type { Metadata } from 'next';

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
      <body className={`${ibm_Plex_Mono.className} antialised`}>
        {children}
      </body>
    </html>
  );
}
