'use client';

import { Category } from '@/app/lib/definitions';
import { artTranslations } from '@/app/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Instagram from '@/public/instagram.svg';

export function DesktopDropdown({
  category,
  years,
}: {
  category: string;
  years: string[];
}) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const selectedYear = usePathname().split('/')[2];

  return (
    <div className="dropdown text-sm">
      <button
        className="border-b border-transparent uppercase hover:border-black"
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
      >
        {artTranslations[category]}
        {selectedYear && `/${selectedYear}`}
      </button>
      {isDropdownVisible && (
        <div className="absolute flex flex-col gap-2 bg-zinc-950 p-4 text-center text-white">
          {years.map((year) => (
            <Link
              href={`/painting/${year}`}
              key={year}
              onClick={() => setIsDropdownVisible(false)}
            >
              {year}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function DesktopNavBar({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <nav className="hidden w-full flex-row items-center justify-end gap-8 pr-4 md:flex">
      {categories.map((category, index) =>
        category.years.length === 1 ? (
          <Link
            key={index}
            href={`/${category.name}`}
            className="border-b border-transparent text-sm uppercase hover:border-black"
          >
            {artTranslations[category.name]}
          </Link>
        ) : (
          <DesktopDropdown
            key={index}
            category={category.name}
            years={category.years}
          />
        ),
      )}
      <Link className="w-4" href="https://www.instagram.com/joanasbrum/">
        <Instagram className="h-4 w-4" />
      </Link>
    </nav>
  );
}