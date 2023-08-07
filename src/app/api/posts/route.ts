import { NextResponse } from "next/server";

import postList from "@/src/data/postListMock";
import { PostsList } from "@/src/interfaces/Post";

export async function GET(): Promise<NextResponse<PostsList>> {
  try {
    const data = postList;

    return NextResponse.json(data);
  } catch (err) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
