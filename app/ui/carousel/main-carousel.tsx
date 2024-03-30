'use client';

import { Art } from '@/app/lib/definitions';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CarouselButton } from './carousel-button';

const artTranslations: { [key: string]: string } = {
  painting: 'Pinturas',
  drawing: 'Desenhos',
  illustrations: 'Ilustrações',
  collage: 'Colagens',
};

const generateLink = (category: string, year: string): string => {
  if (category === 'painting') {
    return `/${category}s/${year}`;
  }
  return `/${category}s`;
};

export function ImageTag({ art }: any) {
  return (
    <div className="absolute bottom-0 left-0 z-10 w-full bg-zinc-950 p-2.5 text-sm uppercase text-white md:w-fit">
      <Link href={generateLink(art.category, art.year)}>
        <span className="opacity-60">
          {art.title} / {artTranslations[art.category]}
        </span>{' '}
        / {art.year}
      </Link>
    </div>
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
    <div className="carousel h-full w-full bg-zinc-950">
      <CarouselButton direction="left" onClick={goToPrevious} />
      <CarouselButton direction="right" onClick={goToNext} />

      <ImageTag art={arts[currentIndex]} />

      <div className="relative h-full w-full">
        {arts &&
          arts.map((art: Art, index: number) => (
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
