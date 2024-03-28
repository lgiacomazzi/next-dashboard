import Header from '@/app/ui/header/header';
import { fetchHomeArts } from '@/app/lib/data';
import { MainCarousel } from '@/app/ui/carousel/main-carousel';

export default async function Page() {
  const arts = await fetchHomeArts();

  return (
    <>
      <Header />
      <main className="h-screen overflow-hidden">
        <MainCarousel arts={arts} />
      </main>
    </>
  );
}
