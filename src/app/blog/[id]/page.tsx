import { Blog } from '@/types';

export default async function BlogDetailPage({ params }: { params: { id: string } }) {
  const res: Response = await fetch(`${process.env.BASE_URL}/blog?id=${params.id}`, {
    cache: 'no-store',
  });
  const blog: Blog = await res.json();

  return (
    <div>
      {blog.title}
    </div>
  );
}
