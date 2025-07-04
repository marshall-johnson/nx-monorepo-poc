import { Skeleton } from '@shared/ui';

export default function SkeletonSectionCard() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 lg:grid-cols-2 2xl:grid-cols-4">
      {new Array(4).fill(0).map((_, index) => (
        <div key={index} className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
