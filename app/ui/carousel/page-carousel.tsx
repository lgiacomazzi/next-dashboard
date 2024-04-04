'use client';

import { CarouselButton } from './carousel-button';
import { useEffect, useRef, useState } from 'react';
import { Art } from '@/app/lib/definitions';
import Image from 'next/image';
import clsx from 'clsx';

function ArtDetails({ art }: { art: Art }) {
  return (
    <div className="w-3/4 p-4 text-xs md:px-0">
      <p className="font-bold uppercase">{art.title}</p>
      <p>
        {art.description}
        {art.dimensions && ` [${art.dimensions}]`}
        {art.year && ` - ${art.year}`}
      </p>
    </div>
  );
}

function ArtImage({ art }: { art: Art }) {
  return (
    <Image
      src={art.image_url}
      alt={art.description}
      className="w-auto bg-slate-200 md:h-[60vh]"
      // className="w-fit bg-slate-200 object-cover object-center md:h-[60vh] md:max-h-fit md:max-w-fit"
      width={1920}
      height={1080}
    />
    // <img src={art.image_url} className="h-auto w-auto" />
  );
}

function ArtSlide({ art }: { art: Art }) {
  return (
    <div className="mb-12 flex flex-col overflow-hidden md:mb-0 md:min-w-fit">
      <ArtImage art={art} />
      <ArtDetails art={art} />
    </div>
  );
}

export default function PageCarousel({ arts }: { arts: Art[] }) {
  return (
    <div className="flex flex-col pt-24 md:h-screen md:flex-row md:gap-8 md:px-32 md:py-32">
      {arts.length > 0
        ? arts.map((art: Art, index: number) => (
            <ArtSlide key={index} art={art} />
          ))
        : 'No arts found'}
    </div>
  );
}
