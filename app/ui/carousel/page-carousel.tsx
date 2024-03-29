'use client';

import { motion } from 'framer-motion';
import { CarouselButton } from './carousel-button';
import { useState } from 'react';
import { Art } from '@/app/lib/definitions';
import Image from 'next/image';

export function ArtDisplay({ art, key }: any) {
  return (
    <div className="mb-12 md:mb-0 md:p-12" key={key}>
      <Image
        src={art.image_url}
        alt={art.description}
        className="w-full object-cover object-center"
        width={1920}
        height={10800}
      />
      <div className="px-8 py-4 text-xs md:p-0	">
        <p>{art.title}</p>
        <p>{art.description}</p>
        <p>{art.dimensions}</p>
      </div>
    </div>
  );
}

export default function PageCarousel({ arts }: any) {
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
  return (
    <div className="flex h-screen w-screen flex-col overflow-x-scroll pt-24 md:flex-row">
      <CarouselButton direction="left" onClick={goToPrevious} />
      <CarouselButton direction="right" onClick={goToNext} />
      {arts.length > 0
        ? arts.map((art: Art, index: number) => (
            <ArtDisplay art={art} key={index} />
          ))
        : 'No arts found'}
    </div>
  );
}
