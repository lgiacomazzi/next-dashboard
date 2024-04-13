import Header from '@/components/header/header';
import { fetchHomeArts } from '@/lib/data';
import { MainCarousel } from '@/components/carousel/main-carousel';

export default async function Page() {
  const arts = await fetchHomeArts();

  return (
    <>
      <Header theme="dark" />
      <main className="h-screen w-screen overflow-hidden">
        <MainCarousel arts={arts} />
      </main>
    </>
  );
}
