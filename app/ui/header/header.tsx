'use client';

import Link from 'next/link';
import HeaderDropdown from './header-dropdown';
import Image from 'next/image';
import { Bars3Icon } from '@heroicons/react/24/outline';
import JoanaBrum from '@/public/joana_brum_brasil.svg';
import clsx from 'clsx';

const links = [
  { name: 'Desenhos', href: '/drawings' },
  { name: 'Ilustrações', href: '/illustrations' },
  { name: 'Colagens', href: '/collage' },
  { name: 'Bio', href: '/bio' },
  // { name: 'Instagram', href: 'https://www.instagram.com/joanasbrum/' },
];

export function MainLogo() {
  return (
    <Link href="/">
      <JoanaBrum className="w-48 text-zinc-950" />
    </Link>
  );
}

export function HeaderLink({ children, href }: any) {
  return (
    <Link
      className="border-b border-transparent text-sm uppercase hover:border-black"
      href={href}
    >
      {children}
    </Link>
  );
}

export function DesktopHeaderLinks({ children, href }: any) {
  return (
    <nav className="hidden w-full flex-row items-center justify-end gap-8 pr-4 md:flex">
      <HeaderDropdown>Pinturas</HeaderDropdown>
      {links.map((link) => {
        return (
          <HeaderLink key={link.name} href={link.href}>
            {link.name}
          </HeaderLink>
        );
      })}
      <Link className="w-4" href="https://www.instagram.com/joanasbrum/">
        <img src="/instagram.svg" className="h-4 w-4" />
      </Link>
    </nav>
  );
}

export function MobileBarsButton() {
  return (
    <button className="md:hidden">
      <Bars3Icon className="h-6 w-6" />
    </button>
  );
}

export default function Header({ theme }: any) {
  return (
    <header
      className={clsx('fixed z-10 flex w-full justify-between p-5', {
        'bg-gradient-to-b from-zinc-100 invert': theme == 'dark',
      })}
    >
      <MainLogo />
      <DesktopHeaderLinks />
      <MobileBarsButton />
    </header>
  );
}
