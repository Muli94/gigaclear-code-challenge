import PostSkeleton from "@/src/components/molecules/postSkeleton/PostSkeleton";

function Loading(): JSX.Element {
  return (
    <div className="flex flex-wrap justify-between">
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </div>
  );
}

export default Loading;
