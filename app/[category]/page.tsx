import { fetchHomeArts } from '@/app/lib/data';
import PageCarousel from '@/app/ui/carousel/page-carousel-v2';

export default async function Page() {
  const arts = await fetchHomeArts();

  return <PageCarousel arts={arts} />;
}
