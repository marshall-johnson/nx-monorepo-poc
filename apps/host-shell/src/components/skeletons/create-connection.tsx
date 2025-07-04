import { Skeleton, Card, CardContent, CardHeader } from '@shared/ui';

export default function SkeletonCreateConnectionForm() {
  return (
    <div className="flex justify-center">
      <div className="w-[500px] max-w-[500px]">
        <Card className="w-full max-w-sm">
          <CardHeader>
             <Skeleton className="h-4 w-32" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-w-sm mx-auto flex flex-col gap-1">
              <div className="input-group relative mb-[15px]">
                <Skeleton className="h-4 w-20 mb-1" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
              <div className="input-group relative mb-[15px]">
                <Skeleton className="h-4 w-20 mb-1" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
              <div className="mt-3 flex justify-center">
                <Skeleton className="h-10 w-24 rounded-md mx-auto" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
