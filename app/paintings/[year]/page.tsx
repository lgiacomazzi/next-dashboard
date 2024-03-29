import { PaintingsPageParams } from '@/app/lib/definitions';
import { fetchYearlyPaintings } from '@/app/lib/data';
import Image from 'next/image';
import Header from '@/app/ui/header/header';
import PageCarousel from '@/app/ui/carousel/page-carousel';

export default async function PaintingsPage({
  params,
}: {
  params: PaintingsPageParams;
}) {
  const query = params.year;
  const arts = await fetchYearlyPaintings(query);

  return (
    <main className="h-screen w-screen">
      <PageCarousel arts={arts} />
    </main>
  );
}
