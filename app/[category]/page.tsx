import Link from 'next/link';
import Image from 'next/image';
import { fetchHomeArts } from '@/app/lib/data';
import Header from '../ui/header/header';

export default async function Page({ params }: any) {
  const arts = await fetchHomeArts();

  return (
    <>
      <Header theme="light" />
      <main className="pt-20">
        <p>{params.category} Page</p>
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
    </>
  );
}
