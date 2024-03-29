import { fetchYearlyPaintings } from '@/app/lib/data';
import Image from 'next/image';
import Header from '@/app/ui/header/header';
import PageCarousel from '@/app/ui/carousel/page-carousel';

type PaintingsPageParams = {
  year: string;
};

export default async function PaintingsPage({
  params,
}: {
  params: PaintingsPageParams;
}) {
  const query = params.year;
  const arts = await fetchYearlyPaintings(query);

  return (
    <>
      <Header theme="light" />
      <main className="h-screen w-screen">
        <PageCarousel arts={arts} />
        {/* <Footer/> */}
      </main>
    </>
  );
}
