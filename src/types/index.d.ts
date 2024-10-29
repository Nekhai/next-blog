export type Blog = {
  id: number;
  image: string;
  title: string;
  content: string;
  authorId: number;
  published: boolean;
  author: {
    name: string
  };
  imageUrl?: string;
};
