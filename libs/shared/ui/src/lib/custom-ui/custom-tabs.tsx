export type TabsData = {
  id: string;
  title: string;
};

type Props = {
  tabs: TabsData[];
  defaultTab?: string;
  onChange: (tab: TabsData) => void;
};

export function CustomTabs({ tabs }: Props) {
  return (
    <div className="inline-flex items-cenmter gap-10">
      {tabs.map((tab) => (
        <div key={tab.id}>{tab.title}</div>
      ))}
    </div>
  );
}
