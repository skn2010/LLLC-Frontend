import { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  const data = await request.json();

  if (!data.tags) {
    return;
  }

  revalidateTag(data.tags);
  return Response.json({ revalidated: true, now: Date.now() });
}
