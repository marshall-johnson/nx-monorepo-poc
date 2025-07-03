import { Suspense, lazy } from 'react';
import { Skeleton } from '@shared/ui';

const SectionCards = lazy(() => import('section_cards/Module'));

const Charts = lazy(() => import('charts/Module'));

function SkeletonSectionCard() {
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

export default function () {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <Suspense fallback={<SkeletonSectionCard />}>
            <SectionCards />
          </Suspense>
          <div className="px-4 lg:px-6">
            <Suspense fallback={<Skeleton className="h-[200px] w-full rounded-xl" />}>
              <Charts />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
