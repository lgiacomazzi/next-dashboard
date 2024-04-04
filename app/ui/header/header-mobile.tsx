'use client';

import { Category } from '@/app/lib/definitions';
import { artTranslations } from '@/app/lib/utils';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function ButtonMenu({ category }: { category: Category }) {
  return (
    <Link href={`/${category.name}`}>
      <div className="border-t p-4 text-sm uppercase">
        {artTranslations[category.name]}
      </div>
    </Link>
  );
}

export function YearButtonMenu({
  category,
  year,
}: {
  category: Category;
  year: string;
}) {
  return (
    <Link href={`/${category.name}/${year}`}>
      <div className="p-3 pl-12 text-sm uppercase hover:opacity-50">{year}</div>
    </Link>
  );
}

export default function MobileMenu({ categories }: { categories: Category[] }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const selectedYear = usePathname().split('/')[2];

  return (
    <div className="dropdown text-sm md:hidden">
      <button onClick={() => setIsMenuVisible(!isMenuVisible)}>
        <Bars3Icon className="h-6 w-6" />
      </button>
      <div
        className={clsx(
          'fixed bottom-0 left-0 right-0 top-0 z-20 h-screen w-screen transform-gpu bg-white transition',
          { 'translate-x-full': !isMenuVisible },
        )}
      >
        <div className="flex justify-end p-5">
          {/* <MainLogo /> */}
          <button
            className="h-12"
            onClick={() => setIsMenuVisible(!isMenuVisible)}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <nav>
          {categories.map((category, index) => (
            <div key={index}>
              <ButtonMenu category={category} />
              {category.years.length > 1 && (
                <ul key={index}>
                  {category.years.map((year, index) => (
                    <YearButtonMenu
                      key={index}
                      category={category}
                      year={year}
                    />
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
