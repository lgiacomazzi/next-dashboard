import { fetchYearlyPaintings } from '@/app/lib/data';
import Header from '@/app/ui/header/header';
import PageCarousel from '@/app/ui/carousel/page-carousel';
import Footer from '@/app/ui/footer';

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
      <main className="bg-white">
        <PageCarousel arts={arts} />
      </main>
      <Footer />
    </>
  );
}
