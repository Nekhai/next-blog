import { BlogCard } from '@/components/BlogCard/BlogCard';

export default async function BlogPage() {
  const res = await fetch('http://localhost:3000/api/blog');
  const blogs = await res.json();

  return (
    <div className="flex py-5">
      {
        blogs.map((blog) => (
          <div className="flex justify-center w-1/4" key={blog.id}>
            <BlogCard
              slug={blog.id}
              image={blog.image}
              name={blog.name}
              description={blog.description}
            />
          </div>
        ))
      }
    </div>
  );
}
