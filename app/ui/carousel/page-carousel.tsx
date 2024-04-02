'use client';

import { motion } from 'framer-motion';
import { CarouselButton } from './carousel-button';
import { useEffect, useRef, useState } from 'react';
import { Art } from '@/app/lib/definitions';
import Image from 'next/image';
import clsx from 'clsx';

export function ArtDisplay({ art }: any) {
  return (
    <div className="mb-12 snap-center md:mb-0">
      <Image
        src={art.image_url}
        alt={art.description}
        className="w-full bg-slate-200 object-cover object-center md:h-[60vh] md:max-h-fit md:w-fit md:max-w-fit"
        width={1920}
        height={1080}
        priority
      />
      <div className="p-4 text-xs md:px-0">
        <p className="font-bold uppercase">{art.title}</p>
        <p>
          {art.description} {art.dimensions && `, ${art.dimensions}`}
          {art.year && `, ${art.year}`}
        </p>
      </div>
    </div>
  );
}

export default function PageCarousel({ arts }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToItem = (index: number) => {
    console.log(itemRefs);
    itemRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };

  const navigate = (direction: 'left' | 'right') => {
    console.log(direction);
    if (direction === 'left') {
      if (currentIndex > 0) {
        scrollToItem(currentIndex - 1);
        setCurrentIndex(currentIndex - 1);
      }
    } else {
      if (currentIndex < arts.length - 1) {
        scrollToItem(currentIndex + 1);
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  // Reset refs array when arts change
  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, arts.length);
  }, [arts]);

  return (
    <div className="flex snap-mandatory flex-col overflow-hidden pt-24 md:h-screen md:flex-row md:gap-8 md:px-32 md:pt-32">
      {/* <CarouselButton direction="left" onClick={() => navigate('left')} /> */}
      {/* <CarouselButton direction="right" onClick={() => navigate('right')} /> */}
      {arts.length > 0
        ? arts.map((art: Art, index: number) => (
            // <ArtDisplay
            //   ref={(el) => (itemRefs.current[index] = el)}
            //   art={art}
            //   key={index}
            // />
            <div
              key={index}
              className={clsx('mb-12 snap-center transition md:mb-0', {
                // 'opacity-80': index < currentIndex,
              })}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              <Image
                src={art.image_url}
                alt={art.description}
                className="w-fit bg-slate-200 object-cover object-center md:h-[60vh] md:max-h-fit md:max-w-fit"
                width={1920}
                height={1080}
                priority
              />
              <div className="w-3/4 p-4 text-xs md:px-0">
                <p className="font-bold uppercase">{art.title}</p>
                <p>
                  {art.description}
                  {art.dimensions && ` [${art.dimensions}]`}
                  {art.year && ` - ${art.year}`}
                </p>
              </div>
            </div>
          ))
        : 'No arts found'}
    </div>
  );
}
