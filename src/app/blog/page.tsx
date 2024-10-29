import { BlogCard } from '@/components/BlogCard/BlogCard';
import { Blog } from '@/types';

export default async function BlogPage() {
  const res: Response = await fetch(`${process.env.BASE_URL}/blog`, {
    cache: 'no-store',
  });
  const blogs: Blog[] = await res.json();

  return (
    <div className="page-height flex flex-wrap justify-center gap-5 pt-20 pb-10 px-10">
      {
        blogs.map((blog: Blog) => (
          <div className="flex justify-center" key={blog.id}>
            <BlogCard
              slug={blog.id}
              image={blog.image}
              name={blog.title}
              description={blog.content}
            />
          </div>
        ))
      }
    </div>
  );
}
