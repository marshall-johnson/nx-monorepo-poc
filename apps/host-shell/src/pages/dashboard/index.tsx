import { Suspense, lazy } from 'react';
import { Skeleton } from '@shared/ui';
import { SkeletonSectionCard } from '../../components/skeletons';

const SectionCards = lazy(() => import('section_cards/Module'));

const Charts = lazy(() => import('charts/Module'));

export default function Dashboard() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <Suspense fallback={<SkeletonSectionCard />}>
            <SectionCards />
          </Suspense>
          <div className="px-4 lg:px-6">
            <Suspense
              fallback={<Skeleton className="h-[200px] w-full rounded-xl" />}
            >
              <Charts />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
