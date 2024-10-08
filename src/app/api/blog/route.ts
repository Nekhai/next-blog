import { mockedData } from './mockedData';

export async function GET() {
  return Response.json(mockedData);
}
