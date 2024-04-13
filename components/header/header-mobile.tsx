'use client';

import { Category } from '@/lib/definitions';
import { categoryTranslations } from '@/lib/utils';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ComponentProps, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export function MobileNavLink({
  className,
  ...props
}: ComponentProps<typeof Link>) {
  const router = useRouter();

  return (
    <Link
      className={twMerge('block p-4 text-sm uppercase text-white', className)}
      {...props}
    />
  );
}

export default function MobileMenu({ categories }: { categories: Category[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div data-open={open} className="md:hidden">
      <button className="p-4" onClick={() => setOpen(true)}>
        <Bars3Icon className="h-6 w-6 " />
      </button>
      <div
        className={twMerge(
          'left-0 top-0 h-screen w-full overflow-y-scroll bg-black/[.95] pb-20',
          open === false && 'hidden',
          open === true && 'fixed',
        )}
      >
        <div className="flex justify-end p-5">
          <button className="p-4" onClick={() => setOpen(false)}>
            <XMarkIcon className="h-6 w-6 text-white" />
          </button>
        </div>
        <nav>
          {categories.map((category, index) => (
            <div key={category.name}>
              <MobileNavLink
                href={`/${category.name}`}
                onClick={() => setOpen(false)}
              >
                {categoryTranslations[category.name]}
              </MobileNavLink>
              {category.years.map((year, index) => (
                <MobileNavLink
                  key={index}
                  href={`/${category.name}/${year}`}
                  className="flex pl-12"
                  onClick={() => setOpen(false)}
                >
                  {year}
                  <ChevronRightIcon className="ml-2 w-4" />
                </MobileNavLink>
              ))}
            </div>
          ))}
          <MobileNavLink href="bio">Bio</MobileNavLink>
          <MobileNavLink href="bio">Instagram</MobileNavLink>
        </nav>
      </div>
    </div>
  );
}
