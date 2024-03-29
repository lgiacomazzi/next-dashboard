import Link from 'next/link';
import Image from 'next/image';
import { fetchHomeArts } from '@/app/lib/data';

export default async function Page({ params }: any) {
  console.log(params);
  const arts = await fetchHomeArts();

  return (
    <main className="pt-20">
      <p>Paintings Page</p>
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
    </main>
  );
}
