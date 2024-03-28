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
];

export function HeaderLink({ children, href }: any) {
  return (
    <Link className="text-sm uppercase" href={href}>
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
      <img src="/instagram.svg" />
    </div>
  );
}

export function MobileBarsButton() {
  return (
    <button className="p-4 md:hidden">
      <Bars3Icon className="h-6 w-6" />
    </button>
  );
}

export default function Header() {
  return (
    <header className="fixed z-10 flex w-full px-4 py-2">
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
      <DesktopHeaderLinks />
      <MobileBarsButton />
    </header>
  );
}
