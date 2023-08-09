import Skeleton from "@/src/components/atoms/skeleton/Skeleton";

function PostDetailsSkeleton(): JSX.Element {
  return (
    <div className="w-full p-3 flex flex-col gap-4">
      <div className="flex justify-center">
        <Skeleton className="w-2/3 h-[58px] rounded-xl" />
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <Skeleton className="w-2/3 h-[16px] rounded-xl" />
        <Skeleton className="w-2/3 h-[16px] rounded-xl" />
        <Skeleton className="w-2/3 h-[16px] rounded-xl" />
      </div>
      <div>
        <Skeleton className="w-full h-[503px] rounded-xl" />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <Skeleton className="w-[366px] h-[16px] rounded-xl" />
          <Skeleton className="w-[366px] h-[16px] rounded-xl" />
        </div>
        <div>
          <Skeleton className="w-[208px] h-[43px] rounded-xl" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <Skeleton className="w-2/3 h-[16px] rounded-xl" />
        <Skeleton className="w-2/3 h-[16px] rounded-xl" />
        <Skeleton className="w-2/3 h-[16px] rounded-xl" />
        <Skeleton className="w-2/3 h-[16px] rounded-xl" />
        <Skeleton className="w-2/3 h-[16px] rounded-xl" />
        <Skeleton className="w-2/3 h-[16px] rounded-xl" />
      </div>
    </div>
  );
}

export default PostDetailsSkeleton;
