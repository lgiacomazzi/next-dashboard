import Link from 'next/link';
import JoanaBrum from '@/public/joana_brum_brasil.svg';
import clsx from 'clsx';
import { fetchCategories } from '@/app/lib/data';
import DesktopNavBar from './header-desktop';
import MobileMenu from './header-mobile';

export function MainLogo() {
  return (
    <Link href="/">
      <JoanaBrum className="h-12 max-h-16 text-zinc-950" />
    </Link>
  );
}

export default async function Header({ theme }: { theme: 'light' | 'dark' }) {
  const categories = await fetchCategories(); // Mover para usar no header do mobile

  return (
    <header
      className={clsx(
        'fixed z-10 flex w-screen items-center justify-between p-5',
        {
          'bg-gradient-to-b from-[#f4f4f5b0] invert': theme == 'dark',
        },
      )}
    >
      <MainLogo />
      <DesktopNavBar categories={categories} />
      <MobileMenu categories={categories} />
    </header>
  );
}
