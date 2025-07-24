import { cn } from '../utils';

export type TabsData = {
  id: string;
  title: string;
};

type Props = {
  readonly tabs: readonly TabsData[];
  readonly currentTab: TabsData;
  readonly onChange: (tab: TabsData) => void;
};

export function Tabs({ tabs, currentTab, onChange }: Props) {
  return (
    <div className="inline-flex items-cenmter gap-5 md:gap-10 text-[10px] font-medium leading-normal">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={currentTab.id === tab.id}
          tabIndex={currentTab.id === tab.id ? 0 : -1}
          className={cn(
            'py-1.5 uppercase text-primary-foreground relative bg-transparent border-none cursor-pointer outline-none',
            currentTab.id === tab.id ? 'text-foreground' : ''
          )}
          onClick={() => onChange(tab)}
        >
          <span>{tab.title}</span>
          {currentTab.id === tab.id && (
            <div className="absolute left-0 -bottom-1 h-[3px] w-full bg-primary rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
}
