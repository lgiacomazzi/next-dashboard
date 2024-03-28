'use client';

import { Art } from '@/app/lib/definitions';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

export function ImageTag({ art }: any) {
  return (
    <div className="absolute bottom-0 left-0 z-10 w-full bg-black p-2.5 text-sm uppercase text-white md:w-fit">
      <Link href={`/${art.category}s/${art.year}`}>
        {art.category}s/{art.year}
      </Link>
    </div>
  );
}

export function CarouselButton({ direction, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'absolute bottom-1/2 z-10 hidden bg-black p-4 text-sm text-white md:block',
        {
          'right-10': direction == 'right',
        },
        {
          'left-10': direction == 'left',
        },
      )}
    >
      {direction == 'right' ? (
        <ChevronRightIcon className="h-6 w-6 text-white" />
      ) : (
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      )}
    </button>
  );
}

export const MainCarousel = ({ arts }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstItem = currentIndex === 0;
    const newIndex = isFirstItem ? arts.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastItem = currentIndex === arts.length - 1;
    const newIndex = isLastItem ? 0 : currentIndex + 1;
    console.log('click');
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 4000);
    // Clear the interval on component unmount
    return () => clearInterval(timer);
  }, [currentIndex]); // Dependency array ensures the interval is reset if currentIndex changes

  return (
    <div className="carousel h-full w-full">
      <CarouselButton direction="left" onClick={goToPrevious} />
      <CarouselButton direction="right" onClick={goToNext} />

      <ImageTag art={arts[currentIndex]} />

      <div className="relative h-full w-full">
        {arts.map((art: Art, index: number) => (
          <motion.img
            key={index}
            src={art.image_url}
            alt={`Image ${index + 1}`}
            className="absolute left-0 top-0 h-full w-full object-cover object-center opacity-0"
            style={{
              zIndex: index === currentIndex ? 1 : 0,
            }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
    </div>
  );
};