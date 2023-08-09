import { dehydrate } from "@tanstack/react-query";
import { Suspense } from "react";

import PostDetailsLoading from "@/src/app/posts/[postId]/loading";
import PostDetails from "@/src/components/organisms/postDetails/PostDetails";
import Hydrate from "@/src/lib/HydrateClient";
import getQueryClient from "@/src/lib/getQueryClient";
import PostsClient from "@/src/services/PostsClient";

interface SinglePostProps {
  params: { postId: string };
}

export default async function SinglePost({ params }: SinglePostProps): Promise<JSX.Element> {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["post", `${params.postId}`], () => PostsClient.getSinglePost(params.postId));
  const dehydratedState = dehydrate(queryClient);

  return (
    <main>
      <Hydrate state={dehydratedState}>
        <section>
          <Suspense fallback={<PostDetailsLoading />}>
            <PostDetails />
          </Suspense>
        </section>
      </Hydrate>
    </main>
  );
}
