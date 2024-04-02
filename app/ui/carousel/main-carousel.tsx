'use client';

import { Art } from '@/app/lib/definitions';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CarouselButton } from './carousel-button';
import { artTranslations } from '@/app/lib/utils';
import clsx from 'clsx';

const generateLink = (category: string, year: string): string => {
  if (category === 'painting') {
    return `/${category}/${year}`;
  }
  return `/${category}`;
};

export function ImageTag({ art }: any) {
  return (
    <div className="fixed bottom-0 left-0 z-10 w-full bg-zinc-950 p-2.5 text-sm uppercase text-white active:opacity-90 md:bottom-10 md:left-10 md:w-fit">
      <Link href={generateLink(art.category, art.year)}>
        <span className="opacity-60">
          {art.title} / {artTranslations[art.category]}
        </span>{' '}
        / {art.year}
      </Link>
    </div>
  );
}

export function MainCarouselImage({
  art,
  index,
  currentIndex,
}: {
  art: Art;
  index: number;
  currentIndex: number;
}) {
  return (
    <Link href={generateLink(art.category, art.year)}>
      <Image
        src={art.image_url}
        alt={art.title}
        priority={index === 0}
        className={clsx(
          'h-full w-full object-cover object-center opacity-0 transition focus:scale-125',
          {
            'scale-105 opacity-100': index === currentIndex,
          },
        )}
        fill
      />
    </Link>
  );
}

export const MainCarousel = ({ arts }: { arts: Art[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 4000);
    // Clear the interval on component unmount
    return () => clearInterval(timer);
  }, [currentIndex]); // Dependency array ensures the interval is reset if currentIndex changes

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

  return (
    <div className="h-screen w-screen bg-black">
      <CarouselButton direction="left" onClick={goToPrevious} />
      <CarouselButton direction="right" onClick={goToNext} />
      <ImageTag art={arts[currentIndex]} />
      <div className="relative h-full w-full">
        {arts &&
          arts.map((art: Art, index: number) => (
            <MainCarouselImage
              key={index}
              art={art}
              index={index}
              currentIndex={currentIndex}
            />
          ))}
      </div>
    </div>
  );
};
