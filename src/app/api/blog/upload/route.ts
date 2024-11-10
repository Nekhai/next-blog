import { put } from '@vercel/blob';

export async function POST(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

  const blob = await put(filename, request.body, {
    access: 'public',
  });

  return Response.json(blob);
}
