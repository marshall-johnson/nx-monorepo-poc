import { useState, lazy, Suspense } from 'react';
import { TabsData } from '@shared/ui/components';
import { Header } from '../../components/home';
const RoutingTable = lazy(() => import('routing_table/Module'));

const tabs: TabsData[] = [
  {
    id: 'routingTable',
    title: 'Routing Table',
  },
  {
    id: 'connectionLists',
    title: 'Connection lists',
  },
];

export default function HomePage() {
  const [tab, setTab] = useState<TabsData>(tabs[0]);
  return (
    <div className="flex flex-col gap-5 flex-1 overflow-hidden">
      <Header tabs={tabs} currentTab={tab} onChangeTab={setTab} />
      {tab.id === 'routingTable' && (
        <Suspense fallback={<div>Loading</div>}>
          <RoutingTable />
        </Suspense>
      )}
      {tab.id === 'connectionLists' && (
        <div className="grid place-content-center">
          <span className="text-primary-foreground font-medium text-4xl">
            Connection lists
          </span>
        </div>
      )}
    </div>
  );
}
