'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Art } from '@/app/lib/definitions';

export default function PageCarousel({ arts }: { arts: Art[] }) {
  // const arts = await fetchHomeArts();

  return (
    <Swiper
      modules={[Navigation, A11y]}
      slidesPerView={'auto'}
      navigation
      className="px-10 pt-32"
    >
      {arts.map((art) => (
        <SwiperSlide
          key={art.id}
          className="mr-10 flex w-fit flex-col items-center"
        >
          <Image
            src={art.image_url}
            alt={art.title}
            className="h-[60vh] w-fit max-w-fit bg-slate-200 object-contain"
            width={500}
            height={300}
          />
          <div className="w-full max-w-full p-4 text-xs md:px-0">
            <p className="font-bold uppercase">{art.title}</p>
            <p>
              {art.description}, {art.dimensions}, {art.year}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
