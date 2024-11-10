// export default function ShopPage() {
//   return (
//     <div className="page-height pt-20 text-xl text-center">
//       Under construction
//     </div>
//   );
// }

import { list } from '@vercel/blob';
import Image from 'next/image';

export default async function ShopPage() {
  async function allImages() {
    const blobs = await list();
    return blobs;
  }
  const images = await allImages();

  return (
    <section>
      {images.blobs.map((image) => (
        <Image
          priority
          key={image.pathname}
          src={image.url}
          alt="Image"
          width={200}
          height={200}
        />
      ))}
    </section>
  );
}
