import { fetchCategoryArts } from '@/lib/data';
import { Metadata, ResolvingMetadata } from 'next';
import { categoryTranslations } from '@/lib/utils';
import { BlurImage } from '@/components/blur-image';

type CategoryPageParams = {
  category: string;
};

export async function generateMetadata(
  { params }: { params: CategoryPageParams },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const parentTitle = (await parent).title?.absolute;
  const title = `${categoryTranslations[params.category]} - ${parentTitle}`;
  return { title };
}

export default async function CategoryPage({
  params,
}: {
  params: CategoryPageParams;
}) {
  const arts = await fetchCategoryArts(params.category);

  return (
    <div className="columns-2 gap-4 p-4 pt-32 md:gap-10 md:p-10">
      {arts.map((art, index) => (
        <div key={art.id} className="mb-4 break-inside-avoid-column">
          <BlurImage
            id={index.toString()}
            src={art.image_url}
            alt={art.description}
            className="w-auto bg-slate-200"
            width={500}
            height={500}
            // blurDataURL={generateBlurPlaceholder(art.image_url)}
            placeholder="blur"
          />
          <p className="py-2 text-xs">{art.title}</p>
        </div>
      ))}
    </div>
  );
}
