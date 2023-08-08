import Skeleton from "@/src/components/atoms/skeleton/Skeleton";

export default {
  component: Skeleton,
  title: "Data Display/Skeleton",
  tags: ["autodocs"],
};

export const Default = (): React.ReactNode => {
  return (
    <div>
      <Skeleton className="w-56 h-4" />
    </div>
  );
};
