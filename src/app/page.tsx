import { dehydrate } from "@tanstack/react-query";
import { Suspense } from "react";

import Loading from "@/src/app/loading";
import Typography from "@/src/components/atoms/typography/Typography";
import PostList from "@/src/components/organisms/postList/PostList";
import Hydrate from "@/src/lib/HydrateClient";
import getQueryClient from "@/src/lib/getQueryClient";
import PostsClient from "@/src/services/PostsClient";

export default async function Home(): Promise<JSX.Element> {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["posts"], PostsClient.getPosts);
  const dehydratedState = dehydrate(queryClient);

  return (
    <main>
      <Hydrate state={dehydratedState}>
        <section>
          <Typography variant="h1" color="primary" className="mt-4 mb-8 text-6xl font-semibold">
            Check our latest Posts
          </Typography>
          <Suspense fallback={<Loading />}>
            <PostList />
          </Suspense>
        </section>
      </Hydrate>
    </main>
  );
}
