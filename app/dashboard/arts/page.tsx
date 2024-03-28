import { fetchArts } from '@/app/lib/data';
import Image from 'next/image';

export default async function Page() {
  const arts = await fetchArts();
  console.log(arts);

  return (
    <main>
      <p>Arts Page</p>
      {arts.map((art, index) => (
        <Image
          src={art.image_url}
          alt={`${art.title}`}
          key={index}
          className="mr-4"
          width={32}
          height={32}
        />
      ))}
    </main>
  );
}
