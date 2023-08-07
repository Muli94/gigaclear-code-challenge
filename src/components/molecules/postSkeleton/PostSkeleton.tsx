import Skeleton from "@/src/components/atoms/skeleton/Skeleton";

function PostSkeleton(): JSX.Element {
  return (
    <div className="w-[344px] p-3 rounded-xl">
      <div className="flex flex-col gap-3">
        <Skeleton className="w-full h-[240px] rounded-xl" />
        <Skeleton className="w-full" />
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Skeleton className="w-[64px] h-[24px]" />
            <Skeleton className="w-[64px] h-[24px]" />
          </div>
          <Skeleton className="w-[64px] h-[24px]" />
        </div>
        <Skeleton className="w-full h-[100px]" />
      </div>
    </div>
  );
}

export default PostSkeleton;
