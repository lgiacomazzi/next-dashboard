import Link from 'next/link';
import JoanaBrum from '@/public/joana_brum_brasil.svg';
import { fetchCategories } from '@/lib/data';
import DesktopNavBar from './header-desktop';
import MobileMenu from './header-mobile';
import { twMerge } from 'tailwind-merge';

type HeaderProps = {
  theme?: 'dark' | null;
};

export default async function Header({ theme }: HeaderProps) {
  const categories = await fetchCategories();

  return (
    <header
      className={twMerge(
        'fixed z-20 flex w-screen items-center justify-between p-5',
        theme == 'dark' && 'bg-gradient-to-b from-[#f4f4f5b0] invert',
      )}
    >
      <Link href="/">
        <JoanaBrum className="h-12 max-h-16 text-zinc-950" />
      </Link>

      <DesktopNavBar categories={categories} />
      <MobileMenu categories={categories} />
    </header>
  );
}
