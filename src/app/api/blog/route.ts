import prisma from '@/lib/prisma';

export async function GET(req: Request): Promise<Response> {
  try {
    const { searchParams } = new URL(req.url);
    const postId = searchParams.get('id');

    if (postId) {
      const post = await prisma.post.findUnique({
        where: { id: postId }
      });

      if (post) {
        return Response.json(post);
      }

      return Response.json({ message: 'Post not found' }, { status: 404 });
    }

    const posts = await prisma.post.findMany({
      where: { published: true },
    });

    return Response.json(posts);
  } catch (err: unknown) {
    return Response.json(
      { message: 'Internal server error', error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request): Promise<Response> {
  try {
    const {
      title, content, published, userEmail
    } = await req.json();

    if (!title || !content || !userEmail || typeof published !== 'boolean') {
      return Response.json(
        { message: 'Missing or invalid fields' },
        { status: 400 }
      );
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        published,
        author: { connect: { email: userEmail } }
      },
    });

    return Response.json(post);
  } catch (err: unknown) {
    return Response.json(
      { message: 'Internal server error', error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
