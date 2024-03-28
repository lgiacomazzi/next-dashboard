import { PaintingsPageParams } from '@/app/lib/definitions';
import { fetchYearlyPaintings } from '@/app/lib/data';
import Image from 'next/image';
import Header from '@/app/ui/header/header';

export default async function PaintingsPage({
  params,
}: {
  params: PaintingsPageParams;
}) {
  const query = params.year.toString();
  const arts = await fetchYearlyPaintings(query);

  return (
    <>
      <Header />
      {arts.map((art, index) => (
        <img
          src={art.image_url}
          alt={art.title}
          key={index}
          className="mr-4"
          width={320}
          height={320}
        />
      ))}
    </>
  );
}
