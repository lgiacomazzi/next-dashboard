import Image from 'next/image';
import { ComponentProps } from 'react';
import fs from 'node:fs/promises';
import { getPlaiceholder } from 'plaiceholder';

interface BlurImageProps extends ComponentProps<typeof Image> {}

const defaultBase64 =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMSAxIj48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJncmF5Ii8+PC9zdmc+';

export async function BlurImage(props: BlurImageProps) {
  let base64;
  try {
    const buffer = await fs.readFile(`./public${props.src}`);
    const plaiceholder = await getPlaiceholder(buffer);
    base64 = plaiceholder.base64;
  } catch (error) {
    console.error('Error loading image:', error);
    base64 = defaultBase64; // Use default base64 image in case of an error
  }

  // const buffer = await fs.readFile(`./public${props.src}`);
  // const { base64 } = await getPlaiceholder(buffer);
  //   console.log('>', base64);

  return <Image blurDataURL={base64} placeholder="blur" {...props} />;
}
