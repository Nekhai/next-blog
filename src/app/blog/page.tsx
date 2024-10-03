import { BlogCard } from '@/components/BlogCard/BlogCard';
import { mockedData } from './mockedData';

export default function BlogPage() {
  return (
    <div className="flex py-5">
      {
        mockedData.map((blog) => (
          <div className="flex justify-center w-1/4">
            <BlogCard
              key={blog.id}
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
