import '@/app/ui/global.css';
import { ibm_Plex_Mono } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ibm_Plex_Mono.className}>
      <body>{children}</body>
    </html>
  );
}
