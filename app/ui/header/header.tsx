'use client';

import Link from 'next/link';
import HeaderDropdown from './header-dropdown';
import Image from 'next/image';
import { Bars3Icon } from '@heroicons/react/24/outline';

const links = [
  { name: 'Desenhos', href: '/drawings' },
  { name: 'Ilustrações', href: '/illustrations' },
  { name: 'Colagens', href: '/collage' },
  { name: 'Bio', href: '/bio' },
  // { name: 'Instagram', href: 'https://www.instagram.com/joanasbrum/' },
];

export function MainLogo() {
  return (
    <div className="w-full">
      <Link href="/">
        <Image
          width="150"
          height="50"
          src="joana_brum_brasil.svg"
          alt="Joana Brum Brasil"
        />
      </Link>
    </div>
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
    <div className="hidden flex-row items-center gap-10 pr-4 md:flex">
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
    </div>
  );
}

export function MobileBarsButton() {
  return (
    <button className="md:hidden">
      <Bars3Icon className="h-6 w-6" />
    </button>
  );
}

export default function Header() {
  return (
    <header className="fixed z-10 flex w-full bg-gradient-to-b from-slate-100 px-5 py-5 invert">
      <MainLogo />
      <DesktopHeaderLinks />
      <MobileBarsButton />
    </header>
  );
}
