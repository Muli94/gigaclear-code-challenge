import { NextResponse } from "next/server";

import postList from "@/src/data/postListMock";
import { Post } from "@/src/interfaces/Post";

export async function GET(req: Request, { params }: { params: { postId: string } }): Promise<NextResponse<Post>> {
  const postId = params.postId;

  try {
    const post = postList.find((elem) => elem.id === postId);

    if (!post) {
      throw new Error("Post not found");
    }

    return NextResponse.json(post);
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse("Post not found", { status: 404 });
    }

    return new NextResponse("Internal Error", { status: 500 });
  }
}
