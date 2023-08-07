import { NextResponse } from "next/server";

import postList from "@/src/data/postListMock";
import { Post } from "@/src/interfaces/Post";

export async function GET(req: Request, { params }: { params: { postId: string } }): Promise<Post> {
  const postId = params.postId;
  try {
    const post = postList.find((elem) => elem.id === postId);

    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
