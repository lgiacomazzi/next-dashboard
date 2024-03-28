import '@/app/ui/global.css';
import Header from '@/app/ui/header/header';
import { ibm_Plex_Mono } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${ibm_Plex_Mono.className} overflow-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
