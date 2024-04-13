'use client';

import { Art } from '@/lib/definitions';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CarouselButton } from './carousel-button';
import { categoryTranslations } from '@/lib/utils';
import { twMerge } from 'tailwind-merge';

type MainCarouselProps = {
  arts: Art[];
};

const generateLink = (category: string, year: string): string => {
  if (category === 'painting') {
    return `/${category}/${year}`;
  }
  return `/${category}`;
};

export function ImageTag({ art }: { art: Art }) {
  return (
    <Link
      href={generateLink(art.category, art.year)}
      className="fixed bottom-0 left-0 z-10 w-full bg-zinc-950 p-2.5 text-sm uppercase text-white active:opacity-90 md:bottom-10 md:left-10 md:w-fit"
    >
      <span className="opacity-60">
        {art.title} / {categoryTranslations[art.category]}
      </span>{' '}
      / {art.year}
    </Link>
  );
}

export function MainCarousel({ arts }: MainCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstItem = currentIndex === 0;
    const newIndex = isFirstItem ? arts.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastItem = currentIndex === arts.length - 1;
    const newIndex = isLastItem ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="h-screen w-screen bg-black">
      <div className="relative h-full w-full">
        {arts.map((art: Art, index: number) => (
          <Link key={art.id} href={generateLink(art.category, art.year)}>
            <Image
              src={art.image_url}
              alt={art.title}
              priority={index === 0}
              fill
              className={twMerge(
                'h-full w-full object-cover object-center opacity-0 transition focus:scale-125',
                index === currentIndex && 'scale-105 opacity-100',
              )}
            />
          </Link>
        ))}
      </div>

      <CarouselButton direction="left" onClick={goToPrevious} />
      <CarouselButton direction="right" onClick={goToNext} />

      <ImageTag art={arts[currentIndex]} />
    </div>
  );
}
