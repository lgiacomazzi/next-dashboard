import Link from 'next/link';
import Header from '@/app/ui/header/header';
import Image from 'next/image';
import { fetchHomeArts } from '@/app/lib/data';

export default async function Page() {
  const arts = await fetchHomeArts();

  return (
    <>
      <Header />
      <main className="pt-20">
        <p>Paintings Page</p>
        {arts.map((art) => (
          <img
            src={art.image_url}
            alt={art.title}
            className="mr-4"
            width={320}
            height={320}
          />
        ))}
      </main>
    </>
  );
}
