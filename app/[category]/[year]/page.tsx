import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { BlurImage } from '@/components/blur-image';
import { fetchYearlyPaintings } from '@/lib/data';
import { Metadata, ResolvingMetadata } from 'next';
import { categoryTranslations } from '@/lib/utils';

type YearlyCategoryPageParams = {
  year: string;
  category: string;
};

export async function generateMetadata(
  { params }: { params: YearlyCategoryPageParams },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const parentTitle = (await parent).title?.absolute;
  const title = `${categoryTranslations[params.category]} 
    ${params.year} - ${parentTitle}`;
  return { title };
}

export default async function YearlyCategoryPage({
  params,
}: {
  params: YearlyCategoryPageParams;
}) {
  const arts = await fetchYearlyPaintings(params.year, params.category);

  return (
    <Carousel className="md:h-screen md:w-screen" opts={{ align: 'center' }}>
      <CarouselContent className="flex-col pt-24 max-md:!transform-none md:mr-40 md:h-screen md:transform-gpu md:flex-row md:py-24">
        {arts.map((art) => (
          <CarouselItem
            key={art.id}
            className="flex min-w-[40vw] shrink flex-col justify-center max-md:mb-10 md:pl-40"
          >
            <BlurImage
              src={art.image_url}
              alt={art.title}
              width={400}
              height={400}
              className="w-full"
            />
            <div className="p-4 text-xs md:max-w-[300px] md:px-0">
              <p className="font-bold uppercase">{art.title}</p>
              <p className="text-zinc-600">
                {art.description}
                {art.dimensions && ` [${art.dimensions}]`}
                {art.year && ` - ${art.year}`}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="fixed left-10 hidden md:block"
        size="iconbig"
        variant="dark"
      />
      <CarouselNext
        className="fixed right-10 hidden md:block"
        size="iconbig"
        variant="dark"
      />
    </Carousel>
  );
}
