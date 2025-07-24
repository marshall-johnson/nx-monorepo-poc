import { useState } from 'react';
import { Tabs, TabsData, CustomLabeledSwitch } from '@shared/ui/components';
import { AppMenuIcon } from '@shared/ui/icons';
import { Button } from '@shared/ui';
import { Search, Plus } from 'lucide-react';

type Props = {
  readonly currentTab: TabsData;
  readonly tabs: TabsData[];
  readonly onChangeTab: (tab: TabsData) => void;
};

export function Header({ tabs, currentTab, onChangeTab }: Props) {
  const [isolate, setIsolate] = useState<boolean>(false);
  return (
    <div className="flex items-cener justify-between shrink-0">
      <Tabs tabs={tabs} currentTab={currentTab} onChange={onChangeTab} />
      <div className="flex items-center gap-5 text-primary-foreground">
        <div className="flex items-center gap-2.5">
          <span className="text-[11px] leading-3.5">Isolate</span>
          <CustomLabeledSwitch checked={isolate} onCheckedChange={setIsolate} />
        </div>
        <div className="w-px h-6 bg-border" />
        <Search className="size-5.5" />
        <AppMenuIcon />
        <Button variant="outline">
          <Plus /> Add Connection
        </Button>
      </div>
    </div>
  );
}
