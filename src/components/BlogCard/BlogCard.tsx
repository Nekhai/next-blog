import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

interface BlogCardProps {
  slug: number;
  image: string;
  name: string;
  description: string;
}

export const BlogCard: FC<BlogCardProps> = ({
  slug, image, name, description
}) => (
  <Link href={`/blog/${slug}`}>
    <div className="border">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
      />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  </Link>
);

export default BlogCard;
